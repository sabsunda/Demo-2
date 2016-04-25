package com.cisco.dao;

import java.util.List;

import javax.ws.rs.PathParam;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import com.cisco.model.User;
import com.cisco.service.HibernateUtil;

public class UserDao {
	
	public User getUser(String uname) {
		Session ses = HibernateUtil.currentSession();
		try {
			Criteria crit =  ses.createCriteria(User.class);
			crit.add(Restrictions.idEq(uname));
			User u = (User)crit.uniqueResult();
			return u;
		} finally {
			HibernateUtil.closeSession();
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<User> getUsers() {
		Session ses = HibernateUtil.currentSession();
		try {
			return ses.createCriteria(User.class).list();
		} finally {
			HibernateUtil.closeSession();
		}
	}
	
	public void createUser(User u){
		System.out.println("Creating user: "+u.getName());
		Session ses = HibernateUtil.currentSession();
		try {
			Transaction tx = ses.beginTransaction();
			ses.save(u);
			tx.commit();
		}finally{
			HibernateUtil.closeSession();
		}
	}
	
	public void updateUser(User u){
		System.out.println("Updating user: "+u.getName());
		Session ses = HibernateUtil.currentSession();
		try {
			Transaction tx = ses.beginTransaction();
			ses.update(u);
			tx.commit();
		}finally{
			HibernateUtil.closeSession();
		}
	}
	
	public boolean deleteUser(@PathParam("param") String uname) {
		System.out.println("Deleting user: "+uname);
		Session ses = HibernateUtil.currentSession();
		try {
			Transaction tx = ses.beginTransaction();
			User u = (User) ses.load(User.class, uname);
			ses.delete(u);
			tx.commit();
			return true;
		} finally {
			HibernateUtil.closeSession();
		}
	}
}
