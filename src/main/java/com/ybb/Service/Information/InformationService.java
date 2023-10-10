package com.ybb.Service.Information;

import com.ybb.Mapper.Information.InformationMapper;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InformationService {
    //查询所有的信息用于展示信息
    public List<Information> queryInformationAll()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        List<Information> informationList = informationMapper.queryInformationAll();
        return informationList;
    }
    //通过id定位信息,查看信息
    public Information queryInformationById(int id) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        Information information = informationMapper.queryInformationById(id);
        return information;
    }
    //管理员用于发布公告
    public int addInformation(String notice)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        int i = informationMapper.addInformation(notice);
        return i;
    }
    //用于管理员更改公告
    public int updateInformation(Information information)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        int i = informationMapper.updateInformation(information);
        return i;
    }
    public int deleteInformationTest(int id)
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        int i = informationMapper.deleteInformation(id);
        return i;
    }

}
