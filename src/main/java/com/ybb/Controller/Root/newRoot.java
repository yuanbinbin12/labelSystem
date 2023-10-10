package com.ybb.Controller.Root;

import com.ybb.Service.Label.labelStatusService;
import com.ybb.Service.Root.Root;
import com.ybb.Service.Root.RootService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class newRoot{
    @RequestMapping("newRoot.ano")
    @ResponseBody
    public void newRoot1(@RequestParam Integer id, @RequestParam String UserName, @RequestParam String pwd, @RequestParam String tel,  HttpServletResponse response) throws IOException
    {
        response.setContentType("text/plain;charset=UTF-8");
        Root root = new Root(id,"管理员",UserName,pwd,tel);
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootService rootService =  ApplicationContext.getBean("rootService", RootService.class);
        int i =rootService.AddUserForRootTest(root);
        if (i==1)
        {
            response.getWriter().write("T");
        }
        if (i==0)
        {
            response.getWriter().write("F");
        }
    }
    @RequestMapping("RootLogin.ano")
    @ResponseBody
    public void RootLogin(@RequestParam Integer id,@RequestParam String UserName,@RequestParam String pwd,HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootService rootService =  ApplicationContext.getBean("rootService", RootService.class);
        response.setContentType("text/plain;charset=UTF-8");
        Root root = rootService.GetQueryRootName(UserName, id);
        if (root==null)
        {
            response.getWriter().write("2");
        }
        else if(root.getPwd().equals(pwd))
        {
            response.getWriter().write("1");
        }
        else
        {
            response.getWriter().write("0");
        }
    }
    @RequestMapping("deleteRoot.ano")
    @ResponseBody
    public void deleteRoot(@RequestParam Integer id,@RequestParam String UserName,@RequestParam String pwd, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootService rootService = ApplicationContext.getBean("rootService", RootService.class);
        response.setContentType("text/plain;charset=UTF-8");
        Root root=new Root(id,"管理员",UserName,pwd,null);
        int i = rootService.DeleteForRootTest(root);
        response.getWriter().print(i);
    }
    @RequestMapping("UpdateRootTel.ano")
    @ResponseBody
    public void UpdateRootTel(@RequestParam Integer id,@RequestParam String UserName,@RequestParam String tel, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootService rootService = ApplicationContext.getBean("rootService", RootService.class);
        response.setContentType("text/plain;charset=UTF-8");
        Root root=new Root(id,"管理员",UserName,null,tel);
        int i = rootService.UpdateForRootTest(root);
        response.getWriter().print(i);
    }
    @RequestMapping("UpdateRootPwd.ano")
    @ResponseBody
    public void UpdateRootPwd(@RequestParam Integer id,@RequestParam String UserName,@RequestParam String pwd, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootService rootService = ApplicationContext.getBean("rootService", RootService.class);
        response.setContentType("text/plain;charset=UTF-8");
        Root root=new Root(id,"管理员",UserName,pwd,null);
        int i = rootService.UpdateForRootTest(root);
        response.getWriter().print(i);
    }
    @RequestMapping("startLabelRoot.ano")
    @ResponseBody
    public void startLabelRoot(@RequestParam Integer labelId, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");

        labelStatusService labelStatusService1= ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        int i = labelStatusService1.changeLabelById(labelId, 100);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }
}
