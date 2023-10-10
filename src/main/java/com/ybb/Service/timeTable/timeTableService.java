package com.ybb.Service.timeTable;

import com.ybb.Mapper.timeTable.timeTableMapper;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class timeTableService {
    //获取具体学生的课程表,学生查看自己的课程表
    public List<timeTableForStudent> getTableForStudent(int cid) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        List<timeTableForStudent> tableForStudent = timeTableMapper.getTableForStudent(cid);
        return tableForStudent;
    }

    //根据tid返回老师的课程表
    public List<timeTableForTeacher> getTableForTeacher(int tid) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        List<timeTableForTeacher> tableForTeacher = timeTableMapper.getTableForTeacher(tid);
        return tableForTeacher;
    }

    //返回所有的课程表，用于管理员查看
    public List<timeTableForStudent> getTableForRoot() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        List<timeTableForStudent> tableForRoot = timeTableMapper.getTableForRoot();
        return tableForRoot;
    }

    //用户管理员更新课程表，通过课程名称查找，更新其他
    public int updateTable(timeTable timeTable) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        int i = timeTableMapper.updateTable(timeTable);
        return i;
    }

    //管理员添加课程表
    public int addTable(timeTable timeTable) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        int i = timeTableMapper.addTable(timeTable);
        return i;
    }

    //通过班级以及科目名称定位，用于管理员删除课程
    public int deleteTable(String coursename, int cid) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        int i = timeTableMapper.deleteTable(coursename, cid);
        return i;
    }

    public List<timeTable> getTableByLab(String labId) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        List<timeTable> tableByLab = timeTableMapper.getTableByLab(labId);
        return tableByLab;
    }
}
