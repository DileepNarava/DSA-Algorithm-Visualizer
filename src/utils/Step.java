package utils;

import java.util.Arrays;

public class Step {

    public int[] array;
    public int index1;
    public int index2;

    public Step(int[] array, int index1, int index2) {
        // VERY IMPORTANT: copy array, don’t reference it
        this.array = Arrays.copyOf(array, array.length);
        this.index1 = index1;
        this.index2 = index2;
    }
}
