package sorting;

import utils.Step;
import java.util.ArrayList;
import java.util.List;

public class BubbleSort {

    public static List<Step> sort(int[] arr) {

        List<Step> steps = new ArrayList<>();

        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {

            for (int j = 0; j < n - i - 1; j++) {

                // record comparison
                steps.add(new Step(arr, j, j + 1));

                if (arr[j] > arr[j + 1]) {

                    // swap
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;

                    // record swap
                    steps.add(new Step(arr, j, j + 1));
                }
            }
        }

        return steps;
    }
}
