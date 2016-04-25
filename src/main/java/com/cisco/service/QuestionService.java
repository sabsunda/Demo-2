package com.cisco.service;

import java.util.List;

import com.cisco.dao.QuestionDao;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.cisco.model.Question;

@Path("/question")
public class QuestionService {
	
	public QuestionDao questionDao = new QuestionDao(); 
	
	public void setQuestionDao(QuestionDao questionDao){
		this.questionDao = questionDao;
	}
	@GET
	@Path("/{param}")
	@Produces({MediaType.APPLICATION_JSON})
	public Question getQuestion(@PathParam("param") Integer id) {
		System.out.println("Getting question: ");
		return questionDao.getQuestion(id);
	}
	
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public List<Question> getQuestions() {
		System.out.println("Getting questions: ");
		return questionDao.getQuestions();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)	
	public void createUser(Question q){
		System.out.println("Creating question: "+q.toString());
		questionDao.createQuestion(q);
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public void updateUser(Question q){
		System.out.println("Updating question: "+q.getTitle());
		questionDao.updateQuestion(q);
	}
	
	@DELETE
	@Path("/{param}")
	@Produces({MediaType.APPLICATION_JSON})
	public boolean deleteUser(@PathParam("param") Integer id) {
		System.out.println("Deleting question: "+id );
		return questionDao.deleteQuestion(id);
	}
	
}

