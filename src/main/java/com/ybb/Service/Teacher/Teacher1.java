package com.ybb.Service.Teacher;

import com.ybb.Service.Student.Student2;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Teacher1 {
    private int id;
    private String Root;
    private String UserName;
    private String pwd;
    private String tel;
    private List<Student2> student2s;
}
