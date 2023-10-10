package com.ybb.Service.Root;

import com.ybb.Mapper.Root.RootLoginMapper;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

@Service
public class RootService {
    //通过名字和ID获取Root管理员的信息，用于校验密码
    public Root GetQueryRootName(String UserName,int id) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootLoginMapper rootLoginMapper = (RootLoginMapper) ApplicationContext.getBean("RootLoginMapperImpl");
        Root root = rootLoginMapper.GetQueryRootName(UserName, id);
        return root;
    }
    //添加一个用户root进入数据库
    public int AddUserForRootTest(Root root) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootLoginMapper rootLoginMapper = (RootLoginMapper) ApplicationContext.getBean("RootLoginMapperImpl");
        int i = rootLoginMapper.AddUserForRoot(root);
        return i;
    }
    public int DeleteForRootTest(Root root) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootLoginMapper rootLoginMapper = (RootLoginMapper) ApplicationContext.getBean("RootLoginMapperImpl");
        int i = rootLoginMapper.DeleteForRoot(root);
        return i;
    }
    public int UpdateForRootTest(Root root) {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootLoginMapper rootLoginMapper = (RootLoginMapper) ApplicationContext.getBean("RootLoginMapperImpl");
        int i = rootLoginMapper.UpdateForRoot(root);
        return i;
    }
}
