package com.jeevaspring.demoproject;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	@GetMapping("/test")
	public String test() {
		return "<h2>hello world</2>";
	}
	@GetMapping("/jeeva")
	public String add() {
		int a=100;
		int b=100;
		return"<h1>Total of "+a+" and "+b+" =<br> "+(a+b)+"</h1>";
	}
	public int myfunction(int a,int b) {
		return a+b;
	}
	@GetMapping("/args")
	public String myAdd() {
		return"<h1>Result:"+myfunction(100,200)+"</h1>";
	}
	
	int sarr(int[] myarr)
	{
		int len=myarr.length;
		int sum=0;
		for(int i=0;i<len;i++)
		{
			sum=sum+myarr[i];
		}
		return sum;
	}
	@GetMapping("/arrsum")
	public String funArrSum() {
		int arr[]= {11,22,33,44,55,99};
		int arrtot=sarr(arr);
		return"Length of array:"+arr.length+"<h2>sum of Array:"+arrtot+"</h2>";
		
	} 




//runtime data from url with parameters

@GetMapping("/app/v1/{id}")
public String showArgs(@PathVariable Long id)
{
	long data=id;
	return "<h1> your URL runtime data:"+data+"</h1>";
}

@GetMapping("/objdata")
public String showObjectdata()
{
	Person p1=new Person("jeeva",23);
	Person p2=new Person("keerthi",22);
	Person p3=new Person("nisanth",21);
	Person p4=new Person("abi",21);
	
	/*
	String data1=p1.getSname()+"---------->"+p1.getAge();
	data1=data1+"<br>"+p2.getSname()+"-------"+p2.getAge();
	data1=data1+"<br>"+p3.getSname()+"-------"+p3.getAge();
	data1=data1+"<br>"+p4.getSname()+"-------"+p4.getAge();
	return "<font color='green' size='6'> person's infromation:<br>"+data1+"</font>";
	*/
	Person p[]= {p1,p2,p3,p4};
	String ans="<table border='4' cellpadding='5' bgcolor='blue' align='center'><tr><th>Sno</th><th>Stundet Name</th><th>Age</th><tr>";
	for(int i=0;i<p.length;i++)
	{
		ans=ans+"<tr><td>"+p[i].getSname()+"</td><td>"+p[i].getAge()+"</td></tr>";
	}
	ans=ans+"</table>";
	return ans;
 }
 


}

