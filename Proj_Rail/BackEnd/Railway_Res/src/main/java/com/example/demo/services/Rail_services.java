package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Railway;
import com.example.demo.Repository.Rail_Repo;

@Service
public class Rail_services {
	@Autowired
	private Rail_Repo repo;
	
	public Railway getdet(Railway obj)
	{
		return repo.save(obj);
	}
	
	public List<Railway> showproduct() 
	{
		List<Railway> a= new ArrayList<>();
		a=repo.findAll();
		return a;
	}
	
	public void delete(long id)
	{
		repo.deleteById(id);
	}
	
	public Railway updateproduct(int id,Railway e)
	{
		 return repo.saveAndFlush(e);
	}


}