package com.ybb.Controller.Teacher;

import com.google.gson.Gson;
import com.ybb.Service.Student.StudentService;
import com.ybb.Service.Student.student1;
import com.ybb.Service.Teacher.Teacher;
import com.ybb.Service.Teacher.Teacher1;
import com.ybb.Service.Teacher.TeacherService;
import com.ybb.Service.timeTable.timeTableForTeacher;
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
    public class newTeacher {
    @RequestMapping("newTeacher.ano")
    @ResponseBody
    public void newTeacher1(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String pwd, @RequestParam String tel, HttpServletResponse response) throws IOException {
        response.setContentType("text/plain;charset=UTF-8");
        Teacher teacher = new Teacher(id, "老师", UserName, pwd, tel);
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherService teacherService = ApplicationContext.getBean("teacherService", TeacherService.class);
        int i = teacherService.AddUserForTeacher(teacher);
        if (i == 1) {
            response.getWriter().write("T");
        }
        if (i == 0) {
            response.getWriter().write("F");
        }
    }

    @RequestMapping("TeacherLogin.ano")
    @ResponseBody
    public void TeacherLogin(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String pwd, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherService teacherService = ApplicationContext.getBean("teacherService", TeacherService.class);
        Teacher teacher = teacherService.GetQueryTeacherName(UserName, id);
        if (teacher == null) {
            response.getWriter().write("0");
        } else if (teacher.getPwd().equals(pwd)) {
            response.getWriter().write("1");
        } else {
            response.getWriter().write("0");
        }
    }

    @RequestMapping("TeacherList.ano")
    @ResponseBody
    public void getListForTeacher(@RequestParam String UserName, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherService teacherService = ApplicationContext.getBean("teacherService", TeacherService.class);
        List<Teacher> teachers = teacherService.GetQueryAllTeacher();
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson = new Gson();
        String toJson = gson.toJson(teachers);
        response.getWriter().print(toJson.toString());
    }

    @RequestMapping("timeTableForTeacher.ano")
    @ResponseBody
    public void getTableForTeacher(@RequestParam Integer tid, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableService timeTableService = ApplicationContext.getBean("timeTableService", timeTableService.class);
        List<timeTableForTeacher> tableForTeacher = timeTableService.getTableForTeacher(tid);
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson = new Gson();
        String toJson = gson.toJson(tableForTeacher);
        response.getWriter().print(toJson.toString());
    }

    @RequestMapping("UpdateForTeacherPwd.ano")
    @ResponseBody
    public void UpdateForTeacherPwd1(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String pwd, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherService teacherService = ApplicationContext.getBean("teacherService", TeacherService.class);
        Teacher teacher = new Teacher(id, "老师", UserName, pwd, null);
        int i = teacherService.UpdateForTeacher(teacher);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }

    @RequestMapping("UpdateForTeacherTel.ano")
    @ResponseBody
    public void UpdateForTeacherTel1(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String tel, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherService teacherService = ApplicationContext.getBean("teacherService", TeacherService.class);
        Teacher teacher = new Teacher(id, "老师", UserName, null, tel);
        int i = teacherService.UpdateForTeacher(teacher);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }

    @RequestMapping("DeleteForTeacher.ano")
    @ResponseBody
    public void DeleteForTeacher1(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String pwd, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherService teacherService = ApplicationContext.getBean("teacherService", TeacherService.class);
        Teacher teacher = new Teacher(id, "老师", UserName, pwd, null);
        int i = teacherService.DeleteForTeacher(teacher);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }

    @RequestMapping("getAllTeacher.ano")
    @ResponseBody
    public void getAllTeacher(HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherService teacherService = ApplicationContext.getBean("teacherService", TeacherService.class);
        List<Teacher> teachers = teacherService.GetQueryAllTeacher();
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson = new Gson();
        String toJson = gson.toJson(teachers);
        response.getWriter().print(toJson.toString());
    }

    @RequestMapping("getAllStudentAndTeacher.ano")
    @ResponseBody
    public void getAllStudentAndTeacher(HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService = ApplicationContext.getBean("studentService", StudentService.class);
        List<student1> allStudentAndTeacher = studentService.getAllStudentAndTeacher();
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson = new Gson();
        String toJson = gson.toJson(allStudentAndTeacher);
        response.getWriter().print(toJson.toString());
    }
    @RequestMapping("getAllTeacherAndStudentById.ano")
    @ResponseBody
    public void getAllStudentAndTeacherById(@RequestParam Integer id, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService = ApplicationContext.getBean("studentService", StudentService.class);
        List<student1> allTeacherInStudentById = studentService.getAllTeacherInStudentById(id);
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson = new Gson();
        String toJson = gson.toJson(allTeacherInStudentById);
        response.getWriter().print(toJson.toString());
    }

    @RequestMapping("getAllTeacherAndTeacher.ano")
    @ResponseBody
    public void getAllTeacherAndTeacher(HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherService teacherService= ApplicationContext.getBean("teacherService", TeacherService.class);
        List<Teacher1> allTeacherAndStudent = teacherService.getAllTeacherAndStudent();
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson = new Gson();
        String toJson = gson.toJson(allTeacherAndStudent);
        response.getWriter().print(toJson.toString());
    }
    }

