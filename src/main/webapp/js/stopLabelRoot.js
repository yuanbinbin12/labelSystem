$(function ()
{
    var table1 = $('<table style="border-top: 1px solid black">');
    var div2 = $("<div style='margin-top: 70px'>");

    $($(".ul1>li")[4]).click(function ()
    {
        $('.main3').empty();
        var span111=$("<span style='line-height:25px;width: 70px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("学生查询");
        $('.main3').append(span111);
        var div1=$("<div style='width: 450px;margin-left:0px;height: 100px;'>");
        var useCid1=$("<input type='text' class='useCid1' placeholder='完成维护的实验室编号'>")
        useCid1.css(
            {
                "margin":"40px 0px 20px 0px",
                "line-height": "30px",
                "background":"aliceblue",
                "border-radius": "50px",
                "padding-left":"10px" ,
                "width": "150px",
                "outline": "none"
            }
        )
        div1.append(useCid1);
        var btn=$("<input type='button' class='but1' value='维护完成'>")
        btn.css(
            {
                "width": "100px",
                "margin-left":"85px",
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
        div1.append(btn);
        $('.main3').append(div1);
        btn.click(function ()
        {
            $.ajax({
                url: "LabelStatusById.ano",
                data: (
                    {
                        "labelId": $(".useCid1").val()
                    }
                )
                ,
                type: 'post',
                async: true,
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    if(data.cid=="0")
                    {
                        alert("实验室没有被使用不需要，维护完成，如需使用请前往使用页面")
                    }
                    else if (data.cid=="999")
                    {
                        alert("校外人员正在使用，你没有不能停止用别人的实验室");
                    }
                    else
                    {
                        alert("确认"+data.labelId+"号实验室维护完成了嘛？");
                        $.ajax(
                            {
                                url:'StopLabelStatus.ano',
                                data:{
                                    "labelId": $(".useCid1").val()
                                },
                                type:'post',
                                async:true,
                                dataType:"json",
                                success:function (data)
                                {
                                    console.log(data);
                                    {
                                        if (data=="1")
                                            $.ajax(
                                                {
                                                    url: 'LabelStatusAll.ano',
                                                    data: {},
                                                    type: 'post',
                                                    async: true,
                                                    dataType: "json",
                                                    success: function (data) {
                                                        div2.empty();
                                                        div2.append($("<div style='width: 200px; margin-top: 20px; margin-left:200px;height: 20px;background: yellow; display: inline-block'>").text("校外人员使用中"));
                                                        div2.append($("<div style='width: 200px;margin-left:200px;height: 20px;background: red'>").text("教学使用中"));
                                                        div2.append($("<div style='width: 200px;margin-left:200px;height: 20px;background: aliceblue'>").text("无人使用"));
                                                        div2.append($("<div style='width: 200px;margin-left:200px;height: 20px;background: darkslateblue'>").text("维护中"));
                                                        table1.empty();
                                                        let tr1 = $("<tr>");
                                                        var th1 = $('<th>').text("实验室ID");
                                                        var th2 = $('<th>').text("实验室名字");
                                                        var th3 = $('<th>').text("班级名称");
                                                        var th4 = $('<th>').text("教师编号/实验室状态");
                                                        tr1.append(th1);
                                                        tr1.append(th2);
                                                        tr1.append(th3);
                                                        tr1.append(th4);
                                                        table1.append(tr1);
                                                        for (let i = 0; i < data.length; i++) {
                                                            var tr2 = $('<tr>');
                                                            var td1 = $('<td>').text(data[i].labelId);
                                                            var td2 = $('<td>').text(data[i].labelName);
                                                            var td3 = $('<td>').text(data[i].className1);
                                                            var td4 = $('<td>').text(data[i].cid);
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
                                                                "margin-left": "10px",
                                                                "color": "black",
                                                                "border-right": "1px black solid"
                                                            }
                                                        )
                                                        $('.main3').append(table1);
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
                                        else
                                        {
                                            alert("停用失败请联系维护人员");
                                        }
                                    }
                                    tableAndTdth();
                                }
                            }
                        )
                    }
                    tableAndTdth();
                }

            })
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