package com.ybb.Service.Student;

import com.ybb.Service.Teacher.Teacher2;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class student1 {
    private int id;
    private String Root;
    private String UserName;
    private String pwd;
    private String tel;
    private String dorm_Num;
    private int tid;
    private int cid;
    private Teacher2 teachers;
}
