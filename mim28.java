public class mim28 {
  public static void main(String[] args) {
    int mim,m;
    for (mim=1; mim <= 5; mim++) {
	for (m=5; m >= mim; m--)
                {
                    System.out.print(m);
                }
	for (m=1; m <= mim; m++)
                {
                    System.out.print("*");
                }
	for (m=2; m <= mim; m++)
                {
                    System.out.print("*");
                }
	for (m=mim; m <= 5; m++)
                {
                    System.out.print(m);
                } 
	System.out.println();
    }
  }
}
