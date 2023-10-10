package com.ybb.pojo.Root;

import com.ybb.Mapper.Root.RootLoginMapper;
import com.ybb.Service.Root.Root;
import org.mybatis.spring.SqlSessionTemplate;

public class RootLoginMapperImpl implements RootLoginMapper {
private SqlSessionTemplate sqlSessionTemplate;

    public void setSqlSessionTemplate(SqlSessionTemplate sqlSessionTemplate) {
        this.sqlSessionTemplate = sqlSessionTemplate;
    }

    @Override
    public Root GetQueryRootName(String UserName, int id) {
        return sqlSessionTemplate.getMapper(RootLoginMapper.class).GetQueryRootName(UserName,id);
    }

    @Override
    public int AddUserForRoot(Root root) {
        return sqlSessionTemplate.getMapper(RootLoginMapper.class).AddUserForRoot(root);
    }

    @Override
    public int UpdateForRoot(Root root) {
        return sqlSessionTemplate.getMapper(RootLoginMapper.class).UpdateForRoot(root);
    }

    @Override
    public int DeleteForRoot(Root root) {
        return sqlSessionTemplate.getMapper(RootLoginMapper.class).DeleteForRoot(root);
    }
}
