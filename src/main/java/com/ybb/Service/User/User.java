package com.ybb.Service.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class User {
    private int id;
    private String Root;
    private String UserName;
    private String pwd;
    private String tel;
    private String address;
}
