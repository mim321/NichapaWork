public class mim26 {
  public static void main(String[] args) {
    int mim,m;
    for (mim=1; mim <= 5; mim++) {
	for (m=mim; m <= 5; m++)
                {
		    System.out.print(mim);
                }
	for (m=1; m <= mim; m++)
                {
		    System.out.print("*");
                }
	System.out.println();
    }
  }
}
