$(document).ready(function() {
	$('#message').autoResize();
});


function valid_focus(e){
	e = e|| event
	var idelem=e.target.id;
	var myid='#'+idelem;
	var mail_text=$(myid).val();

	console.log(mail_text);

	if(idelem=='mail'){
		var test_valid= /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/;
	}else{

		var test_valid= /^([A-Za-z0-9\s]+[\.]?)+$/i;
	}

	if(test_valid.test(mail_text)){
		$(myid).css('box-shadow','0 0 10px #1ae862');
		$(myid).css('border-color','#1ae862');
		$(myid).attr('name','ok');

		if($('#mail').attr('name')=='ok'){
			if($('#theme').attr('name')=='ok'){
				if($('#message').attr('name')=='ok') {
					$('#send').attr('onclick', 'send(event)');
					$('#send').attr('href', 'javascript:void(0);');
					$('#send').toggleClass('form__send--active', true);
				}
			}
		}
	}else{
		$(myid).css('box-shadow','0 0 10px #ff2600');
		$(myid).css('border-color','#ff2600');
		$(myid).attr('name','no');
		$('#send').attr('onclick',' ');
		$('#send').attr('href', ' ');
		$('#send').toggleClass('form__send--active', false);
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