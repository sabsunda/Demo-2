package com.cisco.model;


public class User {

	private Integer id;	
	private String name="";
	private String emailId="";
	private String password="";
	private String info="";
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	
	public String toString() {
		String content = "UserId = " + "\nName = "+getName()+"\nEmail = "+getEmailId()+ "\nPassword = " + getPassword() + "\nInfo = "+getInfo();
		return content;
	}

}