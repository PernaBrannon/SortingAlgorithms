/**
 * Sorting Visualizer Class
 * Handles Canvas rendering and animation of sorting algorithms
 */

class SortingVisualizer {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.array = [];
        this.comparing = [];
        this.swapping = [];
        this.isRunning = false;
        
        // Colors
        this.colors = {
            default: '#3498db',      // Blue
            comparing: '#f39c12',    // Orange
            swapping: '#e74c3c',     // Red
            sorted: '#27ae60',       // Green
            background: '#2c3e50'    // Dark blue
        };
        
        this.setupCanvas();
    }

    setupCanvas() {
        // Set canvas size
        this.canvas.width = 800;
        this.canvas.height = 400;
        
        // Set background
        this.ctx.fillStyle = this.colors.background;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    generateArray(size = 50) {
        this.array = [];
        for (let i = 0; i < size; i++) {
            this.array.push(Math.floor(Math.random() * 350) + 10); // Height between 10-360
        }
        this.draw();
        return this.array.slice(); // Return copy for sorting
    }

    draw() {
        // Clear canvas
        this.ctx.fillStyle = this.colors.background;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.array.length === 0) return;
        
        const barWidth = this.canvas.width / this.array.length;
        const maxHeight = this.canvas.height - 20;
        
        for (let i = 0; i < this.array.length; i++) {
            const barHeight = (this.array[i] / 360) * maxHeight;
            const x = i * barWidth;
            const y = this.canvas.height - barHeight;
            
            // Determine color based on state
            let color = this.colors.default;
            if (this.swapping.includes(i)) {
                color = this.colors.swapping;
            } else if (this.comparing.includes(i)) {
                color = this.colors.comparing;
            }
            
            // Draw bar
            this.ctx.fillStyle = color;
            this.ctx.fillRect(x, y, barWidth - 1, barHeight);
            
            // Add value text for smaller arrays
            if (this.array.length <= 20) {
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = '12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(
                    this.array[i], 
                    x + barWidth / 2, 
                    y - 5
                );
            }
        }
    }

    update(array, comparing = [], swapping = []) {
        this.array = array.slice();
        this.comparing = comparing;
        this.swapping = swapping;
        this.draw();
    }

    reset() {
        this.comparing = [];
        this.swapping = [];
        this.isRunning = false;
        this.draw();
    }

    // Animation complete - highlight all bars as sorted
    showSorted() {
        for (let i = 0; i < this.array.length; i++) {
            setTimeout(() => {
                this.ctx.fillStyle = this.colors.sorted;
                const barWidth = this.canvas.width / this.array.length;
                const maxHeight = this.canvas.height - 20;
                const barHeight = (this.array[i] / 360) * maxHeight;
                const x = i * barWidth;
                const y = this.canvas.height - barHeight;
                
                this.ctx.fillRect(x, y, barWidth - 1, barHeight);
            }, i * 10);
        }
    }
}