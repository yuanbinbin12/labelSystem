$(function ()
{
    console.log($(".ul1>li"));
    var table1=$('<table>');
    var result=null;
    $($(".ul1>li")[0]).on("click",function ()
    {
        $('.main3').empty();
        $.ajax(
            {
                url:'getAllStudent.ano',
                data:{},
                type:'post',
                async:true,
                dataType:"json",
                success:function (data)
                {
                    result=data;
                    console.log(result);

                    fenye(result,10,0);
                    var divy=$("<div>").text("总计").append($("<input type='text' style='width: 15px' readonly />").attr("value",result.length).css({"background":"white"}));
                    divy.append("条数据");
                    var select=$('<select>');
                    var divnum=$("<div>").text("页数").append(select);
                    var divz=$('<div class="divz" style="position: absolute;top: 500px;">').append(divy).append(divnum);
                    $(".main3").append(divz);
                    for (var s=1;s<(result.length/10)+1;s++)
                    {
                        select.append($("<option>").text(s).attr("value",s-1));
                    }
                    select.change(function ()
                    {
                        console.log($(this).val());
                        $(".inputo").remove();
                        fenye(result,10,$(this).val());
                    })
                },error :function ()
                {
                    alert("111111");
                }

            }
        )
    });
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
                "top": "80px",
                "color":"black"
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
                "color":"black"
            }
        )
    }
    function zhuhanshu(data,stat,end,page)
    {
        console.log(data);
        $('.main3').append(table1);
        var span111=$("<span class='inputo' style='line-height:25px;width: 70px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("学生查询");
        table1.empty();
        $('.main3').append(span111);
        let tr1=$("<tr>");
        var th1=$('<th>').text("学号");
        var th2=$('<th>').text("身份");
        var th3=$('<th>').text("名字");
        var th4=$('<th>').text("教师编号");
        var th5=$('<th>').text("班级编号");
        var th6=$('<th>').text("电话");
        var th7=$('<th>').text("宿舍号");
        tr1.append(th1);
        tr1.append(th2);
        tr1.append(th3);
        tr1.append(th4);
        tr1.append(th5);
        tr1.append(th6);
        tr1.append(th7);
        table1.append(tr1);
        if (end>result.length)
        {
            end=result.length;
        }
        for(let i=stat;i<end;i++)
        {
            var tr2=$('<tr>');
            var td1=$('<td>').text(data[i].id);
            var td2=$('<td>').text(data[i].Root);
            var td3=$('<td>').text(data[i].UserName);
            var td4=$('<td>').text(data[i].cid);
            var td5=$('<td>').text(data[i].tid);
            var td6=$('<td>').text(data[i].tel);
            var td7=$('<td>').text(data[i].dorm_Num);
            tr2.append(td1);
            tr2.append(td2);
            tr2.append(td3);
            tr2.append(td4);
            tr2.append(td5);
            tr2.append(td6);
            tr2.append(td7);
            table1.append(tr2);
            var tr3=$('<tr>');
        }
        table1.append(tr3);
        table1.css(
            {
                "margin-left":"10px",
                "color":"black",
                "border-right":"1px black solid",
                "border-top":"1px solid black"
            }
        )
        $('td').css(
            {
                "color":"black",
                "border-left": "1px black solid",
                "border-bottom": "1px black solid",
                "margin":"0 auto",
                "padding":"5px 20px 0px 20px"
            }
        )
        var input5= $("<input class='inputo teacherTxt2' type='text' placeholder='请输入教师ID'>")
        input5.css(
            {
                "margin":"40px 0px 20px 20px",
                "line-height": "30px",
                "background":"aliceblue",
                "border-radius": "50px",
                "padding-left":"20px" ,
                "width": "150px",
                "outline": "none"
            }
        )
        var input6= $("<input class='inputo' type='button' class='but1' value='查询'>");
        input6.css(
            {
                "width": "100px",
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
                "font-size":"70%"
            }
        )
        $('.main3').append(input5);
        $('.main3').append(input6);
        input6.click(function ()
        {
            table1.empty();
            $.ajax(
                {
                    url:'getStudentById.ano',
                    data:{
                        "id":parseInt($(".teacherTxt2").val())
                    },
                    type:'post',
                    async:true,
                    dataType:"json",
                    success:function (data)
                    {
                        console.log(data);
                        table1.empty();
                        $(".divz").remove();
                        let tr1=$("<tr>");
                        var th1=$('<th>').text("学号");
                        var th2=$('<th>').text("身份");
                        var th3=$('<th>').text("名字");
                        var th4=$('<th>').text("班级编号");
                        var th5=$('<th>').text("教师编号");
                        var th6=$('<th>').text("电话");
                        var th7=$('<th>').text("教师姓名");
                        tr1.append(th1);
                        tr1.append(th2);
                        tr1.append(th3);
                        tr1.append(th4);
                        tr1.append(th5);
                        tr1.append(th6);
                        tr1.append(th7);
                        table1.append(tr1);
                        if (data.length==0)
                        {
                            table1.empty();
                            table1.append($("<div>").text("没有查到任何数据请重新输入"));
                        }
                        else
                        {
                            for(let i=0;i<data.length;i++)
                            {
                                var tr2=$('<tr>');
                                var td1=$('<td>').text(data[i].id);
                                var td2=$('<td>').text(data[i].Root);
                                var td3=$('<td>').text(data[i].UserName);
                                var td4=$('<td>').text(data[i].cid);
                                var td5=$('<td>').text(data[i].tid);
                                var td6=$('<td>').text(data[i].tel);
                                var td7=$('<td>').text(data[i].teachers.UserName);
                                tr2.append(td1);
                                tr2.append(td2);
                                tr2.append(td3);
                                tr2.append(td4);
                                tr2.append(td5);
                                tr2.append(td6);
                                tr2.append(td7);
                                table1.append(tr2);
                            }
                        }
                        table1.css(
                            {
                                "margin-left":"10px",
                                "color":"black",
                                "border-right":"1px black solid",
                                "border-top":"1px solid black"
                            }
                        )
                        $('.main3').append(table1);
                        $('td').css(
                            {
                                "color":"black",
                                "border-left": "1px black solid",
                                "border-bottom": "1px black solid",
                                "margin":"0 auto",
                                "padding":"5px 20px 0px 20px"
                            }
                        )
                        tableAndTdth();
                    },

                }
            )

        })
        tableAndTdth();
    }
    function fenye(result,page,pageNum)/*结果集，每页数量，第几页*/
    {
        var start=page*pageNum;
        var end=page*pageNum+page;
        zhuhanshu(result,start,end,page);
    }
})
$(function ()
{
    $($(".ul1>li")[1]).on("click",function ()
    {
        var table1=$('<table>');
        $('.main3').empty();
        var span111=$("<span style='line-height:25px;width: 70px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("课表查询");
        $('.main3').append(span111);
        $('.main3').css(
            {

            }
        )
        var input1= $("<input type='text' class='teacherTxt1' placeholder='请输入查询你的工号'>")
        input1.css(
            {
                "margin":"40px 0px 20px 200px",
                "line-height": "30px",
                "background":"aliceblue",
        "border-radius": "50px",
        "padding-left":"40px" ,
        "width": "150px",
        "outline": "none"
            }
        )
        var input2= $("<input type='button' class='but1' value='查询'>");
        input2.css(
            {
        "width": "100px",
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
        "font-size":"70%"
    }
        )
        $('.main3').append(input1);
        $('.main3').append(input2);
        input2.click( function()
        {
            let val=parseInt($('.teacherTxt1').val());
            $.ajax(
                {
                    url:'timeTableForTeacher.ano',
                    data:{
                        "tid":val
                    },
                    type:'post',
                    async:true,
                    dataType:"json",
                    success:function (data)
                    {
                        console.log(data);

                        table1.empty();
                        let tr1=$("<tr>");
                        var th1=$('<th>').text("课程编号");
                        var th2=$('<th>').text("课程名称");
                        var th3=$('<th>').text("实验室名称");
                        var th4=$('<th>').text("课程时间");
                        var th5=$('<th>').text("学院");
                        tr1.append(th1);
                        tr1.append(th2);
                        tr1.append(th3);
                        tr1.append(th4);
                        tr1.append(th5);
                        table1.append(tr1);
                        for(let i=0;i<data.length;i++)
                        {
                            var tr2=$('<tr>');
                            var td1=$('<td>').text(data[i].courseId);
                            var td2=$('<td>').text(data[i].courseName);
                            var td3=$('<td>').text(data[i].labelName);
                            var td4=$('<td>').text(data[i].courseTime);
                            var td5=$('<td>').text(data[i].className);
                            tr2.append(td1);
                            tr2.append(td2);
                            tr2.append(td3);
                            tr2.append(td4);
                            tr2.append(td5);
                            table1.append(tr2);
                        }
                        table1.css(
                            {
                                "margin-left":"10px",
                                "color":"black",
                                "border-right":"1px black solid"
                            }
                        )
                        $('.main3').append(table1);
                        $('td').css(
                            {
                                "color":"black",
                                "border-left": "1px black solid",
                                "border-bottom": "1px black solid",
                                "margin":"0 auto",
                                "padding":"5px 20px 0px 20px"
                            }
                        )
tableAndTdth();
                    },
                    error:function ()
                    {
                        alert("1111");
                    }
                }
            )
        })

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
                "top": "80px"
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
