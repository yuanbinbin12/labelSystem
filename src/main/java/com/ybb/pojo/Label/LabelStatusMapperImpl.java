package com.ybb.pojo.Label;

import com.ybb.Mapper.labelStatus.labelStatusMapper;
import com.ybb.Service.Label.labelAppoint;
import com.ybb.Service.Label.labelAppoint1;
import com.ybb.Service.Label.labelStatus;
import com.ybb.Service.Label.labelStatus1;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import java.util.List;

public class LabelStatusMapperImpl extends SqlSessionDaoSupport implements labelStatusMapper {
    @Override
    public int changeLabelById(int labelId, int cid) {
        return getSqlSession().getMapper(labelStatusMapper.class).changeLabelById(labelId, cid);
    }

    @Override
    public List<labelStatus> getLabelList() {
        return getSqlSession().getMapper(labelStatusMapper.class).getLabelList();
    }

    @Override
    public labelStatus getLabelById(int id) {
        return getSqlSession().getMapper(labelStatusMapper.class).getLabelById(id);
    }

    @Override
    public int AddLabel(labelStatus labelStatus) {
        return getSqlSession().getMapper(labelStatusMapper.class).AddLabel(labelStatus);
    }

    @Override
    public int DeleteLabel(int labelId, String labelName) {
        return getSqlSession().getMapper(labelStatusMapper.class).DeleteLabel(labelId, labelName);
    }

    @Override
    public List<labelStatus1> getClassCourseAndLabel() {
        return getSqlSession().getMapper(labelStatusMapper.class).getClassCourseAndLabel();
    }

    @Override
    public int setLabelAppoint(labelAppoint appoint) {
        return getSqlSession().getMapper(labelStatusMapper.class).setLabelAppoint(appoint);
    }

    @Override
    public List<labelAppoint1> selectLabAppointForUserName(String UserName, String UserType) {
        return getSqlSession().getMapper(labelStatusMapper.class).selectLabAppointForUserName(UserName,UserType);
    }

    @Override
    public int updateAppoint(String ID, String state,String advice) {
        return getSqlSession().getMapper(labelStatusMapper.class).updateAppoint(ID,state,advice);
    }

}

