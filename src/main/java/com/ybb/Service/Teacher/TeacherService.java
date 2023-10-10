package com.ybb.Service.Teacher;

import com.ybb.Mapper.Teacher.TeacherLoginMapper;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherService {
    //通过名字和ID获取用户用于验证用户密码是否正确
    public Teacher GetQueryTeacherName(String UserName,int id) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        Teacher teacher = teacherLoginMapper.GetQueryTeacherName(UserName, id);
        return teacher;
    }
    //返回int=1 更新成功
    public int UpdateForTeacher(Teacher teacher) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        int i = teacherLoginMapper.UpdateForTeacher(teacher);
        return i;
    }
    //返回int=1 添加用户成功
    public int AddUserForTeacher(Teacher teacher) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        int i = teacherLoginMapper.AddUserForTeacher(teacher);
        return i;
    }
    //删除用户
    public int DeleteForTeacher(Teacher teacher) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        int i = teacherLoginMapper.DeleteForTeacher(teacher);
        return i;
    }
    //查询所有用户
    public List<Teacher> GetQueryAllTeacher() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        List<Teacher> teachers = teacherLoginMapper.GetQueryAllTeacher();
        return teachers;
    }
    //返回Teacher与Student的关系
    public List<Teacher1> getAllTeacherAndStudent()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        List<Teacher1> allTeacherAndStudent = teacherLoginMapper.getAllTeacherAndStudent();
        return  allTeacherAndStudent;
    }


}
