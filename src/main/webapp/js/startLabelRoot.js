$(function ()
{
    var table1 = $('<table style="border-top: 1px solid black">');
    var div2=$("<div style='width: 500px;margin-left:10px;height: 100px;'>");
    var div1 = $("<div style='margin-top:100px '>");
    $($(".ul1>li")[3]).click(function ()
    {
        $('.main3').empty();
        div2.empty();
        var labelId1= $("<input type='text' class='labelId1' placeholder='需要维护的实验室ID'>")
        labelId1.css(
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
        var span111=$("<span style='line-height:25px;width: 120px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("实验室状态查询");
        div2.append(span111);
        div2.append(labelId1);
        var btn=$("<input type='button' class='but1' value='开始维护'>")
        btn.css(
            {
                "width": "100px",
                "margin-left":"60px",
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
        div2.append(btn);
        getAllLabel();
        $('.main3').append(div2);
        btn.click(function ()
        {
            $.ajax(
                {
                    url:"LabelStatusById.ano",
                    data:(
                        {
                            "labelId":$(".labelId1").val()
                        }
                    )
                    ,
                    type:'post',
                    async:true,
                    dataType:"json",
                    success:function (data)
                    {
                        if (data.cid==0)
                        {
                            $.ajax(
                                {
                                    url:'startLabelRoot.ano',
                                    data:{
                                        "labelId":parseInt($('.labelId1').val())
                                    },
                                    type:'post',
                                    async:true,
                                    dataType:"json",
                                    success:function (data)
                                    {
                                        console.log(data);
                                        {
                                            if (data=="1")
                                            {
                                                getAllLabel();
                                            }
                                            else
                                            {
                                                alert("修改失败，请重试");
                                            }
                                        }
                                    }
                                }
                            )
                        }
                        else
                        {
                            alert("实验室使用中，无法维护");
                        }
                        tableAndTdth();
                    }
                }
            )
        })
    })
function getAllLabel() {
    $.ajax(
        {
            url: 'LabelStatusAll.ano',
            data: {},
            type: 'post',
            async: true,
            dataType: "json",
            success: function (data) {
                table1.empty();
                $(".main3").append($("<br/>"));
                div1.empty();
                div1.append($("<div style='width: 200px; margin-top: 20px; margin-left:200px;height: 20px;background: yellow; display: inline-block'>").text("校外人员使用中"));
                div1.append($("<div style='width: 200px;margin-left:200px;height: 20px;background: red'>").text("教学使用中"));
                div1.append($("<div style='width: 200px;margin-left:200px;height: 20px;background: aliceblue'>").text("无人使用"));
                div1.append($("<div style='width: 200px;margin-left:200px;height: 20px;background: darkslateblue'>").text("维护中"));
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
                    var td4 = $('<td>');
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
                        "padding": "10px 20px 0px 40px"
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