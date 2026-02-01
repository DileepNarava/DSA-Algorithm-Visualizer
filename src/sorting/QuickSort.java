package sorting;

import utils.Step;
import java.util.ArrayList;
import java.util.List;

public class QuickSort {

    private static List<Step> steps;

    public static List<Step> sort(int[] arr) {
        steps = new ArrayList<>();
        quickSort(arr, 0, arr.length - 1);
        return steps;
    }

    private static void quickSort(int[] arr, int low, int high) {
        if (low >= high) return;

        int pivotIndex = partition(arr, low, high);

        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }

    private static int partition(int[] arr, int low, int high) {

        int pivot = arr[high];
        int i = low;

        for (int j = low; j < high; j++) {

            if (arr[j] < pivot) {

                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                steps.add(new Step(arr, i, j));
                i++;
            }
        }

        int temp = arr[i];
        arr[i] = arr[high];
        arr[high] = temp;

        steps.add(new Step(arr, i, high));
        return i;
    }
}
