$(function ()
{
    var main3=$('.main3');
    var result;
    var table=$("<table style='font-family: verdana,arial,sans-serif; font-size:11px; color:#333333; border-width: 1px; border-color: #a9c6c9; border-collapse: collapse;margin-top: 10px;margin-left: 0px;position: relative; left: -8px;top: 20px;width:1080px;'>")
    var table1=$("<table style='font-family: verdana,arial,sans-serif; font-size:11px; color:#333333; border-width: 1px; border-color: #a9c6c9; border-collapse: collapse;'>");
    $($(".ul1>li")[7]).click(function ()
    {
        main3.empty();
        var span111=$("<span style='line-height:25px;width: 100px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("查看学生班级");
        $('.main3').append(span111);
        main3.append($("<br/>"));
        var div1 = $("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 500px; height: 70px; margin-left: 0px'>").text("班级ID（不输入默认查全部）:")
        var div3 = $("<div " +
            "style='border-radius: 10px 10px;" +
            "border: 1px aquamarine solid;width: 250px; height: 50px; margin-left: 170px;padding-top: 20px' class='div3'>")
        var addBtn = $("<input type='button' class='addBtn' value='查询学生班级信息'>");
        addBtn.css(
            {
                "width": "120px",
                "margin-left": "10px",
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
                "margin-bottom": "0px"
            })
        var labelId = $("<input type='text' class='labelId'>");
        labelId.css(
            {
                "margin": "10px 0px 20px 25px",
                "line-height": "30px",
                "background": "aliceblue",
                "border-radius": "50px",
                "padding-left": "40px",
                "width": "150px",
                "outline": "none"
            })
        div1.append(labelId);
        div1.append(addBtn);
        main3.append(div1);
        //main3.append(div3);
        addBtn.click(function ()
        {
           var cid=parseInt($('.labelId').val().trim());
           if ($('.labelId').val().trim().length==0)
           {
               $.ajax(
                   {
                       url: "getClassInStudentAll.ano",
                       data: {},
                       type: "post",
                       dataType: "json",
                       async: "true",
                       success: function (data) {
                           console.log(data);
                           result=data;
                           zhuhanshu(0,3,result);
                           var divy=$("<div>").text("总计").append($("<input type='text' style='width: 10px' readonly />").attr("value",result.length).css({"background":"white"}));
                           divy.append("条数据");
                           var select=$('<select>');
                           var divnum=$("<div>").text("页数").append(select);
                           var divz=$('<div class="divz" style="position: absolute;top: 520px;">').append(divy).append(divnum);
                           $(".main3").append(divz);
                           for (var s=1;s<(result.length/3)+1;s++)
                           {
                               select.append($("<option>").text(s).attr("value",s-1));
                           }
                           select.change(function ()
                           {
                               console.log($(this).val());
                               $(".inputo").remove();
                               var start=3*$(this).val();
                               var end=3*$(this).val()+3;
                               zhuhanshu(start,end,result);
                           })
                       },
                       error: function () {
                           alert("获取消息失败请联系维护人员");
                       }
                   }
               )
           }
           else
           {
               $.ajax(
                   {
                       url: "getClassInStudentById.ano",
                       data: {
                           "cid":cid
                       },
                       type: "post",
                       dataType: "json",
                       async: "true",
                       success: function (data) {
                           console.log(data);
                           table.empty();
                           table1.empty();
                           var tr1 = $("<tr>");
                           var th1 = $('<th>').text("班级名称");
                           var th2=$("<th>").text("学生信息");
                           tr1.append(th1);
                           tr1.append(th2);
                           table.append(tr1);
                           for (let s = 0; s < data.length; s++) {
                               var tr2 = $("<tr>");
                               var td1 = $('<td>').text(data[s].className);
                               var td5 = $('<td>');
                               table1 = $("<table style='position: relative;left: 10px;border-right:1px solid black;border-top:1px solid black; '>");
                               var tr3 = $("<tr>");
                               var th1 = $('<th>').text("学号")
                               var th2 = $('<th>').text("姓名");
                               var th3 = $('<th>').text("电话");
                               var th4 = $('<th>').text("宿舍号");
                               var th5 = $("<th>").text("班级编号");
                               tr3.append(th1);
                               tr3.append(th2);
                               tr3.append(th3);
                               tr3.append(th4);
                               tr3.append(th5);
                               table1.append(tr3);
                               for (let m = 0; m < data[s].students.length; m++) {
                                   var tr3 = $('<tr>');
                                   var td6 = $('<td>').text(data[s].students[m].id);
                                   var td7 = $('<td>').text(data[s].students[m].UserName);
                                   var td8 = $('<td>').text(data[s].students[m].tel);
                                   var td9= $('<td>').text(data[s].students[m].dorm_Num);
                                   var td10=$('<td>').text(data[s].students[m].cid);
                                   tr3.append(td6);
                                   tr3.append(td7);
                                   tr3.append(td8);
                                   tr3.append(td9);
                                   tr3.append(td10);
                                   table1.append(tr3);
                               }
                               td5.append(table1);
                               tr2.append(td1);
                               tr2.append(td5);
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
                       error: function () {
                           alert("获取消息失败请联系维护人员");
                       }
                   }
               )
           }
        })
        function zhuhanshu(start,end,result)
        {
            table.empty();
            table1.empty();
            var tr1 = $("<tr>");
            var th1 = $('<th>').text("班级名称");
            var th2=$("<th>").text("学生信息");
            tr1.append(th1);
            tr1.append(th2);
            table.append(tr1);
            if (end>result.length)
            {
                end=result.length;
            }
            for (let s = start; s < end; s++) {
                var tr2 = $("<tr>");
                var td1 = $('<td>').text(result[s].className);
                var td5 = $('<td>');
                table1 = $("<table style='position: relative;left: 10px;border-right:1px solid black;border-top:1px solid black;width: 900px  '>");
                var tr3 = $("<tr>");
                var th1 = $('<th>').text("学号")
                var th2 = $('<th>').text("姓名");
                var th3 = $('<th>').text("电话");
                var th4 = $('<th>').text("宿舍号");
                var th5 = $("<th>").text("班级编号");
                tr3.append(th1);
                tr3.append(th2);
                tr3.append(th3);
                tr3.append(th4);
                tr3.append(th5);
                table1.append(tr3);
                for (let m = 0; m < result[s].students.length; m++) {
                    var tr3 = $('<tr>');
                    var td6 = $('<td>').text(result[s].students[m].id);
                    var td7 = $('<td>').text(result[s].students[m].UserName);
                    var td8 = $('<td>').text(result[s].students[m].tel);
                    var td9= $('<td>').text(result[s].students[m].dorm_Num);
                    var td10=$('<td>').text(result[s].students[m].cid);
                    tr3.append(td6);
                    tr3.append(td7);
                    tr3.append(td8);
                    tr3.append(td9);
                    tr3.append(td10);
                    table1.append(tr3);
                }
                td5.append(table1);
                tr2.append(td1);
                tr2.append(td5);
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
        }
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