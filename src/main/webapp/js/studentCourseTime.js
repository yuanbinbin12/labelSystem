$(function ()
{
    var table1=$('<table>');
    $($(".ul1>li")[0]).on("click",function ()
    {
        $('.main3').empty();
        var span111=$("<span style='line-height:25px;width: 120px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("课表查询");
        $('.main3').append(span111);
        $('.main3').css(
            {

            }
        )
        var input1= $("<input type='text' class='teacherTxt1' placeholder='请输入班级ID'>")
        input1.css(
            {
                "margin":"40px 0px 20px 10px",
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
                    url:'getTableForStudent.ano',
                    data:{
                        "cid":val
                    },
                    type:'post',
                    async:true,
                    dataType:"json",
                    success:function (data)
                    {
                        table1.empty();
                        console.log(data);
                        let tr1=$("<tr>");
                        var th1=$('<th>').text("课程编号");
                        var th2=$('<th>').text("课程名称");
                        var th3=$('<th>').text("实验室名称");
                        var th4=$('<th>').text("课程时间");
                        var th5=$('<th>').text("学院");
                        var th6=$('<th>').text("授课老师");
                        tr1.append(th1);
                        tr1.append(th2);
                        tr1.append(th3);
                        tr1.append(th4);
                        tr1.append(th5);
                        tr1.append(th6);
                        table1.append(tr1);
                        for(let i=0;i<data.length;i++)
                        {
                            var tr2=$('<tr>');
                            var td1=$('<td>').text(data[i].courseId);
                            var td2=$('<td>').text(data[i].courseName);
                            var td3=$('<td>').text(data[i].labelName);
                            var td4=$('<td>').text(data[i].courseTime);
                            var td5=$('<td>').text(data[i].className);
                            var td6=$('<td>').text(data[i].UserName);
                            tr2.append(td1);
                            tr2.append(td2);
                            tr2.append(td3);
                            tr2.append(td4);
                            tr2.append(td5);
                            tr2.append(td6);
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
                        alert("查询失败");
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