import com.ybb.Mapper.Information.InformationMapper;
import com.ybb.Mapper.Root.RootLoginMapper;
import com.ybb.Mapper.Student.StudentLoginMapper;
import com.ybb.Mapper.Teacher.TeacherLoginMapper;
import com.ybb.Mapper.User.UserLoginMapper;
import com.ybb.Mapper.labelStatus.labelStatusMapper;
import com.ybb.Mapper.timeTable.timeTableMapper;
import com.ybb.Service.Class.ClassName2;
import com.ybb.Service.Information.Information;
import com.ybb.Service.Label.labelAppoint1;
import com.ybb.Service.Label.labelStatus;
import com.ybb.Service.Label.labelStatus1;
import com.ybb.Service.Root.Root;
import com.ybb.Service.Student.Student;
import com.ybb.Service.Student.StudentService;
import com.ybb.Service.Student.student1;
import com.ybb.Service.Teacher.Teacher;
import com.ybb.Service.Teacher.Teacher1;
import com.ybb.Service.User.User;
import com.ybb.Service.timeTable.timeTable;
import com.ybb.Service.timeTable.timeTableForStudent;
import com.ybb.Service.timeTable.timeTableForTeacher;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class mytest {
    @Test
    public void GetQueryRootNameTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootLoginMapper rootLoginMapper = (RootLoginMapper) ApplicationContext.getBean("RootLoginMapperImpl");
        Root root = rootLoginMapper.GetQueryRootName("root", 1);
        System.out.println(root);
    }

    @Test
    public void AddUserForRootTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootLoginMapper rootLoginMapper = (RootLoginMapper) ApplicationContext.getBean("RootLoginMapperImpl");
        Root root = new Root(21, "管理员", "ll12222", "12321", "3422");
        int i = rootLoginMapper.AddUserForRoot(root);
        if (i != 0) {
            System.out.println("插入成功");
            System.out.println("hello，修改了");
        }
    }

    @Test
    public void DeleteForRootTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootLoginMapper rootLoginMapper = (RootLoginMapper) ApplicationContext.getBean("RootLoginMapperImpl");
        Root root = new Root(4, "管理员", "ll1", "12321", "3422");
        int i = rootLoginMapper.DeleteForRoot(root);
        if (i != 0) {
            System.out.println("删除成功");
        }
    }

    @Test
    public void UpdateForRootTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        RootLoginMapper rootLoginMapper = (RootLoginMapper) ApplicationContext.getBean("RootLoginMapperImpl");
        Root root = new Root(3, "管理员", "ll", "1231231", "3422231");
        int i = rootLoginMapper.UpdateForRoot(root);
        if (i != 0) {
            System.out.println("修改成功");
        }
    }

    @Test
    public void GetQueryAllStudentTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        List<Student> students = studentLoginMapper.GetQueryAllStudent();
        for (Student student : students) {
            System.out.println(student);
        }

    }

    @Test
    public void GetQueryStudentNameTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        Student student = studentLoginMapper.GetQueryStudentName("fx", 2);
        System.out.println(student);
    }

    @Test
    public void UpdateForStudentTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        Student student = new Student(2, "学生", "fx", "12345611", "17654322", null, 3, 3);
        int i = studentLoginMapper.UpdateForStudent(student);
        if (i != 0) {
            System.out.println("修改成功");
        }
    }

    @Test
    public void AddUserForStudentTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        Student student = new Student(6, "学生", "fgt", "1231321", "17654322222", "1321", 2, 3);
        int i = studentLoginMapper.AddUserForStudent(student);
        if (i != 0) {
            System.out.println("添加成功");
        }
    }

    @Test
    public void getAllStudentAndTeacherTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        List<student1> allStudentAndTeacher = studentLoginMapper.getAllStudentAndTeacher();
        for (student1 student1 : allStudentAndTeacher) {
            System.out.println(student1);
        }

    }
