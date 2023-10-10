package com.ybb.Controller.Student;

import com.ybb.Service.Student.Student;
import com.ybb.Service.Student.StudentService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class Login {
    @RequestMapping("StudentLogin.ano")
    @ResponseBody
    public void sss(@RequestParam String UserName,@RequestParam String pwd,@RequestParam Integer id,HttpServletResponse response) throws  IOException {
        response.setContentType("text/plain;charset=UTF-8");
        response.addHeader( "Access-Control-Allow-Origin", "*" );
        System.out.println("===============================================================");
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        response.setContentType("text/plain;charset=UTF-8");
        Student student =  studentService.GetQueryStudentName(UserName, id);
        if(student.getPwd().equals(pwd))
        {
            response.getWriter().write("1");
        }
        else
        {
           response.getWriter().write ("0");
        }
    }
}
