package com.ybb.Controller.User;

import com.ybb.Service.User.User;
import com.ybb.Service.User.UserService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class newUser {
    @RequestMapping("newUser.ano")
    @ResponseBody
    public void newUser1(@RequestParam Integer id,  @RequestParam String UserName, @RequestParam String pwd, @RequestParam String tel,@RequestParam String address, HttpServletResponse response) throws IOException
    {
        User user = new User(id, "管理员", UserName, pwd, tel, address);
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService =  ApplicationContext.getBean("userService", UserService.class);
        int i = userService.AddUserForUser(user);
        if (i==1)
        {
            response.getWriter().write("T");
        }
        if (i==0)
        {
            response.getWriter().write("F");
        }
    }
    @RequestMapping("UserLogin.ano")
    @ResponseBody
    public void UserLogin(@RequestParam String UserName,@RequestParam String pwd,@RequestParam Integer id,HttpServletResponse response) throws  IOException {
        response.setContentType("text/plain;charset=UTF-8");
        response.addHeader( "Access-Control-Allow-Origin", "*" );
        System.out.println("===============================================================");
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService =  ApplicationContext.getBean("userService", UserService.class);
        response.setContentType("text/plain;charset=UTF-8");
        User student =  userService.GetQueryUserName(UserName, id);
        if(student.getPwd().equals(pwd))
        {
            response.getWriter().write("1");
        }
        else
        {
            response.getWriter().write ("0");
        }
    }
    @RequestMapping("updateUserPwd.ano")
    @ResponseBody
    public void updateUserPwd(@RequestParam String UserName,@RequestParam String pwd,@RequestParam Integer id,HttpServletResponse response) throws  IOException {
        response.setContentType("text/plain;charset=UTF-8");
        response.addHeader("Access-Control-Allow-Origin", "*");
        System.out.println("===============================================================");
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = ApplicationContext.getBean("userService", UserService.class);
        response.setContentType("text/plain;charset=UTF-8");
        User user = new User(id, "校外人员", UserName, pwd, null, null);
        int i = userService.UpdateForUser(user);
        response.getWriter().write(i);
    }
    @RequestMapping("updateUserTel.ano")
    @ResponseBody
    public void updateUserTel(@RequestParam String UserName,@RequestParam String pwd,@RequestParam Integer id,HttpServletResponse response) throws  IOException {
        response.setContentType("text/plain;charset=UTF-8");
        response.addHeader("Access-Control-Allow-Origin", "*");
        System.out.println("===============================================================");
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = ApplicationContext.getBean("userService", UserService.class);
        response.setContentType("text/plain;charset=UTF-8");
        User user = new User(id, "校外人员", UserName, null, pwd, null);
        int i = userService.UpdateForUser(user);
        response.getWriter().write(i);
    }
    @RequestMapping("updateUserAddress.ano")
    @ResponseBody
    public void updateUserAddress(@RequestParam String UserName,@RequestParam String pwd,@RequestParam Integer id,HttpServletResponse response) throws  IOException {
        response.setContentType("text/plain;charset=UTF-8");
        response.addHeader("Access-Control-Allow-Origin", "*");
        System.out.println("===============================================================");
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = ApplicationContext.getBean("userService", UserService.class);
        response.setContentType("text/plain;charset=UTF-8");
        User user = new User(id, "校外人员", UserName, null, null, pwd);
        int i = userService.UpdateForUser(user);
        response.getWriter().write(i);
    }
    @RequestMapping("DeleteForUser.ano")
    @ResponseBody
    public void DeleteForUser(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String pwd, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserService userService = ApplicationContext.getBean("userService", UserService.class);
        User user=new User(id,"校外人员",UserName,pwd,null,null);
        int i = userService.DeleteForUser(user);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }
    }

