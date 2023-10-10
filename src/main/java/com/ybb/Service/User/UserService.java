package com.ybb.Service.User;

import com.ybb.Mapper.User.UserLoginMapper;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    public User GetQueryUserName(String UserName,int id) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        User user = userLoginMapper.GetQueryUserName(UserName, id);
        return user;
    }
    public int UpdateForUser(User user) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        int i = userLoginMapper.UpdateForUser(user);
        return i;
    }
        public int AddUserForUser(User user) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        int i = userLoginMapper.AddUserForUser(user);
        return i;
    }
    public int DeleteForUser(User user) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        int i = userLoginMapper.DeleteForUser(user);
        return i;
    }
    public List<User> GetQueryAllUser() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        List<User> users = userLoginMapper.GetQueryAllUser();
        return users;
    }
}
