window.scrolsec=2500;
$(document).ready(function() {
	$('#message').autoResize();

	$("#galleryPrev").fancybox({
		padding: 0,
	});

	var winWidth=$( window ).width();
	if(winWidth>=768){
		var test=$('.my-gallery__project');
		var i=0;
		var arraySize= ['18%','28%','32%','22%','22%','32%','28%','18%'];
		for (a=0; a<test.length; a++){
			if (i>7){
				i=0;
			}
			var objr=test[a];
			$(objr).css("width",arraySize[i]);
			i++;
		}
	}

	$('#silck_for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '#silck_nav'
	});

	$('#silck_nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '#silck_for',
		centerMode: true,
		arrows: false,
		focusOnSelect: true

	});
});

$('.main-nav__punct').click(function (e) {
	var attr=$(this).attr('href');
	var name=attr.substr(1);
	destination = $('a[name="'+name+'"]').offset().top+'px';
	$('body').animate( { scrollTop: destination }, scrolsec );
	return false;
});


function valid_focus(e){
	e = e|| event;
	var idelem=e.target.id;
	var myid='#'+idelem;
	var mail_text=$(myid).val();
	var inpName=myid+'Name';
	var realName=$(inpName).data('name');

	if(idelem=='mail'){
		var test_valid= /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/;
	}else{

		var test_valid= /^([А-Яа-яЁ-ёA-Za-z0-9\s]+[\.]?)+$/i;
	}

	if(test_valid.test(mail_text)){
		$(myid).css('box-shadow','0 0 10px #1ae862');
		$(myid).css('border-color','#1ae862');
		$(myid).attr('name','ok');
		$(inpName).empty();
		$(inpName).prepend('<span class="form__name" id='+inpName+' data-name=""'+realName+'")="">'+realName+'</span>');

		if($('#mail').attr('name')=='ok'){
			if($('#theme').attr('name')=='ok'){
				if($('#message').attr('name')=='ok') {
					$('#send').attr('onclick', 'send(event)');
					$('#send').toggleClass('form__send--active', true);
				}
			}
		}
	}else{
		$(myid).css('box-shadow','0 0 10px #ff2600');
		$(myid).css('border-color','#ff2600');
		$(myid).attr('name','no');
		$('#send').attr('onclick',' ');
		$('#send').toggleClass('form__send--active', false);

		$(inpName).empty();
		$(inpName).prepend('<span class="form__name" id='+inpName+' data-name=""'+realName+'")="">'+realName+'</span> <span> Заполните поле правильно</span>');
	}
}


function send(){
	alert();
	if($('#mail').attr('name')=='ok'){
		if($('#theme').attr('name')=='ok'){
			if($('#message').attr('name')=='ok'){
				var mail = $('#mail').val()
				var theme = $('#theme').val()
				var post = $('#message').val()
				$.ajax({
				type: "POST", //Метод отправки
				url: "post.php", //путь до php фаила отправителя
				data: "mail="+mail+"&theme="+theme+"&post="+post,
				 success: function(html) {
					 if(html=='1'){
						  $('.message').empty();
						  $('.message').append('<p class="footer_head message">МОЖНО И НАПИСАТЬ <span class="post_m"> Отправлено</span></P>');
					 } else{
						 $('.message').empty();
						 $('.message').prepend('<p class="footer_head message">МОЖНО И НАПИСАТЬ <span class="post_m"> Заполните все поля правильно</span></P>');
					 }
					}
				});	
			}
		}
	}else{
		$('.message').empty();
		$('.message').prepend('<p class="footer_head message">МОЖНО И НАПИСАТЬ <span class="post_m"> Заполните все поля правильно</span></P>');
	}
}


function burgerToggl(){
	$('.maket-nav').toggleClass('maket-nav--show');
}

function accessibility(){
	$('.accessibility__inner').toggleClass('accessibility__inner--show');
}

$('.accessibility__block-css').click(function (e) {
	var url=$(this).val();
	style = $('link').attr('href','css/'+url);
});

$('.accessibility__block-resize').click(function (e) {
	var val=$(this).val();
	if(val!='1'){
	$('.my-tools__tool').css('width','100%');
	}
	var fontSizeDef=$('body').data("fontsize");
	var newFontSize=fontSizeDef*val+'px';
	$('html, body').css("font-size", newFontSize);
});


$('.accessibility__block-anim').click(function (e) {
	var val=$(this).val();
	if(val=="off"){
		$('.my-gallery__project-preview').toggleClass('my-gallery__project-preview--none-anim','true');
		$('.my-gallery__project').toggleClass('my-gallery__project--none-anim','true');
		scrolsec=0;
	} else{
		$('.my-gallery__project-preview').toggleClass('my-gallery__project-preview--none-anim','false');
		$('.my-gallery__project').toggleClass('my-gallery__project--none-anim','false');
		scrolsec=2500;

	}
});


$('.accessibility__block-img').click(function (e) {
	var val=$(this).val();
	if(val=="off"){
		$('.about-me__img').css('display','none');
		$('.about-me__punct-part:not(:first)').toggleClass('about-me__punct-part--ok','false');
		$('.about-me__punct-part').css('padding-left','0');
		$('.about-me__info').css('max-width','100%');
		$('.my-tools__tool').toggleClass('my-tools__tool--none-img','true');
	} else{
		$('.about-me__img').css('display','block');
		$('.about-me__punct-part:not(:first)').toggleClass('about-me__punct-part--ok','true');
		$('.about-me__punct-part').css('padding-left','45px');
		$('.my-tools__tool').toggleClass('my-tools__tool--none-img','false');
		$('.about-me__info').css('max-width','600px');

	}
});
