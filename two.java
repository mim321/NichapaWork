import java.io.*;
public class two {
  public static void main(String args[]) throws IOException {
    BufferedReader stdin = new BufferedReader(new InputStreamReader(System.in));
    int a[] = new int[5];
    int b[] = new int[5];
    for (int i=0; i<5; i++) {
      a[i] = Integer.parseInt(stdin.readLine());
      b[i] = Integer.parseInt(stdin.readLine());
    }
    try {
      for (int i=0; i<6; i++) {
        System.out.println("result = " + a[i] / b[i]);
      }
    } 
      catch (ArrayIndexOutOfBoundsException e) {
      System.out.println(e);
    }
  }
}