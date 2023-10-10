package com.ybb.Service.timeTable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class timeTable {
    private String coursename;
    private int labelId;
    private int tid;
    private int cid;
    private String coursetime;
}
