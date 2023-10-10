package com.ybb.Mapper.User;

import com.ybb.Service.User.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserLoginMapper {

    public User GetQueryUserName(@Param("UserName") String UserName,@Param("id") int id);
    public List<User> GetQueryAllUser();
    public int AddUserForUser(User user);
    public int UpdateForUser(User user);
    public int DeleteForUser(User user);
}
