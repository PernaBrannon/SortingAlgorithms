/**
 * Main Application Controller
 * Handles UI interactions and coordinates between visualizer and sorting algorithms
 */

class SortingApp {
    constructor() {
        this.visualizer = new SortingVisualizer('sortingCanvas');
        this.sorter = new SortingAlgorithms(this.visualizer);
        this.currentArray = [];
        this.isRunning = false;
        
        this.initializeElements();
        this.bindEvents();
        this.generateNewArray();
    }

    initializeElements() {
        // Control elements
        this.algorithmSelect = document.getElementById('algorithmSelect');
        this.arraySizeSlider = document.getElementById('arraySizeSlider');
        this.speedSlider = document.getElementById('speedSlider');
        this.generateBtn = document.getElementById('generateBtn');
        this.sortBtn = document.getElementById('sortBtn');
        this.stopBtn = document.getElementById('stopBtn');
        
        // Display elements
        this.arraySizeDisplay = document.getElementById('arraySizeDisplay');
        this.speedDisplay = document.getElementById('speedDisplay');
        this.statusDisplay = document.getElementById('statusDisplay');
        this.timeDisplay = document.getElementById('timeDisplay');
    }

    bindEvents() {
        // Button events
        this.generateBtn.addEventListener('click', () => this.generateNewArray());
        this.sortBtn.addEventListener('click', () => this.startSorting());
        this.stopBtn.addEventListener('click', () => this.stopSorting());
        
        // Slider events
        this.arraySizeSlider.addEventListener('input', (e) => {
            this.arraySizeDisplay.textContent = e.target.value;
            if (!this.isRunning) {
                this.generateNewArray();
            }
        });
        
        this.speedSlider.addEventListener('input', (e) => {
            const speed = e.target.value;
            this.speedDisplay.textContent = this.getSpeedText(speed);
            this.sorter.delay = this.getDelayFromSpeed(speed);
        });
        
        // Algorithm change
        this.algorithmSelect.addEventListener('change', () => {
            this.updateStatus('Algorithm changed to: ' + this.getAlgorithmName());
        });
    }

    generateNewArray() {
        if (this.isRunning) return;
        
        const size = parseInt(this.arraySizeSlider.value);
        this.currentArray = this.visualizer.generateArray(size);
        this.updateStatus(`Generated new array with ${size} elements`);
        this.timeDisplay.textContent = '0.00s';
    }

    async startSorting() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.updateControls();
        
        const algorithm = this.algorithmSelect.value;
        const algorithmName = this.getAlgorithmName();
        
        this.updateStatus(`Sorting with ${algorithmName}...`);
        
        // Create a copy of the array for sorting
        const arrayToSort = this.currentArray.slice();
        
        // Start timing
        const startTime = performance.now();
        
        try {
            // Run the selected sorting algorithm
            switch (algorithm) {
                case 'bubble':
                    await this.sorter.bubbleSort(arrayToSort);
                    break;
                case 'insertion':
                    await this.sorter.insertionSort(arrayToSort);
                    break;
                case 'selection':
                    await this.sorter.selectionSort(arrayToSort);
                    break;
                case 'shell':
                    await this.sorter.shellSort(arrayToSort);
                    break;
                case 'merge':
                    await this.sorter.mergeSort(arrayToSort);
                    break;
                case 'quick':
                    await this.sorter.quickSort(arrayToSort);
                    break;
                default:
                    throw new Error('Unknown algorithm: ' + algorithm);
            }
            
            // Calculate time taken
            const endTime = performance.now();
            const timeTaken = ((endTime - startTime) / 1000).toFixed(2);
            
            this.updateStatus(`${algorithmName} completed!`);
            this.timeDisplay.textContent = `${timeTaken}s`;
            
            // Show sorted animation
            this.visualizer.showSorted();
            
        } catch (error) {
            this.updateStatus(`Error: ${error.message}`);
            console.error('Sorting error:', error);
        }
        
        this.isRunning = false;
        this.updateControls();
    }

    stopSorting() {
        // Note: This is a simplified stop - in a real implementation,
        // you'd want to add cancellation token support to the sorting algorithms
        this.isRunning = false;
        this.updateControls();
        this.updateStatus('Sorting stopped');
        this.visualizer.reset();
    }

    updateControls() {
        const disabled = this.isRunning;
        
        this.generateBtn.disabled = disabled;
        this.sortBtn.disabled = disabled;
        this.algorithmSelect.disabled = disabled;
        this.arraySizeSlider.disabled = disabled;
        
        this.stopBtn.disabled = !disabled;
    }

    updateStatus(message) {
        this.statusDisplay.textContent = message;
        console.log('Status:', message);
    }

    getAlgorithmName() {
        const names = {
            'bubble': 'Bubble Sort',
            'insertion': 'Insertion Sort',
            'selection': 'Selection Sort',
            'shell': 'Shell Sort',
            'merge': 'Merge Sort',
            'quick': 'Quick Sort'
        };
        return names[this.algorithmSelect.value] || 'Unknown';
    }

    getSpeedText(speed) {
        const speeds = {
            '1': 'Very Slow',
            '2': 'Slow',
            '3': 'Normal',
            '4': 'Fast',
            '5': 'Very Fast'
        };
        return speeds[speed] || 'Normal';
    }

    getDelayFromSpeed(speed) {
        const delays = {
            '1': 500,   // Very Slow
            '2': 200,   // Slow
            '3': 100,   // Normal
            '4': 50,    // Fast
            '5': 10     // Very Fast
        };
        return delays[speed] || 100;
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SortingApp();
});