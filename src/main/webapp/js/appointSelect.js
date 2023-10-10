$(function ()
{
    console.log( $($(".ul1>li")[12]))
    var main3=$(".main3");
    var table1=$("<table style='margin-top: 10px;margin-left: 0px;border-top:1px solid black'>")
    $($(".ul1>li")[12]).click(function () {
        main3.empty();
        var span111=$("<span style='line-height:25px;width: 75px;height: 25px;font-size: 15px;font-weight: 500;border-bottom: 1px #999999 solid;float: left;'>");
        span111.text("课程表管理");
        $('.main3').append(span111);
        main3.append($("<br>"));
        main3.append($("<br>"));
        var passAppoint=$("<input type='button' value='待审核'>");
        passAppoint.click(function (){
            appointAdvice("0");
        })
        passAppoint.css(
            {
                "padding-right":"20px",
                "padding-left":"20px"
            }
        )
        var passedAppoint=$("<input type='button' value='已审核'>");
        passedAppoint.click(function (){
            appointAdvice("1");
        })
        passedAppoint.css(
            {
                "padding-right":"20px",
                "padding-left":"20px"
            }
        )
        var disPassAppoint=$("<input type='button' value='不通过'>");
        disPassAppoint.click(function (){
            appointAdvice("2");
        })
        disPassAppoint.css(
            {
                "padding-right":"20px",
                "padding-left":"20px"
            }
        )
        var disPassDouble=$("<input type='button' value='复审通过'>");
        disPassDouble.click(function (){
            appointAdvice("3");
        })
        disPassDouble.css(
            {
                "padding-right":"20px",
                "padding-left":"20px"
            }
        )
            main3.append(passAppoint);
           main3.append(passedAppoint);
           main3.append(disPassAppoint);
           main3.append(disPassDouble);
           appointAdviceAll();
    })
    function appointAdviceAll()
    {
        $.ajax(
            {
                url:"selectLabAppoint.ano",
                data:{
                    "UserName":"",
                    "UserType":""
                },
                type:"post",
                async:"true",
                dataType:"json",
                success:function (data) {
                    console.log(data);
                    table1.empty();
                    let tr1 = $("<tr>");
                    var th1 = $('<th>').text("实验室名称");
                    var th2 = $('<th>').text("开始时间");
                    var th3 = $('<th>').text("结束时间");
                    var th4 = $('<th>').text("审核状态");
                    var th5=$('<th>').text("审核意见");
                    var th6=$('<th>').text("用户类型");
                    tr1.append(th1);
                    tr1.append(th2);
                    tr1.append(th3);
                    tr1.append(th6);
                    tr1.append(th4);
                    tr1.append(th5);
                    table1.append(tr1);
                    for (let p = 0; p < data.length; p++) {
                        var tr2 = $('<tr>');
                        var td1 = $('<td>').text(data[p].labName);
                        var td2 = $('<td>').text(data[p].startTime);
                        var td3 = $('<td>').text(data[p].endTime);
                        var td4 = $('<td>');
                        var td5=$("<td>");
                        var td6=$('<td>');
                        if (data[p].state=="0")
                        {
                            td4.text("等待审核");
                            td4.css(
                                {
                                    "background":"yellow"
                                }
                            )
                            td5.text("等待审核");
                        }
                        else if (data[p].state=="1")
                        {
                            td4.text("审核通过");
                            td4.css(
                                {
                                    "background":"green"
                                }
                            )
                            td5.text(data[p].advice);
                        }
                        else if (data[p].state=="2")
                        {
                            td4.text("审核未通过");
                            td4.css(
                                {
                                    "background":"red"
                                }
                            )
                            td5.text(data[p].advice);
                        }
                        else if(data[p].state=="3") {
                            td4.text("复审通过");
                            td4.css(
                                {
                                    "background": "orange"
                                }
                            )
                            td5.text(data[p].advice);
                        }
                        if (data[p].UserType=="999")
                        {
                            td6.text("校外人员");
                        }
                        else
                        {
                            td6.text("学生");
                        }
                        tr2.append(td1);
                        tr2.append(td2);
                        tr2.append(td3);
                        tr2.append(td6);
                        tr2.append(td4);
                        tr2.append(td5);
                        table1.append(tr2);
                    }
                    main3.append(table1);
                    tableAndTdth();
                    table1.css(
                        {
                            "position":"absolute",
                            "left":"0px",
                            "top":"80px"
                        }
                    )

                }
            }
        )
    }
    function appointAdvice (state){
        $.ajax(
            {
                url:"selectLabAppoint.ano",
                data:{
                    "UserName":"",
                    "UserType":""
                },
                type:"post",
                async:"true",
                dataType:"json",
                success:function (data) {
                    console.log(data);
                    table1.empty();
                    let tr1 = $("<tr>");
                    var th1 = $('<th>').text("实验室名称");
                    var th2 = $('<th>').text("开始时间");
                    var th3 = $('<th>').text("结束时间");
                    var th7=$('<th>').text("用户类型");
                    var th4 = $('<th>').text("审核状态");
                    var th5=$('<th>').text("审核意见");
                    var th6=$('<th>').text("操作");
                    tr1.append(th1);
                    tr1.append(th2);
                    tr1.append(th3);
                    tr1.append(th7);
                    tr1.append(th4);
                    tr1.append(th5);
                    tr1.append(th6);
                    table1.append(tr1);
                    for (let p = 0; p < data.length; p++) {
                        if (data[p].state== state)
                        {
                            var tr2 = $('<tr>');
                            var td1 = $('<td>').text(data[p].labName);
                            var td2 = $('<td>').text(data[p].startTime);
                            var td3 = $('<td>').text(data[p].endTime);
                            var td7=$("<td>");
                            var td4 = $('<td>');
                            var td5=$("<td>");
                            var td6=$("<td>");
                            if (data[p].UserType=="999")
                            {
                                td7.text("校外人员");
                            }
                            else
                            {
                                td7.text("学生");
                            }
                            if (data[p].state=="0")
                            {
                                td4.text("等待审核");
                                td4.css(
                                    {
                                        "background":"yellow"
                                    }
                                )
                                if (state=="0")
                                {
                                    var input1 =$("<textarea style='outline: none;width: 200px;height: 100px;font-size:11px;'>");
                                    input1.text(data[p].advice);
                                    td5.append(input1);
                                    var pass=$("<input type='button' value='通过'>");
                                    pass.attr("appointId",data[p].ID);
                                    pass.click(function (){
                                        console.log($(this).parents("tr").children("td").children("textarea").val());
                                        passObj($(this).attr("appointId"),"1",$(this).parents("tr").children("td").children("textarea").val(),"0");
                                    })
                                    var disPass=$("<input type='button' value='不通过'>");
                                    disPass.attr("appointId",data[p].ID);
                                    disPass.click(function (){
                                        console.log($(this).parents("tr").children("td").children("textarea").val());
                                        passObj($(this).attr("appointId"),"2",$(this).parents("tr").children("td").children("textarea").val(),"0");
                                    })
                                    td6.append(pass);
                                    td6.append(disPass);
                                    button(pass);
                                    button(disPass);
                                }
                                else
                                {
                                    td5.text("等待审核");
                                }
                            }
                            else if (data[p].state=="1")
                            {
                                td4.text("审核通过");
                                td4.css(
                                    {
                                        "background":"green"
                                    }
                                )
                                if (state=="1")
                                {
                                    var input1 =$("<textarea style='outline: none;width: 200px;height: 100px;font-size: 11px;'>");
                                    input1.text(data[p].advice);
                                    td5.append(input1);
                                    var disPass=$("<input type='button' value='复审驳回'>");
                                    var updateAdvice=$('<input type="button" value="修改审核意见">');
                                    disPass.attr("appointId",data[p].ID);
                                    updateAdvice.attr("appointId",data[p].ID);
                                    disPass.click(function (){
                                        console.log($(this).parents("tr").children("td").children("textarea").val());
                                        passObj($(this).attr("appointId"),"2",$(this).parents("tr").children("td").children("textarea").val(),"1");
                                    })
                                    updateAdvice.click(function (){
                                        console.log($(this).parents("tr").children("td").children("textarea").val());
                                        passObj($(this).attr("appointId"),"1",$(this).parents("tr").children("td").children("textarea").val(),"1");
                                    })
                                    td6.append(disPass);
                                    td6.append(updateAdvice);
                                    button(disPass);
                                    button(updateAdvice);
                                }
                                else
                                {
                                    td5.text(data[p].advice);
                                }

                            }
                            else if (data[p].state=="2")
                            {
                                td4.text("审核未通过");
                                td4.css(
                                    {
                                        "background":"red"
                                    }
                                )
                                if (state=="2")
                                {
                                    var input1 =$("<textarea style='outline: none;width: 200px;height: 100px;font-size: 11px;'>");
                                    input1.text(data[p].advice);
                                    td5.append(input1);
                                    var PassIn=$("<input type='button' value='复审通过'>");
                                    PassIn.attr("appointId",data[p].ID);
                                    PassIn.click(function (){
                                        console.log($(this).parents("tr").children("td").children("textarea").val());
                                        passObj($(this).attr("appointId"),"3",$(this).parents("tr").children("td").children("textarea").val(),"2");
                                    })
                                    td6.append(PassIn);
                                    button(PassIn);
                                }
                                else
                                {
                                    td5.text(data[p].advice);
                                }
                            }
                            else if(data[p].state=="3")
                            {
                                td4.text("复审通过");
                                td4.css(
                                    {
                                        "background":"orange"
                                    }
                                )
                                if (state=="3") {
                                    var input1 = $("<textarea style='outline: none;width: 200px;height: 100px;font-size: 11px;'>");
                                    input1.text(data[p].advice);
                                    td5.append(input1);
                                    var updateAdvice1=$('<input type="button" value="修改审核意见">');
                                    updateAdvice1.attr("appointId",data[p].ID);
                                    updateAdvice1.click(function (){
                                        console.log($(this).parents("tr").children("td").children("textarea").val());
                                        passObj($(this).attr("appointId"),"3",$(this).parents("tr").children("td").children("textarea").val(),"3");
                                    })
                                    td6.append(updateAdvice1);
                                    button(updateAdvice1);
                                }
                                else
                                {
                                    td5.text(data[p].advice);
                                }
                            }
                            tr2.append(td1);
                            tr2.append(td2);
                            tr2.append(td3);
                            tr2.append(td7);
                            tr2.append(td4);
                            tr2.append(td5);
                            tr2.append(td6);
                            table1.append(tr2);
                        }
                    }
                    main3.append(table1);
                    tableAndTdth();
                    table1.css(
                        {
                            "position":"absolute",
                            "left":"0px",
                            "top":"60px"
                        }
                    )

                }
            }
        )
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
                "top": "60px"
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
    function passObj(id,state,advice,newState)
    {
      $.ajax(
          {
              url:"updateAppoint.ano",
              type:"post",
              data:{
                  "ID":id,
                  "state":state,
                  "advice":advice
              },
              async:"true",
              dataType:"json",
              success:function (data){
              console.log("data:"+data+"\nstate:"+state+"\nadvice:"+advice);
                  appointAdvice(newState);
              }

          }
      )
    }
    function btuCss (btu)
    {
        btu.css(
            {
                        "margin": "10px 0px 20px 25px",
                        "line-height": "30px",
                        "background": "aliceblue",
                        "border-radius": "50px",
                        "padding-left": "40px",
                        "width": "150px",
                        "outline": "none"
            }
        )
    }
    function button(btu)
    {
        btu.css(
            {
                "width": "100px",
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
                "font-size":"70%"
            }
        )
    }
})
