$(function ()
    {
        $($(".ul1>li")[0]).click(function ()
        {
            $.ajax(
                {
                    url:'LabelStatusAll.ano',
                    data:{},
                    type:'post',
                    async:true,
                    dataType:"json",
                    success:function (data)
                    {
                        console.log(data);
                        $('.main3').empty();
                        var div1=$("<div>");
                        var span111=$("<span style='line-height:25px;width: 120px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
                        span111.text("实验室状态查询");
                        $('.main3').append(span111);
                        div1.append($("<div style='width: 200px; margin-top: 20px; margin-left:200px;height: 20px;background: yellow; display: inline-block'>").text("校外人员使用中"));
                        div1.append($("<div style='width: 200px;margin-left:200px;height: 20px;background: red'>").text("教学使用中"));
                        div1.append($("<div style='width: 200px;margin-left:200px;height: 20px;background: aliceblue'>").text("无人使用"));
                        div1.append($("<div style='width: 200px;margin-left:200px;height: 20px;background: darkslateblue'>").text("维护中"));
                        var table1=$('<table>');
                        let tr1=$("<tr>");
                        var th1=$('<th>').text("实验室ID");
                        var th2=$('<th>').text("实验室名字");
                        var th3=$('<th>').text("班级名称");
                        var th4=$('<th>').text("教师编号/实验室状态");
                        tr1.append(th1);
                        tr1.append(th2);
                        tr1.append(th3);
                        tr1.append(th4);
                        table1.append(tr1);
                        for(let i=0;i<data.length;i++)
                        {
                            var tr2=$('<tr>');
                            var td1=$('<td>').text(data[i].labelId);
                            var td2=$('<td>').text(data[i].labelName);
                            var td3=$('<td>').text(data[i].className1);
                            var td4=$('<td>');
                            if(data[i].cid=="999")
                            {
                                td4.css(
                                    {

                                    }
                                )
                                td4.text("校外人员实验中");
                            }
                            else if(data[i].cid=="0") {
                                td4.css(
                                    {
                                    }
                                )
                                td4.text("无人使用");
                            }
                            else if (data[i].cid=="100"){
                                td4.css(
                                    {
                                    })
                                td4.text("实验室维护中");
                            }
                            else
                            {
                                td4.text("教学使用中");
                                td4.css(
                                    {
                                    }
                                )
                            }
                            tr2.append(td1);
                            tr2.append(td2);
                            tr2.append(td3);
                            tr2.append(td4);
                            table1.append(tr2);
                        }
                        table1.css(
                            {
                                "margin-left":"10px",
                                "color":"black",
                                "border-right":"1px black solid"
                                ,"border-top":"1px solid black"
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
                        var input7= $("<input type='text' class='teacherTxt2' placeholder='请输入实验室ID'>")
                        input7.css(
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
                        var input8= $("<input type='button' class='but1' value='查询'>");
                        input8.css(
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
                        $('.main3').append(input7);
                        $('.main3').append(input8);
                        input8.click(function ()
                        {
                            table1.empty();
                            $.ajax(
                                {
                                    url:'LabelStatusById.ano',
                                    data:{
                                        "labelId":parseInt($(".teacherTxt2").val())
                                    },
                                    type:'post',
                                    async:true,
                                    dataType:"json",
                                    success:function (data)
                                    {
                                        console.log(data);

                                        table1.empty();
                                        let tr1=$("<tr>");
                                        var th1=$('<th>').text("实验室ID");
                                        var th2=$('<th>').text("实验室名字");
                                        var th4=$('<th>').text("教师编号/实验室状态");
                                        tr1.append(th1);
                                        tr1.append(th2);
                                        tr1.append(th4);
                                        table1.append(tr1);
                                        var tr2=$('<tr>');
                                        var td1=$('<td>').text(data.labelId);
                                        var td2=$('<td>').text(data.labelName);
                                        var td3=$('<td>');
                                        tr2.append(td1);
                                        tr2.append(td2);
                                        tr2.append(td3);
                                        table1.append(tr2);
                                        if(data.cid=="999")
                                        {
                                            td3.css(
                                                {

                                                }
                                            )
                                            td3.text("校外人员实验中");
                                        }
                                        else if(data.cid=="0") {
                                            td3.css(
                                                {
                                                }
                                            )
                                            td3.text("无人使用");
                                        }
                                        else if (data.cid=="100"){
                                            td3.css(
                                                {
                                                })
                                            td3.text("实验室维护中");
                                        }
                                        else
                                        {
                                            td3.text("教学使用中");
                                            td3.css(
                                                {
                                                }
                                            )
                                        }

                                        table1.css(
                                            {
                                                "margin-left":"10px",
                                                "color":"black",
                                                "border-right":"1px black solid"
                                                ,"border-top":"1px solid black"
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
    }
)