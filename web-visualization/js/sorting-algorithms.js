/**
 * Sorting Algorithms JavaScript Implementation
 * Converted from Java implementation in Sort.java
 * Includes visualization callbacks for step-by-step animation
 */

class SortingAlgorithms {
    constructor(visualizer = null) {
        this.visualizer = visualizer;
        this.delay = 100; // milliseconds between steps
    }

    // Helper method to wait for animation
    async sleep(ms = this.delay) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Helper method to trigger visualization update
    async updateVisualization(array, comparing = [], swapping = []) {
        if (this.visualizer) {
            this.visualizer.update(array, comparing, swapping);
            await this.sleep();
        }
    }

    // Generate random integer array
    randomIntArray(size) {
        const array = [];
        for (let i = 0; i < size; i++) {
            array[i] = Math.floor(Math.random() * 100) + 1;
        }
        return array;
    }

    // INSERTION SORT
    async insertionSort(array) {
        const n = array.length;
        
        for (let i = 1; i < n; i++) {
            const value = array[i];
            let j = i - 1;
            
            await this.updateVisualization(array, [i], []);
            
            while (j > -1 && array[j] > value) {
                await this.updateVisualization(array, [j, j + 1], []);
                array[j + 1] = array[j];
                await this.updateVisualization(array, [], [j, j + 1]);
                j--;
            }
            array[j + 1] = value;
            await this.updateVisualization(array, [], [j + 1]);
        }
        
        await this.updateVisualization(array, [], []);
        return array;
    }

    // BUBBLE SORT
    async bubbleSort(array) {
        const n = array.length;
        
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                await this.updateVisualization(array, [j, j + 1], []);
                
                if (array[j] > array[j + 1]) {
                    // Swap
                    const temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    
                    await this.updateVisualization(array, [], [j, j + 1]);
                }
            }
        }
        
        await this.updateVisualization(array, [], []);
        return array;
    }

    // SELECTION SORT
    async selectionSort(array) {
        const n = array.length;
        
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            await this.updateVisualization(array, [i], []);
            
            for (let j = i + 1; j < n; j++) {
                await this.updateVisualization(array, [minIndex, j], []);
                
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Swap
            const temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
            
            await this.updateVisualization(array, [], [i, minIndex]);
        }
        
        await this.updateVisualization(array, [], []);
        return array;
    }

    // SHELL SORT
    async shellSort(array) {
        const n = array.length;
        
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                const temp = array[i];
                let j = i;
                
                await this.updateVisualization(array, [i], []);
                
                while (j >= gap && array[j - gap] > temp) {
                    await this.updateVisualization(array, [j, j - gap], []);
                    array[j] = array[j - gap];
                    await this.updateVisualization(array, [], [j, j - gap]);
                    j -= gap;
                }
                
                array[j] = temp;
                await this.updateVisualization(array, [], [j]);
            }
        }
        
        await this.updateVisualization(array, [], []);
        return array;
    }

    // MERGE SORT
    async mergeSort(array) {
        await this.mergeSortHelper(array, 0, array.length - 1);
        await this.updateVisualization(array, [], []);
        return array;
    }

    async mergeSortHelper(array, left, right) {
        if (left < right) {
            const middle = left + Math.floor((right - left) / 2);
            
            await this.mergeSortHelper(array, left, middle);
            await this.mergeSortHelper(array, middle + 1, right);
            await this.merge(array, left, middle, right);
        }
    }

    async merge(array, left, middle, right) {
        const n1 = middle - left + 1;
        const n2 = right - middle;
        
        const leftArray = new Array(n1);
        const rightArray = new Array(n2);
        
        for (let i = 0; i < n1; i++) {
            leftArray[i] = array[left + i];
        }
        for (let j = 0; j < n2; j++) {
            rightArray[j] = array[middle + 1 + j];
        }
        
        let i = 0, j = 0, k = left;
        
        while (i < n1 && j < n2) {
            await this.updateVisualization(array, [k], []);
            
            if (leftArray[i] <= rightArray[j]) {
                array[k] = leftArray[i];
                i++;
            } else {
                array[k] = rightArray[j];
                j++;
            }
            
            await this.updateVisualization(array, [], [k]);
            k++;
        }
        
        while (i < n1) {
            array[k] = leftArray[i];
            await this.updateVisualization(array, [], [k]);
            i++;
            k++;
        }
        
        while (j < n2) {
            array[k] = rightArray[j];
            await this.updateVisualization(array, [], [k]);
            j++;
            k++;
        }
    }

    // QUICK SORT
    async quickSort(array, low = 0, high = array.length - 1) {
        if (low < high) {
            const partitionIndex = await this.partition(array, low, high);
            
            await this.quickSort(array, low, partitionIndex - 1);
            await this.quickSort(array, partitionIndex + 1, high);
        }
        
        if (low === 0 && high === array.length - 1) {
            await this.updateVisualization(array, [], []);
        }
        
        return array;
    }

    async partition(array, low, high) {
        const pivot = array[high];
        let i = low - 1;
        
        await this.updateVisualization(array, [high], []);
        
        for (let j = low; j <= high - 1; j++) {
            await this.updateVisualization(array, [j, high], []);
            
            if (array[j] < pivot) {
                i++;
                await this.swap(array, i, j);
            }
        }
        
        await this.swap(array, i + 1, high);
        return i + 1;
    }

    async swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        
        await this.updateVisualization(array, [], [i, j]);
    }
}