package com.ybb.Controller.Information;

import com.google.gson.Gson;
import com.ybb.Service.Information.Information;
import com.ybb.Service.Information.InformationService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
public class getInformation {
    @RequestMapping("getInformationForTeacher.ano")
    @ResponseBody
    public void getInformation(HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationService informationService = ApplicationContext.getBean("informationService", InformationService.class);
        List<Information> information = informationService.queryInformationAll();
        response.setContentType("text/plain;charset=UTF-8");
        Gson gson=new Gson();
        String toJson = gson.toJson(information);
        response.getWriter().print(toJson.toString());
    }
    @RequestMapping("addInformation.ano")
    @ResponseBody
    public void addInformation(@RequestParam String notice, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationService informationService = ApplicationContext.getBean("informationService", InformationService.class);
        response.setContentType("text/plain;charset=UTF-8");
        int i = informationService.addInformation(notice);
        if (i==1) {
            response.getWriter().write("1");
        }
        else
        {
            response.getWriter().write("0");
        }
    }
    @RequestMapping("deleteInformation.ano")
    @ResponseBody
    public void deleteInformationTest(@RequestParam Integer id,  HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationService informationService = ApplicationContext.getBean("informationService", InformationService.class);
        response.setContentType("text/plain;charset=UTF-8");
        int i = informationService.deleteInformationTest(id);
        if (i==1) {
            response.getWriter().write("1");
        }
        else
        {
            response.getWriter().write("0");
        }
    }
    @RequestMapping("updateInformation.ano")
    @ResponseBody
    public void updateInformation(@RequestParam Integer id,@RequestParam String notice, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationService informationService = ApplicationContext.getBean("informationService", InformationService.class);
        response.setContentType("text/plain;charset=UTF-8");
        Information information=new Information(id,notice);
        int i = informationService.updateInformation(information);
        if (i==1) {
            response.getWriter().write("1");
        }
        else
        {
            response.getWriter().write("0");
        }
    }
    @RequestMapping("queryInformationById.ano")
    @ResponseBody
    public void queryInformationById(@RequestParam Integer id, HttpServletResponse response) throws IOException {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationService informationService = ApplicationContext.getBean("informationService", InformationService.class);
        response.setContentType("text/plain;charset=UTF-8");
        Information information = informationService.queryInformationById(id);
        Gson gson=new Gson();
        String toJson = gson.toJson(information);
        response.getWriter().print(toJson.toString());
    }
}
