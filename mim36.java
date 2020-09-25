public class mim36 {
  public static void main(String[] args) {
    int mim,m;
    for (mim=1; mim <= 3; mim++) {
	for (m=mim; m <= 3; m++)
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
	for (m=3; m >= mim; m--)
                {
                   System.out.print(m);
                }
                
	System.out.println();
            }
    for (mim=2; mim <= 3; mim++) {
	for (m=1; m <= mim; m++)
                {
                   System.out.print(4-(4-m));
                }
	for (m=mim; m <= 3; m++)
                {
                   System.out.print("*");
                }
	for (m=mim; m <= 2; m++)
                {
                   System.out.print("*");
                }
	for (m=1; m <= mim; m++)
                {
                   System.out.print(4-m);
                }
	System.out.println();
    } 
  }
}
