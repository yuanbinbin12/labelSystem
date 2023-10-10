package com.ybb.Mapper.Student;

import com.ybb.Service.Class.ClassName2;
import com.ybb.Service.Student.Student;
import com.ybb.Service.Student.student1;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StudentLoginMapper {
    public Student GetQueryStudentName(@Param("UserName") String UserName, @Param("id") int id);
    public List<Student> GetQueryAllStudent();
    public int AddUserForStudent(Student student);
    public int UpdateForStudent(Student student);
    public int DeleteForStudent(Student student);
    public List<student1> getAllStudentAndTeacher();
    public List<student1>  getAllTeacherInStudentById( @Param("id") int id);
    public List<ClassName2> getClassInStudentAll();
    public List<ClassName2> getClassInStudentById(int cid);
}
