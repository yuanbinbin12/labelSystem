package com.ybb.Mapper.Information;

import com.ybb.Service.Information.Information;

import java.util.List;

public interface InformationMapper {
    public List<Information> queryInformationAll();
    public Information queryInformationById(int id);
    public int addInformation(String notice);
    public int updateInformation(Information information);
    public int deleteInformation(int id);
}
