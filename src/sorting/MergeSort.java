package sorting;

import utils.Step;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MergeSort {

    private static List<Step> steps;

    public static List<Step> sort(int[] arr) {
        steps = new ArrayList<>();
        mergeSort(arr, 0, arr.length - 1);
        return steps;
    }

    private static void mergeSort(int[] arr, int left, int right) {
        if (left >= right) return;

        int mid = (left + right) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
    }

    private static void merge(int[] arr, int left, int mid, int right) {

        int[] temp = Arrays.copyOf(arr, arr.length);

        int i = left;
        int j = mid + 1;
        int k = left;

        while (i <= mid && j <= right) {
            if (temp[i] <= temp[j]) {
                arr[k++] = temp[i++];
            } else {
                arr[k++] = temp[j++];
            }
            steps.add(new Step(arr, i, j));
        }

        while (i <= mid) {
            arr[k++] = temp[i++];
            steps.add(new Step(arr, i - 1, i - 1));
        }

        while (j <= right) {
            arr[k++] = temp[j++];
            steps.add(new Step(arr, j - 1, j - 1));
        }
    }
}
