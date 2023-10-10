$(function ()
{
    var table1 = $('<table style="border-top:1px solid black">');
    var div2 = $("<div style='margin-top: 150px'>");
    var main3=$(".main3");
    var tanchuang=$('<div style="margin-top: 50px;margin-left: 190px;">');
    var table=$("<table style='margin-top: 10px;margin-left: 0px;position: relative; left: 10px;top: 20px;border-top:1px solid black'>")
    $($(".ul1>li")[1]).click(function ()
    {
        main3.empty();
        var span111=$("<span style='line-height:25px;width: 120px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("开始使用实验室");
        main3.append(span111);
        main3.append($("<br>"));
        main3.append($("<br>"));
        getLabelAll();
    })
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
                "top": "20px"
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
                    main3.empty();
                    var span111=$("<span style='line-height:25px;width: 120px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
                    span111.text("开始使用实验室");
                    main3.append(span111);
                    main3.append($("<br>"));
                    main3.append($("<br>"));
                    table.empty();
                    let tr1 = $("<tr>");
                    var th1 = $('<th>').text("实验室ID");
                    var th2 = $('<th>').text("实验室名字");
                    var th3 = $('<th>').text("班级名称");
                    var th4 = $('<th>').text("教师编号/实验室状态");
                    var th5=$('<th>').text("能否使用");
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
                        if (data[i].cid > 40000) {
                            td4.text("校外人员实验中");
                            td4.css(
                                {
                                }
                            )
                            td5.text("不可使用");
                            td5.css({
                                "color":"red",
                                "padding-left":"10px"
                            })
                        } else if (data[i].cid == "0") {
                            td4.css(
                                {
                                }
                            )
                            td4.text("无人使用")
                            var Userlabbtm=$("<input type='button' class='addBtn' value='开始使用'>");
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
                            Userlabbtm.attr("labelName",data[i].labelName);
                            Userlabbtm.attr("labId",data[i].labelId);
                            Userlabbtm.click(function (){
                                tanchuang1($(this).attr("labelName"),$(this).attr("labId"));
                            })
                            td5.append(Userlabbtm);

                        } else if (data[i].cid=="100"){
                            td4.css(
                                {
                                })
                            td4.text("实验室维护中");
                            td5.text("不可使用");
                            td5.css({
                                "color":"red",
                                "padding-left":"10px"
                            })
                        }
                        else
                        {
                            td4.text("教学使用中");
                            td4.css(
                                {

                                }
                            )
                            td5.text("不可使用");
                            td5.css({
                                "color":"red",
                                "padding-left":"10px"
                            })
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
                            "margin-left": "10px",
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
    function tanchuang1(labName,labelId)
    {
        var boo1=false;
        var myDate = new Date();
        var year = myDate.getFullYear();        //获取当前年
        var month = myDate.getMonth() + 1;   	//获取当前月
        var date = myDate.getDate();            //获取当前日
        var h = myDate.getHours();              //获取当前小时数(0-23)
        var m = myDate.getMinutes();         	//获取当前分钟数(0-59)
        var s = myDate.getSeconds();
        var now = 	year.toString() + (month>=10?month.toString():("0"+month.toString())) + (date>=10?date.toString():("0"+date.toString()))+(h>=10?h.toString():("0"+h.toString())) + (m>=10?m.toString():("0"+m.toString()))+(s>=10?s.toString():("0"+s.toString()));
        console.log(now);
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
                    for (var t = 0; t < data.length; t++) {
                        var stat = data[t].startTime.replaceAll("-", "").replaceAll(" ", "").replaceAll(":", "");
                        var end = data[t].endTime.replaceAll("-", "").replaceAll(" ", "").replaceAll(":", "");
                        if (data[t].labName == labName && (data[t].state == "1"||data[t].state == "3")) {
                            if (now > stat && now < end) {
                                boo1 = true;
                                break;
                            }
                        }
                    }
                    if (boo1 == true) {
                        $.ajax(
                            {
                                url:'ChangeLabelStatus.ano',
                                data:{
                                    "labelId":labelId,
                                    "cid":localStorage.getItem("cid")
                                },
                                type:'post',
                                async:true,
                                dataType:"json",
                                success:function (data){
                                getLabelAll();
                                }
                            })
                        console.log(boo1);
                    }
                    else
                    {
                        alert("没有预约不能够使用该实验室，请前往预约页面进行预约");
                    }
                }
            })
    }
})





