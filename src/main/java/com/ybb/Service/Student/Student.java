package com.ybb.Service.Student;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    private int id;
    private String Root;
    private String UserName;
    private String pwd;
    private String tel;
    private String dorm_Num;
    private int tid;
    private int cid;

    public Student(int id, String root, String userName, String tel, String dorm_Num) {
        this.id = id;
        Root = root;
        UserName = userName;
        this.tel = tel;
        this.dorm_Num = dorm_Num;
    }

    public Student(int id, String root, String userName, String pwd) {
        this.id = id;
        Root = root;
        UserName = userName;
        this.pwd = pwd;
    }

    public Student(int id, String userName,  String dorm_Num) {
        this.id = id;
        UserName = userName;
        this.dorm_Num = dorm_Num;
    }

    public Student(int id, String userName, int tid) {
        this.id = id;
        UserName = userName;
        this.tid = tid;
    }

    public Student(int id, String userName, String dorm_Num, int tid) {
        this.id = id;
        UserName = userName;
        this.dorm_Num = dorm_Num;
        this.tid = tid;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getRoot() {
        return Root;
    }

    public void setRoot(String root) {
        Root = root;
    }

    public String getUserName() {
        return UserName;
    }

    public void setUserName(String userName) {
        UserName = userName;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getDorm_Num() {
        return dorm_Num;
    }

    public void setDorm_Num(String dorm_Num) {
        this.dorm_Num = dorm_Num;
    }

    public int getTid() {
        return tid;
    }

    public void setTid(int tid) {
        this.tid = tid;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }



}
