import java.io.*;
class four {
  public static void main(String args[]) throws IOException {
    BufferedReader stdin = new BufferedReader(new InputStreamReader(System.in));
    int i[] = new int[5];
    int max = 0;
    int min = 999;
    int tot = 0;
    double average;
    for (int j=0; j<5; j++) {
      i[j] = Integer.parseInt(stdin.readLine());
    }
    for (int j=0; j<5; j++) {
      if (i[j] > max) {
        max = i[j];
      }
      if (i[j] < min) {
        min = i[j];
      }
      tot += i[j];
    }
    average = tot / i.length;
    System.out.println("max = " + max);
    System.out.println("min = " + min);
    System.out.println("total = " + tot);
    System.out.println("average = " + average);
  }
}