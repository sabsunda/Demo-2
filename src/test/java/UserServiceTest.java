import static org.mockito.Mockito.*;


import org.junit.Test;
import org.mockito.Mock;

import com.cisco.dao.UserDao;
import com.cisco.model.User;
import com.cisco.service.UserService;

import junit.framework.Assert;

public class UserServiceTest {

	@Test(expected=IllegalArgumentException.class)
	public void testGetUser() {
		//Test valid id
		UserDao mockUserDao = mock(UserDao.class);
		User u = new User();
		u.setName("Manish");
		when(mockUserDao.getUser(anyInt())).thenReturn(u);
		
		UserService service = new UserService();
		service.setUserDao(mockUserDao);
		u = service.getUser(1);
		Assert.assertEquals("Manish", u.getName());	
		
	}

}
