$(function ()
{
    console.log( $($(".ul1>li")[12]))
    var main3=$(".main3");
    var table=$("<table style='margin-top: 10px;margin-left: 50px;position: relative; left: 40px;top: 20px;border-top:1px solid black'>")
    $($(".ul1>li")[11]).click(function () {
        main3.empty();
        var span111=$("<span style='line-height:25px;width: 75px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("实验室管理");
        $('.main3').append(span111);
        main3.append($("<br>"));
        main3.append($("<br>"));
        var div1 = $("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 1px aquamarine solid;width: 350px; height: 70px; margin-left: 10px'>").text("实验室编号:")
        var div2 = $("<div " +
            "style='display: inline-block;border-radius: 10px 10px;" +
            "border: 1px aquamarine solid;width: 350px; height: 70px; '>").html("实验室名称:")
        var labelId = $("<input type='text' placeholder='请输入实验室编号' class='labelId'>");
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
        var labelName = $("<input type='text' placeholder='请输入实验室名称' class='labelName'>");
        labelName.css(
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
        div2.append(labelName);
        var div3 = $("<div " +
            "style='border-radius: 10px 10px;" +
            "border: 0px aquamarine solid;width: 500px; height: 40px; margin-left: 0px;padding-top: 10px' class='div3'>")
        var addBtn = $("<input type='button' class='addBtn'  value='新增实验室'>");
        addBtn.css(
            {
                "width": "100px",
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
                "margin-bottom": "20px"
            })
        var deleteBtn = $("<input type='button' class='deleteBtn' value='删除实验室'>");
        deleteBtn.css(
            {
                "width": "100px",
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
        var selectBtn = $("<input type='button' class='selectBtn' value='查询实验室'>");
        selectBtn.css({
            "width": "100px",
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
        main3.append(div1);
        main3.append(div2);
        main3.append(div3);
        selectBtn.click(function ()
        {
            getLabelAll();
        })
        addBtn.click(function ()
        {
            $.ajax(
                {
                    url:"addLabel.ano",
                    data: {
                        "labelId": parseInt($(".labelId").val().trim()),
                        "labelName":$(".labelName").val().trim()
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
                            getLabelAll();
                        }
                        else
                        {
                            alert("增加失败，请重试");
                            getLabelAll();
                        }
                    }
                    ,error:function ()
                    {
                        alert("新增失败，请联系管理员")
                    }
                }
            )
        })
        selectBtn.click(function ()
        {
            getLabelAll();
        })
        deleteBtn.click(function ()
        {
            $.ajax(
                {
                    url:"deleteLabel.ano",
                    data: {
                        "labelId": parseInt($(".labelId").val().trim()),
                        "labelName":$(".labelName").val().trim()
                    },
                    type:"get",
                    dataType:"json",
                    async:"true",
                    success:function (data)
                    {
                        console.log(data)
                        if (data==1)
                        {
                            alert("删除成功")
                            getLabelAll();
                        }
                        else
                        {
                            alert("删除失败，请重试");
                            getLabelAll();
                        }
                    }
                    ,error:function ()
                    {
                        alert("删除失败，请联系管理员")
                    }
                }
            )
        })
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
                    let tr1 = $("<tr>");
                    var th1 = $('<th>').text("实验室ID");
                    var th2 = $('<th>').text("实验室名字");
                    var th3 = $('<th>').text("班级名称");
                    var th4 = $('<th>').text("教师编号/实验室状态");
                    tr1.append(th1);
                    tr1.append(th2);
                    tr1.append(th3);
                    tr1.append(th4);
                    table.append(tr1);
                    for (let i = 0; i < data.length; i++) {
                        var tr2 = $('<tr>');
                        var td1 = $('<td>').text(data[i].labelId);
                        var td2 = $('<td>').text(data[i].labelName);
                        var td3 = $('<td>').text(data[i].className1);
                        var td4 = $('<td>');
                        if (data[i].cid == "999") {
                            td4.css(
                                {
                                    "background": "yellow"
                                }
                            )
                        } else if (data[i].cid == "0") {
                            td4.css(
                                {
                                    "background": "aliceblue"
                                }
                            )
                        } else if (data[i].cid=="100"){
                            td4.css(
                                {
                                    "background": "darkslateblue"
                                })
                        }
                        else
                        {
                            td4.text(data[i].cid);
                            td4.css(
                                {
                                    "background": "red"
                                }
                            )
                        }
                        tr2.append(td1);
                        tr2.append(td2);
                        tr2.append(td3);
                        tr2.append(td4);
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
                "top": "160px"
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