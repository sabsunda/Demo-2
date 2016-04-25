package com.cisco.dao;

import java.util.List;

import javax.ws.rs.PathParam;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import com.cisco.model.Question;
import com.cisco.model.User;
import com.cisco.service.HibernateUtil;

public class QuestionDao {
	
	public Question getQuestion(Integer id) {
		Session ses = HibernateUtil.currentSession();
		try {
			Criteria crit =  ses.createCriteria(Question.class);
			crit.add(Restrictions.idEq(id));
			Question q = (Question)crit.uniqueResult();
			return q;
		} finally {
			HibernateUtil.closeSession();
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<Question> getQuestions() {
		Session ses = HibernateUtil.currentSession();
		try {
			return ses.createCriteria(Question.class).list();
		} finally {
			HibernateUtil.closeSession();
		}
	}
	
	public void createQuestion(Question q){
		System.out.println("Creating question: "+q.getTitle());
		Session ses = HibernateUtil.currentSession();
		try {
			Transaction tx = ses.beginTransaction();
			ses.save(q);
			tx.commit();
		}finally{
			HibernateUtil.closeSession();
		}
	}
	
	public void updateQuestion(Question q){
		System.out.println("Updating user: "+q.getTitle());
		Session ses = HibernateUtil.currentSession();
		try {
			Transaction tx = ses.beginTransaction();
			ses.update(q);
			tx.commit();
		}finally{
			HibernateUtil.closeSession();
		}
	}
	
	public boolean deleteQuestion(@PathParam("param") Integer id) {
		System.out.println("Deleting user: "+ id);
		Session ses = HibernateUtil.currentSession();
		try {
			Transaction tx = ses.beginTransaction();
			User u = (User) ses.load(Question.class, id);
			ses.delete(u);
			tx.commit();
			return true;
		} finally {
			HibernateUtil.closeSession();
		}
	}
}
