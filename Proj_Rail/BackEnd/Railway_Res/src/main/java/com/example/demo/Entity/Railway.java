package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Railway {
	@Id
	private long aadhar_id;
	private String name;
	private int age;
	private int no_ticket;
	private String type_ticket;
	public long getAadhar_id() {
		return aadhar_id;
	}
	public void setAadhar_id(long aadhar_id) {
		this.aadhar_id = aadhar_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public int getNo_ticket() {
		return no_ticket;
	}
	public void setNo_ticket(int no_ticket) {
		this.no_ticket = no_ticket;
	}
	public String getType_ticket() {
		return type_ticket;
	}
	public void setType_ticket(String type_ticket) {
		this.type_ticket = type_ticket;
	}
	public Railway(long aadhar_id, String name, int age, int no_ticket, String type_ticket) {
		super();
		this.aadhar_id = aadhar_id;
		this.name = name;
		this.age = age;
		this.no_ticket = no_ticket;
		this.type_ticket = type_ticket;
	}
	
	public Railway(){
		
	}

	
}
