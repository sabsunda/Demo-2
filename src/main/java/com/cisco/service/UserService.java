package com.cisco.service;
import com.cisco.model.User;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/user")
public class UserService {

	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public List<User>getUsers(){
		User u = new User();
		u.setName("Nandish");
		List<User> users  = new ArrayList<User>();
		users.add(u);
		return users;
	}
	
}
