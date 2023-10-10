package com.ybb.Service.Label;

import com.ybb.Mapper.labelStatus.labelStatusMapper;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class labelStatusService {
    //查询实验室使用状态并返回班级名字
    public List<labelStatus1> getClassCourseAndLabel()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        List<labelStatus1> classCourseAndLabel = labelStatusMapper.getClassCourseAndLabel();
        return classCourseAndLabel;
    }
    //用于校外人员使用实验室开启
    public int changeLabelByIdForUser(int labelId)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        int i = labelStatusMapper.changeLabelById(labelId, 999);
        return i;
    }
    //实验室使用完成，
    public int changeLabelByIdForFinish(int labelId)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        int i = labelStatusMapper.changeLabelById(labelId, 0);
        return i;
    }
    //实验室查询使用状态但是不返回班级名字
    public List<labelStatus> getLabelList()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        List<labelStatus> labelList = labelStatusMapper.getLabelList();
        return  labelList;
    }
    //通过Id查找实验室状态
    public labelStatus getLabelById(int labelId)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        labelStatus labelStatus = labelStatusMapper.getLabelById(labelId);
        return  labelStatus;
    }
    //校内老师开始使用实验室
    public int changeLabelById(int labelId,int cid)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        int i = labelStatusMapper.changeLabelById(labelId, cid);
        return i;
    }
    //实验室管理员用于删除实验室，或者停用实验室
    public int DeleteLabel(int labelId,String labelName)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        int i = labelStatusMapper.DeleteLabel(labelId, labelName);
        return i;
    }
    //用于管理员开放实验室以及实验室的添加
    public int AddLabel(labelStatus labelStatus)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
       // labelStatus labelStatus = new labelStatus(10, "程欣", 1);
        int i = labelStatusMapper.AddLabel(labelStatus);
        return i;
    }
    public int setLabelAppoint(labelAppoint appoint)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        int i = labelStatusMapper.setLabelAppoint(appoint);
        return i;
    }
    public List<labelAppoint1> selectLabAppoint(String UserName,String UserType)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        List<labelAppoint1> labelAppoints = labelStatusMapper.selectLabAppointForUserName(UserName, UserType);
        return  labelAppoints;
    }
 public int updateAppoint(String ID,String state,String advice)
 {
     ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
     labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
     int i = labelStatusMapper.updateAppoint(ID, state,advice);
     return i;
 }
}
