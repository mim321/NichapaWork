public class mim01 {
  public static void main(String args[]) {
    int totalRow = 4;
    for (int mim=1; mim <= totalRow; mim++) {
      // Column have 4 parts 
      for (int kajan=2; kajan <= mim; kajan++) { System.out.print(" "); }
      System.out.print(mim + "" + mim);
      for (int kajan=totalRow; kajan >= (mim + 1); kajan--) { System.out.print("**"); }
      System.out.println( mim + "" + mim);
    }
  }
}