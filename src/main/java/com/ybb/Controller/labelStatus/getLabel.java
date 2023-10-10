package com.ybb.Controller.labelStatus;

import com.google.gson.Gson;
import com.ybb.Service.Label.*;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class getLabel {
    @RequestMapping("LabelStatusById.ano")
    @ResponseBody
    public void getLabelById(@RequestParam Integer labelId, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusService labelStatusService1= ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        labelStatus labelById = labelStatusService1.getLabelById(labelId);
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson = new Gson();
        String toJson = gson.toJson(labelById);
        response.getWriter().print(toJson.toString());
    }
    @RequestMapping("LabelStatusAll.ano")
    @ResponseBody
    public void LabelStatusAll(HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusService labelStatusService1= ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        List<labelStatus1> classCourseAndLabel = labelStatusService1.getClassCourseAndLabel();
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson = new Gson();
        String toJson = gson.toJson(classCourseAndLabel);
        response.getWriter().print(toJson.toString());
    }
    @RequestMapping("ChangeLabelStatus.ano")
    @ResponseBody
    public void changeLabelById(@RequestParam Integer labelId,@RequestParam Integer cid ,HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusService labelStatusService1= ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        int i = labelStatusService1.changeLabelById(labelId, cid);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }
    @RequestMapping("StopLabelStatus.ano")
    @ResponseBody
    public void changeLabelByIdForFinish(@RequestParam Integer labelId,HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusService labelStatusService1= ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        int i = labelStatusService1.changeLabelByIdForFinish(labelId);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }
    @RequestMapping("addLabel.ano")
    @ResponseBody
    public void addLabel(@RequestParam Integer labelId,@RequestParam String labelName, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusService labelStatusService1 = ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        labelStatus labelStatus = new labelStatus(labelId, labelName, 0);
        int i = labelStatusService1.AddLabel(labelStatus);
        response.setContentType("text/plain;charset=UTF-8");
        if (i == 1) {
            response.getWriter().print("1");
        } else
        {
            response.getWriter().print("0");
        }
    }
    @RequestMapping("deleteLabel.ano")
    @ResponseBody
    public void deleteLabel(@RequestParam String labelName,@RequestParam Integer labelId,HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusService labelStatusService1 = ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        int i = labelStatusService1.DeleteLabel(labelId, labelName);
        response.setContentType("text/plain;charset=UTF-8");
        if (i == 1) {
            response.getWriter().print("1");
        } else
        {
            response.getWriter().print("0");
        }
    }
    @GetMapping("UseLab.ano")
    @ResponseBody
    public void setLabelAppoint(@RequestParam String aaa,@RequestParam String startTime,@RequestParam String endTime,@RequestParam String UserType,@RequestParam String UserName, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusService labelStatusService1 = ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        labelAppoint appoint=new labelAppoint(aaa,startTime,endTime,UserType,"0",UserName,null);
        response.setContentType("text/plain;charset=UTF-8");
        int i = labelStatusService1.setLabelAppoint(appoint);
        response.getWriter().print(i);
    }
    @PostMapping("selectLabAppoint.ano")
    @ResponseBody
    public void selectLabAppoint(@RequestParam String UserName,@RequestParam String UserType,HttpServletResponse response) throws IOException {
        String UserName1=null;
        String UserType1=null;
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusService labelStatusService1 = ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        response.setContentType("text/plain;charset=UTF-8");
        if (UserName!="")
        {
            UserName1=UserName;
        }
        if (UserType!="")
        {
            UserType1=UserType;
        }
        List<labelAppoint1> labelAppoints = labelStatusService1.selectLabAppoint(UserName1, UserType1);
        Gson gson = new Gson();
        String toJson = gson.toJson(labelAppoints);
        response.getWriter().print(toJson.toString());
    }
    @PostMapping("updateAppoint.ano")
    @ResponseBody
    public void updateAppoint(@RequestParam String ID,@RequestParam String state,@RequestParam String advice, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusService labelStatusService1 = ApplicationContext.getBean("labelStatusService", labelStatusService.class);
        int i = labelStatusService1.updateAppoint(ID, state,advice);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().print(i);
    }
}
