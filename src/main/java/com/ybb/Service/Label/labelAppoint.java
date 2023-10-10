package com.ybb.Service.Label;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class labelAppoint {
    private String labId;
    private String startTime;
    private  String endTime;
    private String UserType;
    private String state;//0代表未审核，1代表审核完成
    private String UserName;
    private String advice;
}
