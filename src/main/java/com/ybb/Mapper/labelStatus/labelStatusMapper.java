package com.ybb.Mapper.labelStatus;

import com.ybb.Service.Label.labelAppoint;
import com.ybb.Service.Label.labelAppoint1;
import com.ybb.Service.Label.labelStatus;
import com.ybb.Service.Label.labelStatus1;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface labelStatusMapper {
    public int changeLabelById(@Param("labelId") int labelId,@Param("cid") int cid);
    public List<labelStatus> getLabelList();
    public labelStatus getLabelById(int id);
    public int AddLabel(labelStatus labelStatus);
    public int DeleteLabel(@Param("labelId") int labelId,@Param("labelName") String labelName);
    public List<labelStatus1> getClassCourseAndLabel();
    public int setLabelAppoint(labelAppoint Appoint);
    public List<labelAppoint1> selectLabAppointForUserName(@Param("UserName")String UserName, @Param("UserType")String UserType);
    public int updateAppoint(@Param("ID") String ID,@Param("state")String state,@Param("advice") String advice);
}
