package com.ybb.pojo.timeTable;

import com.ybb.Mapper.timeTable.timeTableMapper;
import com.ybb.Service.timeTable.timeTable;
import com.ybb.Service.timeTable.timeTableForStudent;
import com.ybb.Service.timeTable.timeTableForTeacher;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import java.util.List;

public class timeTableMapperImpl extends SqlSessionDaoSupport implements timeTableMapper {


    @Override
    public List<timeTableForStudent> getTableForStudent(int cid) {
        return getSqlSession().getMapper(timeTableMapper.class).getTableForStudent(cid);
    }

    @Override
    public List<timeTableForTeacher> getTableForTeacher(int tid) {
        return getSqlSession().getMapper(timeTableMapper.class).getTableForTeacher(tid) ;
    }

    @Override
    public List<timeTableForStudent> getTableForRoot() {
        return getSqlSession().getMapper(timeTableMapper.class).getTableForRoot();
    }

    @Override
    public int addTable(timeTable timetable) {
        return getSqlSession().getMapper(timeTableMapper.class).addTable(timetable);
    }

    @Override
    public int deleteTable(String coursename,int cid) {
        return getSqlSession().getMapper(timeTableMapper.class).deleteTable(coursename,cid);
    }

    @Override
    public int updateTable(timeTable timetable) {
        return getSqlSession().getMapper(timeTableMapper.class).updateTable(timetable);
    }

    @Override
    public List<timeTable> getTableByLab(String labId) {
        return getSqlSession().getMapper(timeTableMapper.class).getTableByLab(labId);
    }
}
