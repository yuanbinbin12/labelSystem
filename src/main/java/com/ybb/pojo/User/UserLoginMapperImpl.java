package com.ybb.pojo.User;

import com.ybb.Mapper.User.UserLoginMapper;
import com.ybb.Service.User.User;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import java.util.List;

public class UserLoginMapperImpl extends SqlSessionDaoSupport implements UserLoginMapper  {
    @Override
    public User GetQueryUserName(String UserName,int id) {
        return getSqlSession().getMapper(UserLoginMapper.class).GetQueryUserName(UserName,id);
    }

    @Override
    public List<User> GetQueryAllUser() {
        return getSqlSession().getMapper(UserLoginMapper.class).GetQueryAllUser();
    }

    @Override
    public int AddUserForUser(User user) {
        return getSqlSession().getMapper(UserLoginMapper.class).AddUserForUser(user);
    }

    @Override
    public int UpdateForUser(User user) {
        return getSqlSession().getMapper(UserLoginMapper.class).UpdateForUser(user);
    }

    @Override
    public int DeleteForUser(User user) {
        return getSqlSession().getMapper(UserLoginMapper.class).DeleteForUser(user);
    }
}
