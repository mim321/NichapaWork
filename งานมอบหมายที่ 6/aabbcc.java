import java.io.*;
class a{
  static String data[][] = new String[3][3];
    public static void aaa() throws IOException{
    BufferedReader numid = new BufferedReader (new InputStreamReader(System.in));
    for(int i = 0; i < 3; i++){ 
	    
      for(int m = 0; m < 3; m++){
        if(i == 0){
          System.out.print("enter ID : ");
          data[i][m] = numid.readLine(); 
	  }
	      
	  else if(i == 1){
	  System.out.print("enter Name : ");
	  data[i][m] = numid.readLine(); 
	  }
	      
	  else if(i == 2){
          System.out.print("enter Salary : ");
          data[i][m] = numid.readLine(); 
          } 
	      
          else{
          System.out.print("Error");
	  }            
	}
      } 
    }        
}
class b extends a{
  public static void bbb() {
    try {
    aaa();
    int sum = 0 ;
    for(int i = 0; i < 3; i++){
    }
      System.out.println("-----------------------------------");

      for(int i = 0; i < 3; i++){
        for(int m = 0; m < 3; m++){		
                if(i == 0){
                    System.out.print(" ID = " + data[i][m]);
                }
                else if(i == 1){
                    System.out.print(" Name = " + data[i][m]);
                }
                else if(i == 2){
                    System.out.print(" Salary = " + data[i][m]);
                }
                else{
                    System.out.print("Error");
                }
                if(i == 2){
                    sum +=Integer.parseInt(data[2][m]);
                }           
            }
            System.out.println(",");
        }
        System.out.println("-----------------------------------");
	    
        System.out.println("Total = " + (sum)+ " $");
        System.out.println("Social Security = " + (500)+ " $");
        System.out.println("Tax 7% = " + (sum * 0.07)+ " $");
        System.out.println("Net Salary = " + ((sum*0.93)-500) + " $");
	    
        System.out.println("-----------------------------------");
        } catch (Exception e) {           
      }     
   }
}
class c extends b {
    public static void main(String args[]) {
      bbb();
      }
}