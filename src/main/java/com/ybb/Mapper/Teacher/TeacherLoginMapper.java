package com.ybb.Mapper.Teacher;

import com.ybb.Service.Teacher.Teacher;
import com.ybb.Service.Teacher.Teacher1;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TeacherLoginMapper {
    public Teacher GetQueryTeacherName(@Param("UserName") String UserName,@Param("id")int id);
    public List<Teacher> GetQueryAllTeacher();
    public int AddUserForTeacher(Teacher teacher);
    public int UpdateForTeacher(Teacher teacher);
    public int DeleteForTeacher(Teacher teacher);
    public List<Teacher1> getAllTeacherAndStudent();
}
