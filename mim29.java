public class mim29 {
  public static void main(String[] args) {
    int mim,m;
    for (mim=1; mim <= 5; mim++) {
	System.out.print(mim);
	System.out.print("*");
	System.out.print(mim+2);
	for (m=1; m <= mim+2; m++)
                {
                    System.out.print("*");
                }  
	System.out.println();
    }
  }
}
