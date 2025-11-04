/**
 * Algorithm Complexity Information
 * Updates the complexity display based on selected algorithm
 */

const ALGORITHM_COMPLEXITIES = {
    'bubble': {
        best: 'O(n)',
        average: 'O(n²)',
        worst: 'O(n²)',
        space: 'O(1)',
        description: 'Simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.'
    },
    'insertion': {
        best: 'O(n)',
        average: 'O(n²)',
        worst: 'O(n²)',
        space: 'O(1)',
        description: 'Builds the final sorted array one item at a time. Efficient for small datasets and nearly sorted arrays.'
    },
    'selection': {
        best: 'O(n²)',
        average: 'O(n²)',
        worst: 'O(n²)',
        space: 'O(1)',
        description: 'Finds the minimum element from unsorted part and puts it at the beginning. Simple but inefficient for large datasets.'
    },
    'shell': {
        best: 'O(n log n)',
        average: 'O(n^1.25)',
        worst: 'O(n²)',
        space: 'O(1)',
        description: 'Improved insertion sort that allows exchange of items that are far apart. Performance depends on gap sequence used.'
    },
    'merge': {
        best: 'O(n log n)',
        average: 'O(n log n)',
        worst: 'O(n log n)',
        space: 'O(n)',
        description: 'Divide-and-conquer algorithm that divides the array into halves, sorts them separately, then merges them back together.'
    },
    'quick': {
        best: 'O(n log n)',
        average: 'O(n log n)',
        worst: 'O(n²)',
        space: 'O(log n)',
        description: 'Efficient divide-and-conquer algorithm that partitions array around a pivot element. Average case is very fast.'
    }
};

class ComplexityUpdater {
    constructor() {
        this.bestCaseElement = document.getElementById('bestCase');
        this.averageCaseElement = document.getElementById('averageCase');
        this.worstCaseElement = document.getElementById('worstCase');
        this.spaceComplexityElement = document.getElementById('spaceComplexity');
        this.algorithmSelect = document.getElementById('algorithmSelect');
        
        this.bindEvents();
        this.updateComplexity(); // Initial update
    }

    bindEvents() {
        this.algorithmSelect.addEventListener('change', () => {
            this.updateComplexity();
        });
    }

    updateComplexity() {
        const selectedAlgorithm = this.algorithmSelect.value;
        const complexity = ALGORITHM_COMPLEXITIES[selectedAlgorithm];
        
        if (complexity) {
            this.bestCaseElement.textContent = complexity.best;
            this.averageCaseElement.textContent = complexity.average;
            this.worstCaseElement.textContent = complexity.worst;
            this.spaceComplexityElement.textContent = complexity.space;
            
            // Add color coding based on complexity
            this.updateComplexityColors();
        }
    }

    updateComplexityColors() {
        // Color code the complexity values
        const elements = [
            this.bestCaseElement,
            this.averageCaseElement,
            this.worstCaseElement,
            this.spaceComplexityElement
        ];

        elements.forEach(element => {
            const complexity = element.textContent;
            element.className = 'value ' + this.getComplexityClass(complexity);
        });
    }

    getComplexityClass(complexity) {
        // Remove spaces and convert to lowercase for comparison
        const normalized = complexity.replace(/\s/g, '').toLowerCase();
        
        if (normalized.includes('o(1)') || normalized.includes('o(logn)')) {
            return 'excellent'; // Green
        } else if (normalized.includes('o(n)') || normalized.includes('o(nlogn)')) {
            return 'good'; // Blue
        } else if (normalized.includes('o(n²)') || normalized.includes('o(n^')) {
            return 'fair'; // Orange
        } else {
            return 'poor'; // Red
        }
    }
}

// Initialize complexity updater when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ComplexityUpdater();
});

// Add CSS classes for complexity colors
const style = document.createElement('style');
style.textContent = `
    .value.excellent { color: #27ae60 !important; }
    .value.good { color: #3498db !important; }
    .value.fair { color: #f39c12 !important; }
    .value.poor { color: #e74c3c !important; }
`;
document.head.appendChild(style);