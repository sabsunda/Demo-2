package com.cisco.model;
import java.sql.Timestamp;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class Question {

	private Integer id;	
	private String title;
	private Timestamp  createdOn;
	private String tags="";
	private Integer views;
	
	@ManyToOne
    @JoinColumn(name = "u_id")
	private User user;
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Timestamp getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(Timestamp createdOn) {
		this.createdOn = createdOn;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public Integer getViews() {
		return views;
	}

	public void setViews(Integer views) {
		this.views = views;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String toString() {
		String content = "QuestionId = " + "\nTitle = "+getTitle()+"\nCreated on = "+getCreatedOn()+ "\nTags = " + getTags() + "\nViews = "+getViews() + "\nUser name = " + getUser().getName();
		return content;
	}

}