package com.ybb.pojo.Information;

import com.ybb.Mapper.Information.InformationMapper;
import com.ybb.Service.Information.Information;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import java.util.List;

public class InformationMapperImpl extends SqlSessionDaoSupport implements InformationMapper {
    @Override
    public List<Information> queryInformationAll() {
        return getSqlSession().getMapper(InformationMapper.class).queryInformationAll();
    }

    @Override
    public Information queryInformationById(int id) {
        return getSqlSession().getMapper(InformationMapper.class).queryInformationById(id);
    }

    @Override
    public int addInformation(String notice) {
        return getSqlSession().getMapper(InformationMapper.class).addInformation(notice);
    }

    @Override
    public int updateInformation(Information information) {
        return getSqlSession().getMapper(InformationMapper.class).updateInformation(information);
    }

    @Override
    public int deleteInformation(int id) {
        return getSqlSession().getMapper(InformationMapper.class).deleteInformation(id);
    }
}