@Test
public void getClassInStudentAllTest()
{
    ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
    StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
    List<ClassName2> classInStudentAll = studentLoginMapper.getClassInStudentAll();
    for (ClassName2 className2:classInStudentAll)
    {
        System.out.println(className2);
    }
}
@Test
    public void getClassInStudentByIdTest()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        List<ClassName2> classInStudentAll = studentLoginMapper.getClassInStudentById(2);
        for (ClassName2 className2:classInStudentAll)
        {
            System.out.println(className2);
        }
    }


    @Test
    public void DeleteForStudentTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentLoginMapper studentLoginMapper = (StudentLoginMapper) ApplicationContext.getBean("StudentLoginMapperImpl");
        int i = studentLoginMapper.DeleteForStudent(new Student(6, "学生", "fgt", "1231321", "17654322222", "1321", 2, 5));
        if (i != 0) {
            System.out.println("删除成功");
        }
    }

    @Test
    public void GetQueryTeacherNameTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        Teacher teacher = teacherLoginMapper.GetQueryTeacherName("cx", 2);
        System.out.println(teacher);
    }

    @Test
    public void UpdateForTeacherTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        Teacher teacher = new Teacher(2, "老师", "cx", "12345611", null);
        int i = teacherLoginMapper.UpdateForTeacher(teacher);
        if (i != 0) {
            System.out.println("修改成功");
        }
    }
@Test
public void Test1()
{
    ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
    TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
    Teacher teacher = new Teacher(2, "老师", "cx", "123456", null);
    int i = teacherLoginMapper.UpdateForTeacher(teacher);

}
    @Test
    public void AddUserForTeacherTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        Teacher teacher = new Teacher(6, "老师", "fgt", "1231321", "17654322222");
        int i = teacherLoginMapper.AddUserForTeacher(teacher);
        if (i != 0) {
            System.out.println("添加成功");
        }
    }

    @Test
    public void DeleteForTeacherTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        int i = teacherLoginMapper.DeleteForTeacher(new Teacher(6, "老师", "fgt", "1231321", "17654322222"));
        if (i != 0) {
            System.out.println("删除成功");
        }
    }

    @Test
    public void GetQueryAllTeacherTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        List<Teacher> teachers = teacherLoginMapper.GetQueryAllTeacher();
        for (Teacher teacher : teachers) {
            System.out.println(teacher);
        }
    }

    @Test
    public void getAllTeacherAndStudentTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        TeacherLoginMapper teacherLoginMapper = (TeacherLoginMapper) ApplicationContext.getBean("TeacherLoginMapperImpl");
        List<Teacher1> allTeacherAndStudent = teacherLoginMapper.getAllTeacherAndStudent();
        for (Teacher1 teacher1 : allTeacherAndStudent) {
            System.out.println(teacher1);
        }
    }

    @Test
    public void GetQueryUserNameTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        User user = userLoginMapper.GetQueryUserName("ff", 1);
        System.out.println(user);
    }

    @Test
    public void UpdateForUserTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        User user = new User(2, "校外人员", "wqe", "12345611", "17654322", "北京市");
        int i = userLoginMapper.UpdateForUser(user);
        if (i != 0) {
            System.out.println("修改成功");
        }
    }

    @Test
    public void AddUserForUserTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        User user = new User(6, "校外人员", "fgt", "1231321", "17654322222", "上海市");
        int i = userLoginMapper.AddUserForUser(user);
        if (i != 0) {
            System.out.println("添加成功");
        }
    }

    @Test
    public void DeleteForUserTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        int i = userLoginMapper.DeleteForUser(new User(6, "校外人员", "fgt", "1231321", "17654322222", "重庆市"));
        if (i != 0) {
            System.out.println("删除成功");
        }
    }

    @Test
    public void GetQueryAllUserTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserLoginMapper userLoginMapper = (UserLoginMapper) ApplicationContext.getBean("UserLoginMapperImpl");
        List<User> users = userLoginMapper.GetQueryAllUser();
        for (User user : users) {
            System.out.println(user);
        }
    }

    @Test
    public void AddLabelTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        labelStatus labelStatus = new labelStatus(10, "程欣", 1);
        int i = labelStatusMapper.AddLabel(labelStatus);
        if (i != 0) {
            System.out.println("添加成功");
        }
    }
    @Test
