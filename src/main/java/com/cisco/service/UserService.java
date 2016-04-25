package com.cisco.service;

import java.util.List;
import com.cisco.dao.UserDao;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.cisco.model.User;

@Path("/user")
public class UserService {
	
	public UserDao userDao = new UserDao(); 
	
	public void setUserDao(UserDao userDao){
		this.userDao = userDao;
	}
	@GET
	@Path("/{param}")
	@Produces({MediaType.APPLICATION_JSON})
	public User getUser(@PathParam("param") String uname) {
		System.out.println("Getting user: ");
		return userDao.getUser(uname);
	}
	
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public List<User> getUsers() {
		System.out.println("Getting users: ");
		return userDao.getUsers();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)	
	public void createUser(User u){
		System.out.println("Creating user: "+u.toString());
		userDao.createUser(u);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateUser(User u){
		System.out.println("Updating user: "+u.getName());
		userDao.updateUser(u);
	}
	
	@DELETE
	@Path("/{param}")
	@Produces({MediaType.APPLICATION_JSON})
	public boolean deleteUser(@PathParam("param") String uname) {
		System.out.println("Deleting user: "+uname);
		return userDao.deleteUser(uname);
	}
	
}

