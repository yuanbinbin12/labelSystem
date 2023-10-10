package com.ybb.Controller.timeTable;

import com.google.gson.Gson;
import com.ybb.Service.timeTable.timeTable;
import com.ybb.Service.timeTable.timeTableForStudent;
import com.ybb.Service.timeTable.timeTableService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class timetableManagement {
    @RequestMapping("timeTableForRoot.ano")
    @ResponseBody
    public void getTableForTeacher( HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableService timeTableService =  ApplicationContext.getBean("timeTableService", timeTableService.class);
        List<timeTableForStudent> tableForRoot = timeTableService.getTableForRoot();
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson=new Gson();
        String toJson = gson.toJson(tableForRoot);
        response.getWriter().print(toJson.toString());
    }
    @RequestMapping("addTimeTable.ano")
    @ResponseBody
    public void addTable( @RequestParam String coursename,@RequestParam Integer labelId,@RequestParam Integer tid,@RequestParam Integer cid,@RequestParam String coursetime ,HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableService timeTableService =  ApplicationContext.getBean("timeTableService", timeTableService.class);
        timeTable tableForRoot=new timeTable(coursename,labelId,tid,cid,coursetime);
        int i = timeTableService.addTable(tableForRoot);
        response.setContentType("text/plain;charset=UTF-8");
       if(i==1)
       {
           response.getWriter().write("1");
       }
       else
       {
           response.getWriter().write("0");
       }
    }
    @RequestMapping("deleteTimeTable.ano")
    @ResponseBody
    public void deleteTable( @RequestParam String coursename,@RequestParam Integer cid ,HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableService timeTableService =  ApplicationContext.getBean("timeTableService", timeTableService.class);
        int i = timeTableService.deleteTable(coursename, cid);
        response.setContentType("text/plain;charset=UTF-8");
        if(i==1)
        {
            response.getWriter().write("1");
        }
        else
        {
            response.getWriter().write("0");
        }
    }
    @RequestMapping("updateTimeTable.ano")
    @ResponseBody
    public void updateTable(@RequestParam String coursename, @Nullable @RequestParam Integer labelId,@Nullable  @RequestParam Integer tid,@Nullable @RequestParam Integer cid,@Nullable @RequestParam String coursetime , HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableService timeTableService =  ApplicationContext.getBean("timeTableService", timeTableService.class);
        timeTable tableForRoot=new timeTable(coursename,labelId,tid,cid,coursetime);
        int i = timeTableService.updateTable(tableForRoot);
        response.setContentType("text/plain;charset=UTF-8");
        if(i==1)
        {
            response.getWriter().write("1");
        }
        else
        {
            response.getWriter().write("0");
        }
    }
    @PostMapping("getTableByLab.ano")
    @ResponseBody
    public void getTableByLab(@RequestParam String labId,HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableService timeTableService =  ApplicationContext.getBean("timeTableService", timeTableService.class);
        List<timeTable> tableByLab = timeTableService.getTableByLab(labId);
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson=new Gson();
        String toJson = gson.toJson(tableByLab);
        response.getWriter().print(toJson.toString());
    }
}
