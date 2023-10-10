$(function ()
{
    console.log($($(".ul1>li")[5]));
    var main3=$('.main3');
    $($(".ul1>li")[5]).click(function ()
    {
        main3.empty();
        var span1=  $('<span style="width: 300px;margin-bottom: 30px; height: 50px;  position: relative; left: -170px;line-height: 50px;font-size: 20px;font-weight: 500">').text("请先验证账户")
        $('.main3').append(span1);
        var id=$("<input type='text' class='id' style='width: 150px;margin-left: 30px;outline: none;' placeholder='请输入工号'>");
        var UserName=$("<input type='text' class='UserName' style='width: 150px;margin-left: 30px;outline: none;' placeholder='请输入姓名'>")
        var oldPwd=$('<input type="password" class="oldPwd" style="width: 150px;margin-left: 10px;outline: none;" placeholder="请输入旧密码">')
        var newPwd=$('<input type="password" class="newPwd" style="width: 150px;margin-left: 10px;outline: none;" placeholder="请输入新密码">')
        var div1= $("<div style='border: black 1px solid;border-radius: 5px 5px;width: 250px; height: 30px;margin-left: 220px;margin-bottom: 30px'>").text("工号:")
        var div2= $("<div style='border: black 1px solid;border-radius: 5px 5px;width: 250px; height: 30px;margin-left: 220px;margin-bottom: 30px'>").text("姓名:")
        var div3= $("<div style='border: black 1px solid;border-radius: 5px 5px;width: 250px; height: 30px;margin-left: 220px; margin-bottom: 30px'>").text("旧密码:")
        var div4= $("<div style='border: black 1px solid;border-radius: 5px 5px;width: 250px; height: 30px;margin-left: 220px; margin-bottom: 30px'>").text("新密码:")
        div1.append(id);
        div2.append(UserName);
        div3.append(oldPwd);
        div4.append(newPwd)
        main3.append(div1);
        main3.append(div2);
        main3.append(div3);
        main3.append(div4);
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
                    url:"TeacherLogin.ano",
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
                            alert("密码正确是否需要修改密码");
                            $.ajax(
                                {
                                    url: "UpdateForTeacherPwd.ano",
                                    data: {
                                        "id":parseInt($('.id').val()),
                                        "pwd":$('.newPwd').val(),
                                        "UserName":$('.UserName').val()
                                    },
                                    async:"true",
                                    success:function(data)
                                    {
                                        console.log(data);
                                        alert("密码修改成功,请重新登录");
                                        javascrtpt:window.location.href='teacherLogin.html';
                                    }
                                    ,error:function ()
                                    {
                                        alert("修改失败请联系管理员");
                                    }
                                }
                            )
                        } else if (date == "0") {
                            alert("密码错误");
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