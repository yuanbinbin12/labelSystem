package com.ybb.pojo.Student;

import com.ybb.Mapper.Student.StudentLoginMapper;
import com.ybb.Service.Class.ClassName2;
import com.ybb.Service.Student.Student;
import com.ybb.Service.Student.student1;
import org.mybatis.spring.SqlSessionTemplate;

import java.util.List;

public class StudentLoginMapperImpl implements StudentLoginMapper {
private SqlSessionTemplate sqlSessionTemplate;

    public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
        this.sqlSessionTemplate = sqlSessionTemplate;
    }

    @Override
    public Student GetQueryStudentName(String UserName, int id) {
        return sqlSessionTemplate.getMapper(StudentLoginMapper.class).GetQueryStudentName(UserName,id);
    }

    @Override
    public int AddUserForStudent(Student student) {
        return sqlSessionTemplate.getMapper(StudentLoginMapper.class).AddUserForStudent(student);
    }

    @Override
    public int UpdateForStudent(Student student) {
        return sqlSessionTemplate.getMapper(StudentLoginMapper.class).UpdateForStudent(student);
    }

    @Override
    public int DeleteForStudent(Student student) {
        return sqlSessionTemplate.getMapper(StudentLoginMapper.class).DeleteForStudent(student);
    }

    @Override
    public List<student1> getAllStudentAndTeacher() {
        return sqlSessionTemplate.getMapper(StudentLoginMapper.class).getAllStudentAndTeacher();
    }

    @Override
    public List<student1> getAllTeacherInStudentById(int id) {
        return sqlSessionTemplate.getMapper(StudentLoginMapper.class).getAllTeacherInStudentById(id);
    }

    @Override
    public List<ClassName2> getClassInStudentAll() {
        return sqlSessionTemplate.getMapper(StudentLoginMapper.class).getClassInStudentAll();
    }

    @Override
    public List<ClassName2> getClassInStudentById(int cid) {
        return sqlSessionTemplate.getMapper(StudentLoginMapper.class).getClassInStudentById(cid);
    }

    public List<Student> GetQueryAllStudent()
    {
       return sqlSessionTemplate.getMapper(StudentLoginMapper.class).GetQueryAllStudent();
    }
}
