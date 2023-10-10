$(function ()
{var main3=$('.main3');
    var div1=$("<div style='border: black 1px solid;border-radius: 5px 5px;width: 500px; height: 400px;margin-left: 250px;margin-bottom: 30px;position: relative;top: 30px'>");
    $('.span2').click(function ()
    {
        var spanIf=$('<span style="width: 300px;margin-bottom: 30px; height: 50px;  position: relative; left: -90px;line-height: 50px;top:30px;font-size: 20px;font-weight: 500">').text("消息通知");
        var ul11=$('<ul style="margin-left: 100px;position: relative;top: -30px;left: -50px">')
        div1.append(spanIf);
        main3.empty();
        $.ajax(
            {
                url:"getInformationForTeacher.ano",
                data:{},
                type:"post",
                dataType:"json",
                async:"true",
                success:function (data)
                {
                    for (var d=0;d<data.length;d++)
                    {
                        var li1=$('<li style="line-height: 20px;margin-bottom: 10px">').text(data[d].notice);
                        ul11.append(li1);
                    }
                    div1.append(ul11);
                    main3.append(div1);
                },
                error:function ()
                {
                    alert("获取消息失败请联系管理员");
                }
            }
        )
        main3.append(div1);
    })

})