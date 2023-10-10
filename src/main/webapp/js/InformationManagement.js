$(function ()
{
    console.log($($(".ul1>li")[10]));
    var main3=$(".main3");
    var table=$("<table style='margin-top: 10px;margin-left: 50px;position: relative; left: 50px;top: 20px;border-top:1px solid black'>")
    $($(".ul1>li")[9]).click(function ()
    {
        main3.empty();
        var span111=$("<span style='line-height:25px;width: 60px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("公告管理");
        $('.main3').append(span111);
        var div1=$("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 320px; height: 40px; margin-left: 10px;margin-top: 40px;'>").text("通知编号:")
        var div2=$("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 320px; height: 40px; '>").html("通知内容:")
        var InformationId=$("<input type='text' class='informationId'>");
        InformationId.css(
            {
                "margin":"10px 0px 20px 10px",
                "line-height": "30px",
                "background":"aliceblue",
                "border-radius": "50px",
                "padding-left":"40px" ,
                "width": "150px",
                "outline": "none"
            })
        var InformationNotice=$("<input type='text' class='informationNotice'>");
        InformationNotice.css(
            {
                "margin":"10px 0px 20px 10px",
                "line-height": "30px",
                "background":"aliceblue",
                "border-radius": "50px",
                "padding-left":"40px" ,
                "width": "150px",
                "outline": "none"
            })
        div1.append(InformationId);
        div2.append(InformationNotice);
        var div3=$("<div " +
            "style='border-radius: 10px 10px;" +
            "border: 1px aquamarine solid;width: 700px; height: 50px; margin-left: 40px;padding-top: 20px' class='div3'>")
        var addBtn=$("<input type='button' class='addBtn' value='新增通知'>");
        addBtn.css(
            {
                "width": "100px",
                "margin-left":"80px",
                "padding":"8px",
                "background-color": "#428bca",
                "border-color": "#357ebd",
                "color": "#fff",
                "margin-left":"40px",
                "-moz-border-radius": "10px",
                "-webkit-border-radius": "10px",
                "border-radius": "10px",
                "-khtml-border-radius": "10px",
                "text-align": "center",
                "vertical-align": "middle",
                "border": "1px solid transparent",
                "font-weight": "900",
                "font-size":"70%",
                "margin-bottom":"20px"
            })
        var deleteBtn=$("<input type='button' class='deleteBtn' value='删除通知'>");
        deleteBtn.css(
            {
                "width": "100px",
                "margin-left":"60px",
                "padding":"8px",
                "background-color": "#428bca",
                "border-color": "#357ebd",
                "color": "#fff",
                "margin-left":"40px",
                "-moz-border-radius": "10px",
                "-webkit-border-radius": "10px",
                "border-radius": "10px",
                "-khtml-border-radius": "10px",
                "text-align": "center",
                "vertical-align": "middle",
                "border": "1px solid transparent",
                "font-weight": "900",
                "font-size":"70%",
                "margin-bottom":"20px"
            })
        var updateBtn=$("<input type='button' class='updateBtn' value='更新通知'>");
        updateBtn.css({
            "width": "100px",
            "margin-left":"60px",
            "padding":"8px",
            "background-color": "#428bca",
            "border-color": "#357ebd",
            "color": "#fff",
            "margin-left":"40px",
            "-moz-border-radius": "10px",
            "-webkit-border-radius": "10px",
            "border-radius": "10px",
            "-khtml-border-radius": "10px",
            "text-align": "center",
            "vertical-align": "middle",
            "border": "1px solid transparent",
            "font-weight": "900",
            "font-size":"70%",
            "margin-bottom":"20px"
        })
        var selectBtn=$("<input type='button' class='selectBtn' value='查询通知'>");
        selectBtn.css({
            "width": "100px",
            "margin-left":"60px",
            "padding":"8px",
            "background-color": "#428bca",
            "border-color": "#357ebd",
            "color": "#fff",
            "margin-left":"40px",
            "-moz-border-radius": "10px",
            "-webkit-border-radius": "10px",
            "border-radius": "10px",
            "-khtml-border-radius": "10px",
            "text-align": "center",
            "vertical-align": "middle",
            "border": "1px solid transparent",
            "font-weight": "900",
            "font-size":"70%",
            "margin-bottom":"20px"
        })
        div3.append(addBtn);
        div3.append(deleteBtn);
        div3.append(updateBtn);
        div3.append(selectBtn);
        main3.append(div1);
        main3.append(div2);
        main3.append(div3);
        selectBtn.click(function ()
        {
           if($(".informationId").val().trim().length==0)
           {
               getInformationForTeacher();
           }
           else
           {
              console.log( $(".informationId").val().trim())
               $.ajax(
                   {
                       url: "queryInformationById.ano",
                       data:{
                           "id":parseInt($(".informationId").val().trim())
                       },
                       type:"get",
                       dataType:"json",
                       async:"true",
                       success:function (data)
                       {
                           table.empty();
                           if (data==null)
                           {
                               alert("这条消息不存在");
                           }
                          else
                           {
                               var tr1 = $("<tr>");
                               var th1 = $('<th>').text("通知编号");
                               var th2 = $('<th>').text("通知内容");
                               tr1.append(th1);
                               tr1.append(th2);
                               table.append(tr1);
                               var tr2=$("<tr>");
                               var td1 = $('<td>').text(data.id);
                               var td2 = $('<td>').text(data.notice);
                               tr2.append(td1);
                               tr2.append(td2);
                               table.append(tr2);
                               table.css(
                                   {
                                       "margin-left": "10px",
                                       "color": "black",
                                       "border-right": "1px black solid"
                                   }
                               );
                               main3.append(table);
                               $('td').css(
                                   {
                                       "color": "black",
                                       "border-left": "1px black solid",
                                       "border-bottom": "1px black solid",
                                       "margin": "0 auto",
                                       "padding": "5px 20px 0px 20px"
                                   }
                               );
                           }
                          tableAndTdth();
                       }

                   }
               )
           }
        })
        addBtn.click(function (){
            console.log($(".informationNotice").val().trim())
            $.ajax(
                {
                    url:"addInformation.ano",
                    data: {
                        "notice": $(".informationNotice").val().trim()
                    },
                        type:"get",
                        dataType:"json",
                        async:"true",
                        success:function (data)
                        {
                            console.log(data)
                            if (data==1)
                            {
                                alert("增加成功")
                                getInformationForTeacher();
                            }
                            else
                            {
                                alert("增加失败，请联系维护人员");
                            }
                        }
                        ,error:function ()
                        {
                            alert("新增失败，请联系管理员")
                        }
                }
            )

        })
        deleteBtn.click(function ()
        {
            $.ajax(
                {
                    url:"deleteInformation.ano",
                    data: {
                        "id": $(".informationId").val().trim()
                    },
                    type:"post",
                    dataType:"json",
                    async:"true",
                    success:function (data)
                    {
                        console.log(data)
                        if (data==1)
                        {
                            alert("删除成功")
                            getInformationForTeacher();
                        }
                        else
                        {
                            alert("删除失败，通知已被删除");
                        }
                    }
                    ,error:function ()
                    {
                        alert("删除失败，请联系维护人员")
                    }
                }
            )
        })
        updateBtn.click(function ()
        {
            $.ajax(
                {
                    url:"updateInformation.ano",
                    data: {
                        "id":$(".informationId").val().trim(),
                        "notice": $(".informationNotice").val().trim()
                    },
                    type:"get",
                    dataType:"json",
                    async:"true",
                    success:function (data)
                    {
                        console.log(data)
                        if (data==1)
                        {
                            alert("更新成功")
                            getInformationForTeacher();
                        }
                        else
                        {
                            alert("更新失败，消息不存在");
                        }
                    }
                    ,error:function ()
                    {
                        alert("新增失败，请联系管理员")
                    }
                }
            )
        })
    })
    function getInformationForTeacher ()
    {
        $.ajax(
            {
                url:"getInformationForTeacher.ano",
                data:{},
                type:"post",
                dataType:"json",
                async:"true",
                success:function (data)
                {
                    table.empty();
                    var tr1 = $("<tr>");
                    var th1 = $('<th>').text("通知编号");
                    var th2 = $('<th>').text("通知内容");
                    tr1.append(th1);
                    tr1.append(th2);
                    table.append(tr1);
                    for (let s=0;s<data.length;s++)
                    {
                        var tr2=$("<tr>");
                        var td1 = $('<td>').text(data[s].id);
                        var td2 = $('<td>').text(data[s].notice);
                        tr2.append(td1);
                        tr2.append(td2);
                        table.append(tr2);
                    }
                    table.css(
                        {
                            "margin-left": "10px",
                            "color": "black",
                            "border-right": "1px black solid"
                        }
                    );

                    main3.append(table);
                    $('td').css(
                        {
                            "color": "black",
                            "border-left": "1px black solid",
                            "border-bottom": "1px black solid",
                            "margin": "0 auto",
                            "padding": "5px 20px 0px 20px"
                        }
                    );
                    tableAndTdth();
                },
                error:function ()
                {
                    alert("获取消息失败请联系维护人员");
                }
            }
        )
    }
    function tableAndTdth ()
    {
        $("table").css(
            {
                "width":"1080px",
                "border-collapse": "collapse",
                "border-spacing": "0",
                "empty-cells": "show",
                "border": "1px solid #cbcbcb",
                "position": "absolute",
                "left": "-10px",
                "top": "150px"
            }
        )
        $("th").css(
            {
                "border-left": "1px solid #cbcbcb",
                "border-width": "0 0 0 1px",
                "font-size": "inherit",
                "margin": "0",
                "overflow": "visible",
                "padding": ".5em .5em",
                "background":"cadetblue"
            }
        )
        $("td").css(
            {
                "border-left": "1px solid #cbcbcb",
                "border-width": "0 0 0 1px",
                "font-size": "inherit",
                "margin": "0",
                "overflow": "visible",
                "padding": ".5em .5em",
            }
        )
    }
})