$(function ()
{
    var reslut;
    var main3=$(".main3");
    var table=$("<table style='border-top: 1px solid black'>")
    function zhuye(start,end,reslut)
    {
        table.empty();
        var tr1 = $("<tr>");
        var th1=$('<th>').text("课程id")
        var th2 = $('<th>').text("班级名称");
        var th3=$('<th>').text("课程名称");
        var th4=$('<th>').text("课程时间");
        var th5=$('<th>').text("实验室名称");
        var th6=$('<th>').text("老师姓名")
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
        for (let s=start;s<end;s++)
        {
            var tr2=$("<tr>");
            var td1 = $('<td>').text(reslut[s].courseId);
            var td2 = $('<td>').text(reslut[s].className);
            var td3=$('<td>').text(reslut[s].courseName);
            var td4=$('<td>').text(reslut[s].courseTime);
            var td5=$('<td>').text(reslut[s].labelName);
            var td6=$('<td>').text(reslut[s].UserName);
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
    $($(".ul1>li")[10]).click(function ()
    {
        main3.empty();
        var span111=$("<span style='line-height:25px;width: 75px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("课程表管理");
        $('.main3').append(span111);
        main3.append($("<br>"));
        main3.append($("<br>"));
        var div1=$("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 240px; height: 40px; margin-left: 10px'>").text("实验室编号:")
        var div2=$("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 230px; height: 40px; '>").html("课程名称:")
        var div3=$("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 240px; height: 40px; '>").html("授课教师ID:")
        var div4=$("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 350px; height: 40px; '>").html("班级ID(删除时为课程Id):")
        var div5=$("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 280px; height: 40px;margin-left: 10px; '>").html("上课时间:")
        var courseId=$("<input type='text' class='courseId' placeholder='课程编号'>");
        courseId.css(
            {
                "margin":"10px 0px 20px 10px",
                "line-height": "30px",
                "background":"aliceblue",
                "border-radius": "50px",
                "padding-left":"40px" ,
                "width": "100px",
                "outline": "none"
            })
        var courseName=$("<input type='text' class='courseName' placeholder='课程名称'>");
        courseName.css(
            {
                "margin":"10px 0px 20px 10px",
                "line-height": "30px",
                "background":"aliceblue",
                "border-radius": "50px",
                "padding-left":"40px" ,
                "width": "100px",
                "outline": "none"
            })
        var tid=$("<input type='text' class='tid' placeholder='授课老师ID'>");
        tid.css(
            {
                "margin":"10px 0px 20px 10px",
                "line-height": "30px",
                "background":"aliceblue",
                "border-radius": "50px",
                "padding-left":"40px" ,
                "width": "100px",
                "outline": "none"
            })
        var cid=$("<input type='text' class='cid' placeholder='班级编号'>");
        cid.css(
            {
                "margin":"10px 0px 20px 10px",
                "line-height": "30px",
                "background":"aliceblue",
                "border-radius": "50px",
                "padding-left":"40px" ,
                "width": "100px",
                "outline": "none"
            })
        var coursetime=$("<input type='text' class='cousetime' placeholder='格式为yyyy-mm-dd'>");
        coursetime.css(
            {
                "margin":"10px 0px 20px 10px",
                "line-height": "30px",
                "background":"aliceblue",
                "border-radius": "50px",
                "padding-left":"40px" ,
                "width": "150px",
                "outline": "none"
            })
        div1.append(courseId);
        div2.append(courseName);
        div3.append(tid);
        div4.append(cid);
        div5.append(coursetime)
        var div6=$("<div " +
            "style='border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 800px; height: 100px; margin-left: 0px;padding-top: 10px' class='div3'>")
        var addBtn=$("<input type='button' class='addBtn' value='新增课程'>");
        addBtn.css(
            {
                "width": "100px",
                "margin-left":"200px",
                "padding":"8px",
                "background-color": "#428bca",
                "border-color": "#357ebd",
                "color": "#fff",
                "margin-left":"10px",
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
        var deleteBtn=$("<input type='button' class='deleteBtn' value='删除课程'>");
        deleteBtn.css(
            {
                "width": "100px",
                "margin-left":"70px",
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
        var updateBtn=$("<input type='button' class='updateBtn' value='更新课程'>");
        updateBtn.css({
            "width": "100px",
            "margin-left":"70px",
            "padding":"8px",
            "background-color": "#428bca",
            "border-color": "#357ebd",
            "color": "#fff",
            "margin-left":"60px",
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
        var selectBtn=$("<input type='button' class='selectBtn' value='查询课程'>");
        selectBtn.css({
            "width": "100px",
            "margin-left":"70px",
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
        div6.append(addBtn);
        div6.append(deleteBtn);
        div6.append(updateBtn);
        div6.append(selectBtn);
        main3.append(div1);
        main3.append(div2);
        main3.append(div3);
        main3.append(div4);
        main3.append(div5);
        main3.append(div6);
selectBtn.click(function ()
{
    timeTableForRoot();
})
addBtn.click(function ()
{
    $.ajax(
        {
            url:"addTimeTable.ano",
            data: {
                "coursename":$(".courseName").val().trim(),
                "labelId":parseInt($('.courseId').val().trim()),
                "tid":parseInt($(".tid").val().trim()),
                "cid":parseInt($(".cid").val().trim()),
                "coursetime":$(".cousetime").val().trim()
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
                    timeTableForRoot();
                }
                else
                {
                    alert("增加失败，请联系维护人员");
                    timeTableForRoot();
                }
            }
            ,error:function ()
            {
                alert("新增失败，请补全剩下的信息")
            }
        }
    )
})
deleteBtn.click(function ()
{
    $.ajax(
        {
            url:"deleteTimeTable.ano",
            data: {
                "coursename":$(".courseName").val().trim(),
                "cid":parseInt($(".cid").val().trim()),
            },
            type:"get",
            dataType:"json",
            async:"true",
            success:function (data)
            {
                console.log(data)
                if (data==0)
                {
                    alert("删除失败，没有找到任何信息");
                    timeTableForRoot();
                }
                else
                {
                    alert("删除成功");
                    timeTableForRoot();
                }
            }
            ,error:function ()
            {
                alert("删除失败，请补全必填信息")
            }
        }
    )
})
updateBtn.click(function ()
{
    $.ajax(
        {
            url:"updateTimeTable.ano",
            data: {
                "coursename":$(".courseName").val().trim(),
                "labelId":parseInt($('.courseId').val().trim()),
                "tid":parseInt($(".tid").val().trim()),
                "cid":parseInt($(".cid").val().trim()),
                "coursetime":$(".cousetime").val().trim()
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
                    timeTableForRoot();
                }
                else
                {
                    alert("更新失败，请联系维护人员");
                    timeTableForRoot();
                }
            }
            ,error:function ()
            {
                alert("新增失败，请联系管理员")
            }
        }
    )
})
    function timeTableForRoot()
    {
        $.ajax(
            {
                url:"timeTableForRoot.ano",
                data:{},
                type:"post",
                dataType:"json",
                async:"true",
                success:function (data)
                {
                    reslut=data;
                    zhuye(0,9,reslut);
                    var divy=$("<div>").text("总计").append($("<input type='text' style='width: 15px' readonly />").attr("value",reslut.length).css({"background":"white"}));
                    divy.append("条数据");
                    var select=$('<select>');
                    var divnum=$("<div>").text("页数").append(select);
                    var divz=$('<div class="divz" style="position: absolute;top: 580px;">').append(divy).append(divnum);
                    $(".main3").append(divz);
                    for (var s=1;s<(reslut.length/9)+1;s++)
                    {
                        select.append($("<option>").text(s).attr("value",s-1));
                    }
                    select.change(function ()
                    {
                        console.log($(this).val());
                        $(".inputo").remove();
                        var start=9*$(this).val();
                        var end=9*$(this).val()+9;
                        zhuye(start,end,reslut);
                    })


                },
                error:function ()
                {
                    alert("获取消息失败请联系维护人员");
                }
            }
        )
    }
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
                "top": "165px"
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