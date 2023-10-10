package com.ybb.Service.Student;

import com.ybb.Mapper.Student.StudentLoginMapper;
import com.ybb.Service.Class.ClassName2;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    //用户管理员获取所有学生的信息
    public List<Student> GetQueryAllStudent() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        List<Student> students = studentLoginMapper.GetQueryAllStudent();
        return students;
    }

    //通过ID和名字获取student的信息，用于登录校验
    public Student GetQueryStudentName(String UserName,int id) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        Student student = studentLoginMapper.GetQueryStudentName(UserName,id);
        return student;
    }

    //用于获取用户忘记密码时修改密码,返回1为更新成功
    public int UpdateForStudent(Student student) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        int i = studentLoginMapper.UpdateForStudent(student);
        return i;
    }

    //用于获取增加用户,返回1为更新成功
    public int AddUserForStudent(Student student) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        int i = studentLoginMapper.AddUserForStudent(student);
        return i;
    }

    //删除用户，返回一正确否则不正确
    public int DeleteForStudent(Student student) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        int i = studentLoginMapper.DeleteForStudent(student);
        return i;
    }

    public List<student1> getAllStudentAndTeacher() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        List<student1> allStudentAndTeacher = studentLoginMapper.getAllStudentAndTeacher();
        return allStudentAndTeacher;
    }

    //通过老师ID和姓名获取老师下面所有1的学生
    public List<student1> getAllTeacherInStudentById(int TeacherId) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        List<student1> studentById = studentLoginMapper.getAllTeacherInStudentById(TeacherId);
        return studentById;
    }
//查询所有班级的学生
    public List<ClassName2> getClassInStudentAll() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        List<ClassName2> classInStudentAll = studentLoginMapper.getClassInStudentAll();
        return classInStudentAll;
    }
//通过班级cid定位查询指定班级
    public List<ClassName2> getClassInStudentById(Integer cid) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        List<ClassName2> classInStudentById = studentLoginMapper.getClassInStudentById(cid);
        return classInStudentById;
    }
}