public void setLabelAppointTest()
{
    ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
    labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
    List<labelAppoint1> ff = labelStatusMapper.selectLabAppointForUserName(null, "999");
    System.out.println(ff);
    int i = labelStatusMapper.updateAppoint("98d36b4b-cd1c-11ec-ba94-00ff5b3b34c5", "1","");
    System.out.println(i+"好了");
}
    @Test
    public void DeleteLabelTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        int i = labelStatusMapper.DeleteLabel(10, "程欣");
        if (i != 0) {
            System.out.println("删除成功");
        }
    }

    @Test
    public void changeLabelByIdTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        int i = labelStatusMapper.changeLabelById(1, 3);
        if (i != 0) {
            System.out.println("修改成功");
        }
    }

    @Test
    public void getLabelByIdTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        labelStatus labelStatus = labelStatusMapper.getLabelById(1);
        System.out.println(labelStatus);

    }

    @Test
    public void getLabelListTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        List<labelStatus> labelList = labelStatusMapper.getLabelList();
        for (labelStatus labelStatus : labelList) {
            System.out.println(labelStatus);
        }
    }

    @Test
    public void getClassCourseAndLabelTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        labelStatusMapper labelStatusMapper = (labelStatusMapper) ApplicationContext.getBean("LabelStatusMapperImpl");
        List<labelStatus1> classCourseAndLabel = labelStatusMapper.getClassCourseAndLabel();
        for (labelStatus1 labelStatus1 : classCourseAndLabel) {
            System.out.println(labelStatus1);
        }
    }

    @Test
    public void getTableForTeacherTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        List<timeTableForTeacher> tableForTeacher = timeTableMapper.getTableForTeacher(4);
        for (timeTableForTeacher teacher : tableForTeacher) {
            System.out.println(teacher);
        }
    }

    @Test
    public void getTableForStudentTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        List<timeTableForStudent> tableForStudent = timeTableMapper.getTableForStudent(3);
        for (timeTableForStudent student : tableForStudent) {
            System.out.println(student);
        }
    }
    @Test
    public void getTableForRootTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        List<timeTableForStudent> tableForStudent = timeTableMapper.getTableForRoot();
        for (timeTableForStudent student : tableForStudent) {
            System.out.println(student);
        }
    }

    @Test
    public void updateTableTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        timeTable timeTable = new timeTable("数学", 3, 3, 1, "2018-03-01");
        int i = timeTableMapper.updateTable(timeTable);
        if (i != 0) {
            System.out.println("更新成功");
        }
    }
    @Test
    public void addTableTest()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        timeTable timeTable = new timeTable("物理", 3, 4, 4, "2022-03-02");
        int i = timeTableMapper.addTable(timeTable);
        if(i!=0)
        {
            System.out.println("添加成功");
        }
    }
    @Test
    public void deleteTableTest()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        timeTableMapper timeTableMapper = (timeTableMapper) ApplicationContext.getBean("timeTableMapperImpl");
        int i = timeTableMapper.deleteTable("物理", 4);
        if(i!=0)
        {
            System.out.println("删除成功");
        }
    }
    @Test
    public void queryInformationAllTest()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        List<Information> informationList = informationMapper.queryInformationAll();
        for(Information information:informationList)
        {
            System.out.println(information);
        }
    }
    @Test
    public void queryInformationByIdTest() {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        Information information = informationMapper.queryInformationById(2);
        System.out.println(information);
    }
    @Test
    public void addInformationTest()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        int i = informationMapper.addInformation("疫情很可怕");
        if(i!=0)
        {
            System.out.println("增加成功");
        }
    }

    @Test
    public void updateInformationTest()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        int i = informationMapper.updateInformation(new Information(2, "停课了"));
       if(i!=0)
       {
           System.out.println("更新成功了");
       }
    }
    @Test
    public void deleteInformationTest()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        InformationMapper informationMapper = (InformationMapper) ApplicationContext.getBean("InformationMapperImpl");
        int i = informationMapper.deleteInformation(3);
       if(i==1)
       {
           System.out.println("删除成功");
       }
    }
    @Test
    public void Test()
    {
        ApplicationContext ApplicationContext = new ClassPathXmlApplicationContext("applicationContext.xml");
        StudentService studentService = ApplicationContext.getBean("studentService", StudentService.class);
        Student student = studentService.GetQueryStudentName("fx", 2);
        System.out.println(student);

    }
}
