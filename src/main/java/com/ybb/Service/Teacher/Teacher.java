package com.ybb.Service.Teacher;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Teacher {
    private int id;
    private String Root;
    private String UserName;
    private String pwd;
    private String tel;
}
