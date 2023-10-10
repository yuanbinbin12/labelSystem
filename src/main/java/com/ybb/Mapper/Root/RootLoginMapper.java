package com.ybb.Mapper.Root;

import com.ybb.Service.Root.Root;
import org.apache.ibatis.annotations.Param;

public interface RootLoginMapper {
    public Root GetQueryRootName(@Param("UserName") String UserName, @Param("id") int id);
    public int AddUserForRoot(Root root);
    public int UpdateForRoot(Root root);
    public int DeleteForRoot(Root root);
}
