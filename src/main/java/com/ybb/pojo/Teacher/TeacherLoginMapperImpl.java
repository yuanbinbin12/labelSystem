package com.ybb.pojo.Teacher;

import com.ybb.Mapper.Teacher.TeacherLoginMapper;
import com.ybb.Service.Teacher.Teacher;
import com.ybb.Service.Teacher.Teacher1;
import org.mybatis.spring.SqlSessionTemplate;

import java.util.List;

public class TeacherLoginMapperImpl implements TeacherLoginMapper {
    private SqlSessionTemplate sqlSessionTemplate;

    public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
        this.sqlSessionTemplate = sqlSessionTemplate;
    }
    @Override
    public Teacher GetQueryTeacherName(String UserName, int id) {
       return sqlSessionTemplate.getMapper(TeacherLoginMapper.class).GetQueryTeacherName(UserName,id);
    }

    @Override
    public List<Teacher> GetQueryAllTeacher() {
        return sqlSessionTemplate.getMapper(TeacherLoginMapper.class).GetQueryAllTeacher();
    }

    @Override
    public int AddUserForTeacher(Teacher teacher) {
        return sqlSessionTemplate.getMapper(TeacherLoginMapper.class).AddUserForTeacher(teacher);
    }

    @Override
    public int UpdateForTeacher(Teacher teacher) {
        return sqlSessionTemplate.getMapper(TeacherLoginMapper.class).UpdateForTeacher(teacher);
    }

    @Override
    public int DeleteForTeacher(Teacher teacher) {
        return sqlSessionTemplate.getMapper(TeacherLoginMapper.class).DeleteForTeacher(teacher);
    }

    @Override
    public List<Teacher1> getAllTeacherAndStudent() {
        return sqlSessionTemplate.getMapper(TeacherLoginMapper.class).getAllTeacherAndStudent();
    }


}
