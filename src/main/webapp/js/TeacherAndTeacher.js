$(function ()
{
    function zhuhanshu(start,end,reslut)
    {
        table.empty();
        var tr1 = $("<tr>");
        var th1 = $('<th>').text("工号")
        var th2 = $('<th>').text("身份");
        var th3 = $('<th>').text("姓名");
        var th4 = $('<th>').text("电话");
        var th5=$("<th>").text("教师姓名");
        var th6=$("<th>").text("身份");
        tr1.append(th1);
        tr1.append(th2);
        tr1.append(th3);
        tr1.append(th4);
        tr1.append(th5);
        tr1.append(th6);
        table.append(tr1);
        if (end>reslut.length)
        {
            end=reslut.length;
        }
        for (let s = start; s <end; s++) {
            var tr2 = $("<tr>");
            var td1 = $('<td>').text(reslut[s].id);
            var td2 = $('<td>').text(reslut[s].Root);
            var td3 = $('<td>').text(reslut[s].UserName);
            var td4 = $('<td>').text(reslut[s].tel);
            var td5 = $('<td>');
            var td6=$('<td>');
            td5.text(reslut[s].teachers.UserName);
            td6.text(reslut[s].teachers.Root);
            tr2.append(td1);
            tr2.append(td2);
            tr2.append(td3);
            tr2.append(td4);
            tr2.append(td5);
            tr2.append(td6);
            table.append(tr2);
        }
        table.css(
            {
                "width":"1080px",
                "margin-left": "10px",
                "color": "black",
                "border-right": "1px black solid",
                "position": "absolute",
                "left": "-10px",
                "top": "80px"
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
    }
    function zhuye(start,end,reslut)
    {
        table.empty();
        table1.empty();
        var tr1 = $("<tr>");
        var th1 = $('<th>').text("工号")
        var th2 = $('<th>').text("身份");
        var th3 = $('<th>').text("姓名");
        var th4 = $('<th>').text("电话");
        var th5 = $("<th>").text("学生信息");
        tr1.append(th1);
        tr1.append(th2);
        tr1.append(th3);
        tr1.append(th4);
        tr1.append(th5);
        table.append(tr1);
        if (end>reslut.length)
        {
            end=reslut.length;
        }
        for (let s = start; s < end; s++) {
            var tr2 = $("<tr>");
            var td1 = $('<td>').text(reslut[s].id);
            var td2 = $('<td>').text(reslut[s].Root);
            var td3 = $('<td>').text(reslut[s].UserName);
            var td4 = $('<td>').text(reslut[s].tel);
            var td5 = $('<td>');
            table1 = $("<table style='position: static;left: 10px;border-right:1px solid black;border-top:1px solid black ;width:700px '>");
            var th1 = $('<th>').text("学号")
            var th2 = $('<th>').text("身份");
            var th3 = $('<th>').text("姓名");
            var tr7 = $("<tr>");
            tr7.append(th1);
            tr7.append(th2);
            tr7.append(th3);
            table1.append(tr7);
            for (let m = 0; m < reslut[s].student2s.length; m++) {
                var tr3 = $('<tr>');
                var td6 = $('<td>').text(reslut[s].student2s[m].id);
                var td7 = $('<td>').text(reslut[s].student2s[m].Root);
                var td8 = $('<td>').text(reslut[s].student2s[m].UserName);
                tr3.append(td6);
                tr3.append(td7);
                tr3.append(td8);
                table1.append(tr3);
            }
            td5.append(table1);
            tr2.append(td1);
            tr2.append(td2);
            tr2.append(td3);
            tr2.append(td4);
            tr2.append(td5);
            table.append(tr2);
        }
        table.css(
            {
                "width":"1080px",
                "margin-left": "10px",
                "color": "black",
                "border-right": "1px black solid",
                "position": "absolute",
                "left": "-10px",
                "top": "80px"
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
    }
    var reslut;
    var main3=$('.main3');
    var table=$("<table style='margin-top: 10px;margin-left: 50px;position: relative; left: 50px;top: 20px;border-top:1px solid black'>")
    var table1=$("<table>");
    $($(".ul1>li")[8]).click(function ()
    {
        main3.empty();
        var span111=$("<span style='line-height:25px;width: 100px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("学生教师信息");
        $('.main3').append(span111);
        var div3 = $("<div " +
            "style='border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 500px; height: 50px; margin-left: 60px;margin-top:20px;padding-top: 20px' class='div3'>")
        var addBtn = $("<input type='button' class='addBtn' value='查询所有老师信息'>");
        addBtn.css(
            {
                "width": "120px",
                "margin-left": "60px",
                "padding": "8px",
                "background-color": "#428bca",
                "border-color": "#357ebd",
                "color": "#fff",
                "margin-left": "40px",
                "-moz-border-radius": "10px",
                "-webkit-border-radius": "10px",
                "border-radius": "10px",
                "-khtml-border-radius": "10px",
                "text-align": "center",
                "vertical-align": "middle",
                "border": "1px solid transparent",
                "font-weight": "900",
                "font-size": "70%",
                "margin-bottom": "20px"
            })
        var deleteBtn = $("<input type='button' class='deleteBtn' value='查看学生对应老师'>");
        deleteBtn.css(
            {
                "width": "120px",
                "margin-left": "60px",
                "padding": "8px",
                "background-color": "#428bca",
                "border-color": "#357ebd",
                "color": "#fff",
                "margin-left": "40px",
                "-moz-border-radius": "10px",
                "-webkit-border-radius": "10px",
                "border-radius": "10px",
                "-khtml-border-radius": "10px",
                "text-align": "center",
                "vertical-align": "middle",
                "border": "1px solid transparent",
                "font-weight": "900",
                "font-size": "70%",
                "margin-bottom": "20px"
            })
        var selectBtn = $("<input type='button' class='selectBtn' value='查看老师下所有学生'>");
        selectBtn.css({
            "width": "120px",
            "margin-left": "60px",
            "padding": "8px",
            "background-color": "#428bca",
            "border-color": "#357ebd",
            "color": "#fff",
            "margin-left": "40px",
            "-moz-border-radius": "10px",
            "-webkit-border-radius": "10px",
            "border-radius": "10px",
            "-khtml-border-radius": "10px",
            "text-align": "center",
            "vertical-align": "middle",
            "border": "1px solid transparent",
            "font-weight": "900",
            "font-size": "70%",
            "margin-bottom": "20px"
        })
        div3.append(addBtn);
        div3.append(deleteBtn);
        div3.append(selectBtn);
        main3.append(div3);
        addBtn.click(function ()
        {
                $.ajax(
                    {
                        url:"getAllTeacher.ano",
                        data:{},
                        type:"post",
                        dataType:"json",
                        async:"true",
                        success:function (data)
                        {
                            console.log(data);
                            table.empty();
                            var tr1 = $("<tr>");
                            var th1=$('<th>').text("学号")
                            var th2 = $('<th>').text("身份");
                            var th3=$('<th>').text("姓名");
                            var th4=$('<th>').text("电话");
                            tr1.append(th1);
                            tr1.append(th2);
                            tr1.append(th3);
                            tr1.append(th4);
                            table.append(tr1);
                            for (let s=0;s<data.length;s++)
                            {
                                var tr2=$("<tr>");
                                var td1 = $('<td>').text(data[s].id);
                                var td2 = $('<td>').text(data[s].Root);
                                var td3=$('<td>').text(data[s].UserName);
                                var td4=$('<td>').text(data[s].tel);
                                tr2.append(td1);
                                tr2.append(td2);
                                tr2.append(td3);
                                tr2.append(td4);
                                table.append(tr2);
                            }
                            table.css(
                                {
                                    "width":"1080px",
                                    "margin-left": "10px",
                                    "color": "black",
                                    "border-right": "1px black solid",
                                    "position": "absolute",
                                    "left": "-10px",
                                    "top": "80px"
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
        })
        deleteBtn.click(function () {
                $.ajax(
                {
                    url: "getAllStudentAndTeacher.ano",
                    data: {},
                    type: "post",
                    dataType: "json",
                    async: "true",
                    success: function (data) {
                        $(".divz").remove();
                        console.log(data);
                        reslut=data;
                        zhuhanshu(0,10,reslut);
                        var divy=$("<div>").text("总计").append($("<input type='text' style='width: 15px' readonly />").attr("value",reslut.length).css({"background":"white"}));
                        divy.append("条数据");
                        var select=$('<select>');
                        var divnum=$("<div>").text("页数").append(select);
                        var divz=$('<div class="divz" style="position: absolute;top: 520px;">').append(divy).append(divnum);
                        $(".main3").append(divz);
                        for (var s=1;s<(reslut.length/10)+1;s++)
                        {
                            select.append($("<option>").text(s).attr("value",s-1));
                        }
                        select.change(function ()
                        {
                            console.log($(this).val());
                            $(".inputo").remove();
                            var start=10*$(this).val();
                            var end=10*$(this).val()+10;
                            zhuhanshu(start,end,reslut);
                        })
                    },
                    error: function () {
                        alert("获取消息失败请联系维护人员");
                    }
                }
            )

        })
        selectBtn.click(function ()
        {
            var porp=prompt("请输入需要查询的老师");
            if (porp.trim().length==0) {
                $.ajax(
                    {
                        url: "getAllTeacherAndTeacher.ano",
                        data: {},
                        type: "post",
                        dataType: "json",
                        async: "true",
                        success: function (data) {
                            $(".divz").remove();
                            console.log(data);
                            reslut=data;
                            zhuye(0,2,reslut);
                            var divy=$("<div>").text("总计").append($("<input type='text' style='width: 15px' readonly />").attr("value",reslut.length).css({"background":"white"}));
                            divy.append("条数据");
                            var select=$('<select>');
                            var divnum=$("<div>").text("页数").append(select);
                            var divz=$('<div class="divz" style="position: absolute;top: 580px;">').append(divy).append(divnum);
                            $(".main3").append(divz);
                            for (var s=1;s<(reslut.length/2)+1;s++)
                            {
                                select.append($("<option>").text(s).attr("value",s-1));
                            }
                            select.change(function ()
                            {
                                console.log($(this).val());
                                $(".inputo").remove();
                                var start=2*$(this).val();
                                var end=2*$(this).val()+2;
                                zhuye(start,end,reslut);
                            })
                        },
                        error: function () {
                            alert("获取消息失败请联系维护人员");
                        }
                    }
                )
            }
            else {
                $.ajax(
                    {
                        url:"getAllTeacherAndStudentById.ano",
                        data:{
                            "id":parseInt(porp.trim())
                        },
                        type:"post",
                        dataType:"json",
                        async:"true",
                        success:function (data)
                        {
                            console.log(data);
                            table.empty();
                            table1.empty();
                            var tr1 = $("<tr>");
                            var th1 = $('<th>').text("工号")
                            var th2 = $('<th>').text("身份");
                            var th3 = $('<th>').text("姓名");
                            var th4 = $('<th>').text("电话");
                            var th5=$('<th>').text("教师编号");
                            var th6 = $('<th>').text("教师姓名");
                            var th7 = $('<th>').text("身份");
                            tr1.append(th1);
                            tr1.append(th2);
                            tr1.append(th3);
                            tr1.append(th4);
                            tr1.append(th5);
                            tr1.append(th6);
                            tr1.append(th7);
                            table.append(tr1);
                            for (let s = 0; s < data.length; s++) {
                                var tr2 = $("<tr>");
                                var td1 = $('<td>').text(data[s].id);
                                var td2 = $('<td>').text(data[s].Root);
                                var td3 = $('<td>').text(data[s].UserName);
                                var td4 = $('<td>').text(data[s].tel);
                                var td5=$('<td>').text(data[s].tid);
                                var td6 = $('<td>');
                                var td7=$('<td>');
                                td6.text(data[s].teachers.UserName);
                                td7.text(data[s].teachers.Root);
                                tr2.append(td1);
                                tr2.append(td2);
                                tr2.append(td3);
                                tr2.append(td4);
                                tr2.append(td5);
                                tr2.append(td6);
                                tr2.append(td7);
                                table.append(tr2);
                            }
                            table.css(
                                {
                                    "width":"800px",
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



        })
    })
    function tableAndTdth ()
    {
        $("table").css(
            {
                "border-collapse": "collapse",
                "border-spacing": "0",
                "empty-cells": "show",
                "border": "1px solid #cbcbcb",
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