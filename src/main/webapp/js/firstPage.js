$(function() {
	var len = 7;
	var rote11 = 2 * Math.PI / len;
	var currectdiv11 = 0;
	setInterval(function () {
		{
			currectdiv11++;
			$('.lb12').css({
				'transform': 'rotateY(' + currectdiv11 * rote11 + 'rad)',
				'-webkit-transform': 'rotateY(' + currectdiv11 * rote11 + 'rad)'
			});

		}
	}, 3000)
	$(".div1>ul").on('mouseenter','li',function(event)
	{

		console.log();
		var index=$(this).index();


		for(var s=0;s< $('.div1 div').length;s++)
		{
			if(s==index)
			{
				$($('.div1>ul>li')[s]).css({'background-color': 'rgb(1,1,1)'});
				if(s==6){
					$($('.div1 div')[s]).hide();
				}
				else{
					$($('.div1 div')[s]).show();
				}
			}

			else
			{
				$($('.div1>ul>li')[s]).css({'background-color': 'rgb(34,34,34)'})
				$($('.div1 div')[s]).hide();
			}
		}
	}).mouseleave(function()
	{
		$('.div1 div').hide();
		$(".div1>ul>li").css({'background-color': 'rgb(34,34,34)'});
	})

	$('.main2').on('mouseenter', 'div', function () {
		$(this).css({'transform': 'scale(1.05)', 'transition': ' linear all 0.3s'})
	})
	$(".main2").on('mouseleave', 'div', function () {
		$(this).css({'transform': 'scale(1)', 'transition': 'linear all 0.3s '})
	})
	$(".main2").on("mouseenter","div",function ()
	{
		var index1=$(this).index();
		$('.main2 span').css({'transform': 'scale(1)', 'transition': 'linear all 0.3s '})
		if(index1==0) {
			$('.span1').css(
				{
					"background": "url(\"../img/back1n.png\") no-repeat -37px -10px"
				}
			)
		}
		if(index1==1)
		{
			$('.span2').css(
				{
					"background": "url(\"../img/back2n.png\") no-repeat -20px -10px"
				}
			)
		}
		if(index1==2)
		{
			$('.span3').css(
				{
					"background": "url(\"../img/back3n.png\") no-repeat -15px 0px"
				}
			)
		}
		if(index1==3)
		{
			$('.span4').css(
				{
					"background": "url(\"../img/back4n.png\") no-repeat -40px -8px"
				}
			)
		}
		if(index1==4)
		{
			$('.span5').css(
				{
					"background": "url(\"../img/back5n.png\") no-repeat -30px 0px"
				}
			)
		}

	})
	$(".main2").on("mouseleave","div",function ()
	{
		var index2=$(this).index();
		if(index2==0) {
			$('.span1').css(
				{
					"background": "url(\"../img/back1l.png\") no-repeat -10px 0px"
				}
			)
		}
		if(index2==1)
		{
			$('.span2').css(
				{
					"background": "url(\"../img/back2l.png\") no-repeat -20px -10px"
				}
			)
		}
		if(index2==2)
		{
			$('.span3').css(
				{
					"background": "url(\"../img/back3l.png\") no-repeat -17px 5px"
				}
			)
		}
		if(index2==3)
		{
			$('.span4').css(
				{
					"background": "url(\"../img/back4l.png\") no-repeat -20px 5px"
				}
			)
		}
		if(index2==4)
		{
			$('.span5').css(
				{
					"background": "url(\"../img/back5l.png\") no-repeat -10px 5px"
				}
			)
		}

	})
})