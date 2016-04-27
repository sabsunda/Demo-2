package com.cisco.model;
import java.sql.Timestamp;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class Question {
	private Integer id;	
	private String title;
	private Timestamp  createdOn;
	private String tags="";
	private Integer views;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "u_id")	
	private Integer userId;
	
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

	
	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String toString() {
		String content = "QuestionId = " + "\nTitle = "+getTitle()+"\nCreated on = "+getCreatedOn()+ "\nTags = " + getTags() + "\nViews = "+getViews() + "\nUser Id = " + getUserId();
		return content;
	}

}