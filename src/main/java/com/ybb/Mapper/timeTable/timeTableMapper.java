package com.ybb.Mapper.timeTable;

import com.ybb.Service.timeTable.timeTable;
import com.ybb.Service.timeTable.timeTableForStudent;
import com.ybb.Service.timeTable.timeTableForTeacher;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface timeTableMapper {
    public List<timeTableForStudent> getTableForStudent(@Param("cid") int cid);
    public List<timeTableForTeacher> getTableForTeacher(@Param("tid") int tid);
    public List<timeTableForStudent> getTableForRoot();
    public int addTable(timeTable timetable);
    public int deleteTable(@Param("coursename") String coursename,@Param("cid") int cid);
    public int updateTable(timeTable timetable);
    public List<timeTable> getTableByLab(@Param("labId") String labId);
}
