$(function ()
{
    $('.span1').click(function ()
    {
        var main3=$('.main3');
        main3.empty();
        var span1=  $('<span style="width: 300px;margin-bottom: 30px; height: 50px;  position: relative; left: -170px;line-height: 50px;font-size: 20px;font-weight: 500">').text("验证账户")
        $('.main3').append(span1);
        var id=$("<input type='text' class='id' style='width: 150px;margin-left: 30px;outline: none;' placeholder='请输入学号'>");
        var UserName=$("<input type='text' class='UserName' style='width: 150px;margin-left: 30px;outline: none;' placeholder='请输入姓名'>")
        var oldPwd=$('<input type="password" class="oldPwd" style="width: 150px;margin-left: 30px;outline: none;" placeholder="请输入密码">')
        var div1= $("<div style='border: black 1px solid;border-radius: 5px 5px;width: 250px; height: 30px;margin-left: 220px;margin-bottom: 30px'>").text("学号:")
        var div2= $("<div style='border: black 1px solid;border-radius: 5px 5px;width: 250px; height: 30px;margin-left: 220px;margin-bottom: 30px'>").text("姓名:")
        var div3= $("<div style='border: black 1px solid;border-radius: 5px 5px;width: 250px; height: 30px;margin-left: 220px; margin-bottom: 30px'>").text("密码:")
        div1.append(id);
        div2.append(UserName);
        div3.append(oldPwd);
        main3.append(div1);
        main3.append(div2);
        main3.append(div3);
        var btn=$("<input type='button' class='but1' value='提交'>")
        btn.css(
            {
                "width": "250px",
                "margin-left":"60px",
                "padding":"8px",
                "background-color": "#428bca",
                "border-color": "#357ebd",
                "color": "#fff",
                "margin-left":"220px",
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
        btn.click(function ()
        {
            $.ajax(
                {
                    url:"StudentLogin.ano",
                    type:"GET",
                    data:{
                        "id":parseInt($('.id').val()),
                        "pwd":$('.oldPwd').val(),
                        "UserName":$('.UserName').val()
                    },
                    async:"true",
                    success:function(date) {
                        console.log(date);
                        if (date == "1") {
                            alert("密码正确确定继续,注销账号");
                            $.ajax(
                                {
                                    url: "DeleteForStudent.ano",
                                    data: {
                                        "id":parseInt($('.id').val()),
                                        "pwd":$('.oldPwd').val(),
                                        "UserName":$('.UserName').val()
                                    },
                                    async:"true",
                                    success:function(data)
                                    {
                                        console.log(data);
                                        if (data=="1")
                                        {
                                            alert("注销成功");
                                        }
                                        javascrtpt:window.location.href='newTeacher.html';
                                    }
                                    ,error:function ()
                                    {
                                        alert("注销失败请联系管理员");
                                    }
                                }
                            )
                        } else if (date == "0") {
                            alert("密码错误，无法注销");
                        } else {
                            alert("用户不存在，请注册")
                        }
                    }
                }
            )
        })
        $('.main3').append(btn);
    })
})