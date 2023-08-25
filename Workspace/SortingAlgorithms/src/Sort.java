import java.security.SecureRandom;
import java.util.*;

public class Sort {
	private static SecureRandom secureRandom = new SecureRandom();
	
	//startup and Tests
	public static void main(String args[]) {
		
		//
		int p[] = randomIntArray(10);
		System.out.println("Before Insertion Sort:\n" + getListString(p));
		insertionSort(p);
		System.out.println("After Insertion Sort:\n" + getListString(p));
		
		
		p = randomIntArray(10);
		System.out.println("Before Bubble Sort:\n" + getListString(p));
		bubbleSort(p);
		System.out.println("After Bubble Sort:\n" + getListString(p));
		
		
		p = randomIntArray(10);
		System.out.println("Before Selection Sort:\n" + getListString(p));
		selectionSort(p);
		System.out.println("After Selection Sort:\n" + getListString(p));
		
		
		p = randomIntArray(10);
		System.out.println("Before Shell Sort:\n" + getListString(p));
		shellSort(p);
		System.out.println("After Shell Sort:\n" + getListString(p));
		
		
		
		p = randomIntArray(10);
		System.out.println("Before Merge Sort:\n" + getListString(p));
		mergeSort(p);
		System.out.println("After Merge Sort:\n" + getListString(p));
		
		
		p = randomIntArray(10);
		System.out.println("Before Quick Sort:\n" + getListString(p));
		quickSort(p, 0, p.length -1);
		System.out.println("After Quick Sort:\n" + getListString(p));
		
	}
	
	//Generate int array
	public static int[] randomIntArray(int size) {
		int[] b = new int[size]; 
		for(int i = 0; i < b.length; i++) {
			b[i] = secureRandom.nextInt(100);
		}
		return b;
	}
	
	//converts list to a string
	public static String getListString(int[] e) {
		String intList = new String();
		
		intList = Integer.toString(e[0]);
		for(int i = 1; i < e.length; i++) {
			intList = intList + " " + Integer.toString(e[i]);
		}
		
		return intList + "\n";
	}
	
	
	//Sorting Algorithms
	
	
	public static void insertionSort(int[] e) {
		int a = e.length;
		for (int i = 1; i < a; i++) {
			int value = e[i];
			int j = i - 1;
			while( (j > -1) && (e[j] > value)) {
				e[j + 1] = e[j];
				j--;
			}
		e[j + 1] = value;
		}
	}
	
	public static void bubbleSort(int[] e) {
		int l = e.length;
		for (int i = 0; i < l - 1; i++) {
			for (int j = 0; j < l - i - 1; j++) {
				if (e[j] > e[j+1]) {
					int h = e[j];
					e[j] = e[j+1];
					e[j+1] = h;
				}
			}
		}
	}
	
	public static void selectionSort(int[] e) {
		int l = e.length;
		for (int i = 0; i < l-1; i++){
			int min = i;
			for (int j = i+1; j < l; j++) {
				if (e[j] < e[min]) {
					min = j;
				}
			}
			int h = e[min];
			e[min] = e[i];
			e[i] = h;
		}
	}
	
	public static void shellSort(int[] e) {
		int l = e.length;
        for (int gap = l/2; gap > 0; gap /= 2){
            for (int i = gap; i < l; i += 1){
                int temp = e[i];
                int j;
                for (j = i; j >= gap && e[j - gap] > temp; j -= gap)
                    e[j] = e[j - gap];
                e[j] = temp;
            }
        }
	}
	
	//MergeSort Start
	private static void sort(int[] e, int l, int r) {
		if (l < r) {
            int m = l + (r - l) / 2;
            sort(e, l, m);
            sort(e, m + 1, r);
            merge(e, l, m, r);
        }
	}
	private static void merge(int e[], int l, int m, int r){
        int n1 = m - l + 1;
        int n2 = r - m;
        int L[] = new int[n1];
        int R[] = new int[n2];
        for (int i = 0; i < n1; ++i) {
            L[i] = e[l + i];
        }
        for (int j = 0; j < n2; ++j) {
            R[j] = e[m + 1 + j];
        }
        int i = 0, j = 0;
        int k = l;
        while(i < n1 && j < n2){
            if (L[i] <= R[j]){
                e[k] = L[i];
                i++;
            }
            else{
                e[k] = R[j];
                j++;
            }
            k++;
        }
        while(i < n1){
            e[k] = L[i];
            i++;
            k++;
        }
        while (j < n2) {
            e[k] = R[j];
            j++;
            k++;
        }
    }
	
	public static void mergeSort(int[] e) {
		sort(e, 0, e.length -1);
	}
	//Mergesort End
	
	//Quicksort start
	private static void swap(int[] e, int i, int j)
	{
	    int temp = e[i];
	    e[i] = e[j];
	    e[j] = temp;
	}
	
	private static int partition(int[] e, int low, int high)
	{
	    int pivot = e[high];
	    int i = (low - 1);
	    for(int j = low; j <= high - 1; j++){
	        if (e[j] < pivot){
	            i++;
	            swap(e, i, j);
	        }
	    }
	    swap(e, i + 1, high);
	    return (i + 1);
	}
	
	public static void quickSort(int[] e, int low, int high){
	    if (low < high){
	        int parti = partition(e, low, high);
	        quickSort(e, low, parti - 1);
	        quickSort(e, parti + 1, high);
	    }
	}
	
	//QuickSort End
}
