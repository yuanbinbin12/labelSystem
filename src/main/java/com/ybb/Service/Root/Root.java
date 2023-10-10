package com.ybb.Service.Root;

import jdk.nashorn.internal.objects.annotations.Constructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Root {
    private int id;
    private String Root;
    private String UserName;
    private String pwd;
    private String tel;
}
