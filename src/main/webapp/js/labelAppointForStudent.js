$(function ()
{
    var main3=$(".main3");
    var tanchuang=$('<div style="margin-top: 50px;margin-left: 80px;">');
    var table1 = $("<table style='margin-top: 10px;margin-left: 50px;position: relative; left: 40px;top: 20px;border-top:1px solid black'>")
    var table=$("<table style='margin-top: 10px;margin-left: -20px;position: relative; left: -10px;top: 20px;border-top:1px solid black'>")
    $($(".ul1>li")[6]).click(function () {
        main3.empty();
        var span111=$("<span style='line-height:25px;width: 120px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("实验室预约");
        main3.append(span111);
        main3.append($("<br>"));
        main3.append($("<br>"));
     getLabelAll();
    })
    function getLabelAll()
    {
        $.ajax(
            {
                url: 'LabelStatusAll.ano',
                data: {},
                type: 'post',
                async: true,
                dataType: "json",
                success: function (data) {
                    table.empty();
                    table1.empty();
                    $(".backbtu").remove();
                    let tr1 = $("<tr>");
                    var th1 = $('<th>').text("实验室ID");
                    var th2 = $('<th>').text("实验室名字");
                    var th3 = $('<th>').text("班级名称");
                    var th4 = $('<th>').text("教师编号/实验室状态");
                    var th5=$('<th>').text("能否预约");
                    tr1.append(th1);
                    tr1.append(th2);
                    tr1.append(th3);
                    tr1.append(th4);
                    tr1.append(th5);
                    table.append(tr1);
                    for (let i = 0; i < data.length; i++) {
                        var tr2 = $('<tr>');
                        var td1 = $('<td>').text(data[i].labelId);
                        var td2 = $('<td>').text(data[i].labelName);
                        var td3 = $('<td>').text(data[i].className1);
                        var td4 = $('<td>');
                        var td5=$('<td>');
                        if (data[i].cid >40000) {
                            td4.css(
                                {
                                }
                            )
                            td4.text("校外人员实验中");
                            var Userlabbtm=$("<input type='button' class='addBtn' value='预约'>");
                            Userlabbtm.css(
                                {
                                    "width": "100px",
                                    "margin-left":"10px",
                                    "padding":"8px",
                                    "background-color": "#428bca",
                                    "border-color": "#357ebd",
                                    "color": "#fff",
                                    "-moz-border-radius": "10px",
                                    "-webkit-border-radius": "10px",
                                    "border-radius": "10px",
                                    "-khtml-border-radius": "10px",
                                    "text-align": "center",
                                    "vertical-align": "middle",
                                    "border": "1px solid transparent",
                                    "font-weight": "900",
                                    "font-size":"70%",
                                    "margin-bottom":"2px"
                                })
                            Userlabbtm.attr("labelId",data[i].labelId);
                            Userlabbtm.click(function (){
                                tanchuang1($(this).attr("labelId"));
                            })
                            td5.append(Userlabbtm);
                        } else if (data[i].cid == "0") {
                            td4.css(
                                {
                                }
                            )
                            td4.text("无人使用");
                            var Userlabbtm=$("<input type='button' class='addBtn' value='预约'>");
                            Userlabbtm.css(
                                {
                                    "width": "100px",
                                    "margin-left":"10px",
                                    "padding":"8px",
                                    "background-color": "#428bca",
                                    "border-color": "#357ebd",
                                    "color": "#fff",
                                    "-moz-border-radius": "10px",
                                    "-webkit-border-radius": "10px",
                                    "border-radius": "10px",
                                    "-khtml-border-radius": "10px",
                                    "text-align": "center",
                                    "vertical-align": "middle",
                                    "border": "1px solid transparent",
                                    "font-weight": "900",
                                    "font-size":"70%",
                                    "margin-bottom":"2px"
                                })
                            Userlabbtm.attr("labelId",data[i].labelId);
                            Userlabbtm.click(function (){
                             tanchuang1($(this).attr("labelId"));
                            })
                            td5.append(Userlabbtm);

                        } else if (data[i].cid=="100"){
                            td4.css(
                                {
                                })
                            td4.text("实验室维护中");
                            td5.text("不可预约");
                            td5.css({
                                "color":"red",
                                "padding-left":"10px"
                            })
                        }
                        else
                        {
                            td4.text(data[i].cid);
                            td4.css(
                                {
                                }
                            )
                            td4.text("教学使用中");
                            var Userlabbtm=$("<input type='button' class='addBtn' value='预约'>");
                            Userlabbtm.css(
                                {
                                    "width": "100px",
                                    "margin-left":"10px",
                                    "padding":"8px",
                                    "background-color": "#428bca",
                                    "border-color": "#357ebd",
                                    "color": "#fff",
                                    "-moz-border-radius": "10px",
                                    "-webkit-border-radius": "10px",
                                    "border-radius": "10px",
                                    "-khtml-border-radius": "10px",
                                    "text-align": "center",
                                    "vertical-align": "middle",
                                    "border": "1px solid transparent",
                                    "font-weight": "900",
                                    "font-size":"70%",
                                    "margin-bottom":"2px"
                                })
                            Userlabbtm.attr("labelId",data[i].labelId);
                            Userlabbtm.click(function (){
                                tanchuang1($(this).attr("labelId"));
                            })
                            td5.append(Userlabbtm);
                        }
                        tr2.append(td1);
                        tr2.append(td2);
                        tr2.append(td3);
                        tr2.append(td4);
                        tr2.append(td5);
                        table.append(tr2);
                    }
                    table.css(
                        {
                            "margin-left": "50px",
                            "color": "black",
                            "border-right": "1px black solid"
                        }
                    )
                    $('.main3').append(table);
                    $('td').css(
                        {
                            "color": "black",
                            "border-left": "1px black solid",
                            "border-bottom": "1px black solid",
                            "margin": "0 auto",
                            "padding": "5px 20px 0px 20px"
                        }
                    )
                    tableAndTdth();
                }

            })
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
                "left": "-50px",
                "top": "96.5px"
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

    function tanchuang1(labId)
    {
        tanchuang.empty();
        var startlab=$("<label>");
        var endlab=$("<label>");
        var startTime=$("<input type='datetime-local' style='border-radius: 5px 5px; padding: 4px; background: #a4c3c9; outline: #a9c6c9'>");
        var endTime=$("<input type='datetime-local' placeholder='请选择结束时间' style='border-radius: 5px 5px; padding: 4px; background: #a4c3c9; outline: #a9c6c9'>");
        var Uselab=$("<input type='button' class='addBtn' value='提交'>");
        var selectbtu=$("<input type='button' class='addBtn' value='查询预约状态'>");
        Uselab.css(
            {
                "width": "100px",
                "margin-left":"90px",
                "padding":"8px",
                "background-color": "#428bca",
                "border-color": "#357ebd",
                "color": "#fff",
                "margin-top":"0px",
                "-moz-border-radius": "10px",
                "-webkit-border-radius": "10px",
                "border-radius": "10px",
                "-khtml-border-radius": "10px",
                "text-align": "center",
                "vertical-align": "middle",
                "border": "1px solid transparent",
                "font-weight": "900",
                "font-size":"70%",
                "margin-bottom":"2px"
            })
        selectbtu.css(
            {
                "width": "100px",
                "margin-left":"80px",
                "padding":"8px",
                "background-color": "#428bca",
                "border-color": "#357ebd",
                "color": "#fff",
                "margin-top":"3px",
                "-moz-border-radius": "10px",
                "-webkit-border-radius": "10px",
                "border-radius": "10px",
                "-khtml-border-radius": "10px",
                "text-align": "center",
                "vertical-align": "middle",
                "border": "1px solid transparent",
                "font-weight": "900",
                "font-size":"70%",
                "margin-bottom":"2px"
            }
        )
        startlab.text("开始时间:");
        endlab.text("结束时间:");
        tanchuang.append(startlab);
        tanchuang.append(startTime);
        tanchuang.append(endlab);
        tanchuang.append(endTime);
        tanchuang.append($("<br/>"));
        tanchuang.append(Uselab);
        tanchuang.append(selectbtu);
        tanchuang.css({
            "position":"absolute" ,
            "top":"-15px",
            "left":"10px"
        })
        var lab=labId;
        var boo=true;
        var time;
        selectbtu.click(function ()
        {
           $.ajax(
               {
                   url:"selectLabAppoint.ano",
                   data:{
                       "UserName":localStorage.getItem("UserName"),
                       "UserType":""
                   },
                   type:"post",
                   async:"true",
                   dataType:"json",
                   success:function (data) {
                       console.log(data);
                       table1.empty();
                       table.empty();
                       let tr1 = $("<tr>");
                       var th1 = $('<th>').text("实验室名称");
                       var th2 = $('<th>').text("开始时间");
                       var th3 = $('<th>').text("结束时间");
                       var th4 = $('<th>').text("审核状态");
                       var th5=$('<th>').text("审核意见");
                       tr1.append(th1);
                       tr1.append(th2);
                       tr1.append(th3);
                       tr1.append(th4);
                       tr1.append(th5);
                       table1.append(tr1);
                       for (let p = 0; p < data.length; p++) {
                           table.empty();
                           var tr2 = $('<tr>');
                           var td1 = $('<td>').text(data[p].labName);
                           var td2 = $('<td>').text(data[p].startTime);
                           var td3 = $('<td>').text(data[p].endTime);
                           var td4 = $('<td>');
                           var td5=$("<td>");
                           if (data[p].state=="0")
                           {
                               td4.text("等待审核");
                               td4.css(
                                   {
                                       "background":"yellow"
                                   }
                               )
                               td5.text("等待审核");
                           }
                           else if (data[p].state=="1")
                           {
                               td4.text("审核通过");
                               td4.css(
                                   {
                                       "background":"green"
                                   }
                               )
                               td5.text(data[p].advice);
                           }
                           else if (data[p].state=="2")
                           {
                               td4.text("审核未通过");
                               td4.css(
                                   {
                                       "background":"red"
                                   }
                               )
                               td5.text(data[p].advice);
                           }
                           else if (data[p].state=="3")
                           {
                               td4.text("复审驳回");
                               td4.css(
                                   {
                                       "background":"orange"
                                   }
                               )
                               td5.text(data[p].advice);
                           }
                           tr2.append(td1);
                           tr2.append(td2);
                           tr2.append(td3);
                           tr2.append(td4);
                           tr2.append(td5);
                           table1.append(tr2);
                       }
                       main3.append(table1);
                       var backbtu=$("<input type='button' class='backbtu' value='返回预约界面'>");
                       backbtu.css(
                           {
                               "width": "100px",
                               "margin-left":"80px",
                               "padding":"8px",
                               "background-color": "#428bca",
                               "border-color": "#357ebd",
                               "color": "#fff",
                               "-moz-border-radius": "10px",
                               "-webkit-border-radius": "10px",
                               "border-radius": "10px",
                               "-khtml-border-radius": "10px",
                               "text-align": "center",
                               "vertical-align": "middle",
                               "border": "1px solid transparent",
                               "font-weight": "900",
                               "font-size":"70%",
                               "margin-bottom":"2px"
                           }
                       )
                       backbtu.click(function ()
                       {
                           getLabelAll(backbtu);
                       })
                       tanchuang.append(backbtu);
                       tableAndTdth();

                   }
               }
           )
        })
        Uselab.click(function ()
        {

            if (endTime.val()>startTime.val()) {
                $.ajax(
                    {
                        url:"getTableByLab.ano",
                        type:"post",
                        data:{
                            "labId":lab,
                        },
                        dataType:"json",
                        async:true,
                        success:function (data)
                        {
                            var start=startTime.val().substring(0,10).replaceAll("-","");
                            var end=endTime.val().substring(0,10).replaceAll("-","");
                            for (var j=0;j<data.length;j++)
                            {
                                time=data[j].coursetime;
                                console.log(data);
                                if (time.replaceAll("-","")>start&&time.replaceAll("-","")<end)
                                {
                                    alert("该时段有学校课程不能预约");
                                    break;
                                    boo=false;
                                }
                            }
                        }
                    }
                )
                if (boo=true)
                {
                    $.ajax(
                        {
                            type: "get",
                            url: "UseLab.ano",
                            data: {
                                "startTime": startTime.val(),
                                "endTime": endTime.val(),
                                "UserType": localStorage.getItem("id"),
                                "UserName": localStorage.getItem("UserName"),
                                "aaa": lab
                            },
                            dataType: "json",
                            async: true,
                            success: function (data) {
                                if (data=="1")
                                {
                                    alert(labId+"号实验室预约成功,请耐心等待管理员审核");
                                }
                            }
                        }
                    )
                }
            }
            else
            {
                alert("结束时间需大于开始时间");
            }
            })

        main3.append(tanchuang);
    }
})