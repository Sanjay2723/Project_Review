package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Railway;
import com.example.demo.services.Rail_services;

@RestController
@CrossOrigin
public class Rail_controller {
	@Autowired
	private Rail_services serv;
	

	@PostMapping("/add")
	public Railway postdet(@RequestBody Railway h)
	{
		return serv.getdet(h);
	}
	
	@GetMapping("/show")

	public List<Railway> showproduct() 
	{
		 return serv.showproduct();
	}
	
	@DeleteMapping("/delete/{aadhar_id}")
	public void deletedet(@PathVariable int aadhar_id)
	{
		serv.delete(aadhar_id);
	}
	
	@PutMapping("/put/{aadhar_id}")
	public Railway updatedet(@PathVariable int aadhar_id,@RequestBody Railway e)
	{
		return serv.updateproduct(aadhar_id,e);
		
	}
}
