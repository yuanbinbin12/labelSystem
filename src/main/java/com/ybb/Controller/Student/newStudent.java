package com.ybb.Controller.Student;

import com.google.gson.Gson;
import com.ybb.Service.Class.ClassName2;
import com.ybb.Service.Student.Student;
import com.ybb.Service.Student.StudentService;
import com.ybb.Service.Student.student1;
import com.ybb.Service.timeTable.timeTableForStudent;
import com.ybb.Service.timeTable.timeTableService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class newStudent {
    @RequestMapping("newStudent.ano")
    @ResponseBody
    public void newStudent1(@RequestParam Integer id, @RequestParam Integer tid, @RequestParam Integer cid, @RequestParam String UserName, @RequestParam String pwd, @RequestParam String tel, @RequestParam String dorm_Num, HttpServletResponse response) throws IOException
    {
        response.setContentType("text/plain;charset=UTF-8");
        Student student = new Student(id, "学生",UserName,pwd,tel,dorm_Num,tid,cid);
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        int i = studentService.AddUserForStudent(student);
        if (i==1)
        {
            response.getWriter().write("T");
        }
        if (i==0)
        {
            response.getWriter().write("F");
        }
    }
    @RequestMapping("getAllStudent.ano")
    @ResponseBody
    public void  getStudentAll( HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        List<Student> students = studentService.GetQueryAllStudent();
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson=new Gson();
        String toJson = gson.toJson(students);
        response.getWriter().write(toJson.toString());
    }
    @RequestMapping("getStudentById.ano")
    @ResponseBody
    public void  getStudentById( @RequestParam Integer id,HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        List<student1> students = studentService.getAllTeacherInStudentById(id);
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson=new Gson();
        String toJson = gson.toJson(students);
        response.getWriter().write(toJson.toString());
    }
    @RequestMapping("getClassInStudentAll.ano")
    @ResponseBody
    public void getClassInStudentAll(HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        List<ClassName2> classInStudentAll = studentService.getClassInStudentAll();
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson=new Gson();
        String toJson = gson.toJson(classInStudentAll);
        response.getWriter().write(toJson.toString());
    }
    @RequestMapping("getClassInStudentById.ano")
    @ResponseBody
    public void getClassInStudentById(@RequestParam Integer cid, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        List<ClassName2> classInStudentAll = studentService.getClassInStudentById(cid);
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson=new Gson();
        String toJson = gson.toJson(classInStudentAll);
        response.getWriter().write(toJson.toString());
    }
    @RequestMapping("getTableForStudent.ano")
    @ResponseBody
    public void getTableForStudent(@RequestParam Integer cid, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableService timeTableService = ApplicationContext.getBean("timeTableService", timeTableService.class);
        List<timeTableForStudent> tableForStudent = timeTableService.getTableForStudent(cid);
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson=new Gson();
        String toJson = gson.toJson(tableForStudent);
        response.getWriter().write(toJson.toString());
    }
    @RequestMapping("UpdateForStudentPwd.ano")
    @ResponseBody
    public void UpdateForStudentPwd(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String pwd, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        Student student=new Student(id,"学生",UserName,pwd);
        int i = studentService.UpdateForStudent(student);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }

    @RequestMapping("UpdateForStudentTel.ano")
    @ResponseBody
    public void UpdateForStudentTel(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String tel, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        Student student=new Student(id,"学生",UserName,tel,null);
        int i = studentService.UpdateForStudent(student);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }
    @RequestMapping("UpdateForStudentNum.ano")
    @ResponseBody
    public void UpdateForStudentNum(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String dorm_Num, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        Student student=new Student(id,UserName,dorm_Num);
        int i = studentService.UpdateForStudent(student);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }
    @RequestMapping("UpdateForStudentTid.ano")
    @ResponseBody
    public void UpdateForStudentTid(@RequestParam Integer id, @RequestParam String UserName, @RequestParam int dorm_Num, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService =  ApplicationContext.getBean("studentService", StudentService.class);
        Student student=new Student(id,UserName,dorm_Num);
        int i = studentService.UpdateForStudent(student);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }
    @RequestMapping("DeleteForStudent.ano")
    @ResponseBody
    public void DeleteForStudent(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String pwd, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService = ApplicationContext.getBean("studentService", StudentService.class);
        Student student=new Student(id,"学生",UserName,pwd);
        int i = studentService.DeleteForStudent(student);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }
}
