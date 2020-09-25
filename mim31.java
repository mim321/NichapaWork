public class mim31 {
  public static void main(String[] args) {
  int mim,m;
  for (mim=1; mim <= 5; mim++) {
	for (m=5; m >= mim; m--)
                {
                    System.out.print(mim);
                }
	for (m=2; m <= mim; m++)
                {
                    System.out.print(" ");
                }
	for (m=2; m <= mim; m++)
                {
                    System.out.print(" ");
                }
	for (m=5; m >= mim; m--)
                {
                    System.out.print("*");
                }   
	System.out.println();
    }
  }
}
