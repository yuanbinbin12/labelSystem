package com.ybb.Service.timeTable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class timeTableForStudent {
    private int courseId;
    private String courseName;
    private String labelName;
    private String courseTime;
    private String className;
    private String UserName;
}
