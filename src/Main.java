import sorting.BubbleSort;
import sorting.MergeSort;
import sorting.QuickSort;
import utils.Step;

import java.util.List;

public class Main {

    public static void main(String[] args) {

        int[] array = {40, 20, 60, 10, 90};

        List<Step> steps = BubbleSort.sort(array);
        // List<Step> steps = MergeSort.sort(array);
        // List<Step> steps = QuickSort.sort(array);

        System.out.println(toJson(steps));
    }

    private static String toJson(List<Step> steps) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        for (int i = 0; i < steps.size(); i++) {
            Step s = steps.get(i);
            sb.append("{");
            sb.append("\"array\":").append(arrayToJson(s.array)).append(",");
            sb.append("\"i\":").append(s.index1).append(",");
            sb.append("\"j\":").append(s.index2);
            sb.append("}");
            if (i != steps.size() - 1) sb.append(",");
        }

        sb.append("]");
        return sb.toString();
    }

    private static String arrayToJson(int[] arr) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");

        for (int i = 0; i < arr.length; i++) {
            sb.append(arr[i]);
            if (i != arr.length - 1) sb.append(",");
        }

        sb.append("]");
        return sb.toString();
    }
}
