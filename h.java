public class h{
    public static void main(String[] args) {
        int arr[] = {1,2,3,2};
        int idx = arr.length-1;
        int target = 2;
        System.out.println(findLast(arr, idx, target));
    }

    private static int findLast(int []a, int idx, int target){
        if(a[idx]==target){return idx;}
        else if(idx == 0){return -1;}
        return findLast(a, idx--, target);
    }
}
