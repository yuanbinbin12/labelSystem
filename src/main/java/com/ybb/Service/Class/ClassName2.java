package com.ybb.Service.Class;

import com.ybb.Service.Student.Student;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClassName2 {
    private String className;
    private List<Student> students;
}
