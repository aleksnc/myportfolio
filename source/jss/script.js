$( document ).ready(function(){

   $(".single-room__magnifier").fancybox({
      openEffect	: 'elastic',
      closeEffect	: 'elastic',
      padding: 0,
   });

   $('#singleSlick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      adaptiveHeight: true,
   });

   $('#silck_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '#silck_nav'
   });

   $('#silck_nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '#silck_for',
      centerMode: true,
      arrows: false,
      focusOnSelect: true

   });

   $('#review').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               verticalSwiping: true,
               vertical: true,
               infinite: false,
               arrows: false,
               dots: true
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               arrows: false,
               dots: true
            }
         }
      ]
   });

   $('#offersSlick').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
   });

   $('#indexApartsSlike').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
               vertical: true,
               infinite: true,
               arrows: false
            }
         }
      ]
   });

   $('#otherSlick').slick({
      slidesToShow: 3,
      arrows: false,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               infinite: true,
               arrows: false,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               vertical: true,
               arrows: false,
            }
         }
      ]
   });
});


function burgerToggl(){
$('#nav-display').toggleClass('nav-display--show');
}

function restSwitch_off(){
   $('#restTop_1').toggleClass('rest-tabs--switch-width', false);
   $('#restBottom_1').toggleClass('rest-tabs--switch-width', false);
}

function restSwitch_on(){
   $('#restTop_1').toggleClass('rest-tabs--switch-width', true);
   $('#restBottom_1').toggleClass('rest-tabs--switch-width', true);
}

$('.rest-tabs__btn').click(function(){
   $('.rest-tabs__btn').toggleClass('rest-tabs__tab-active', false);

   var ht=$(this).html();
   $(this).toggleClass('rest-tabs__tab-active', true);
   console.log(ht);
});

function hotelSwitch_on(){
   $('#hotel').toggleClass('type-hotel__hotel--active', true);
   $('#house').toggleClass('type-hotel__hotel--active', false);
   $('#step-3').toggleClass('form__step--display-none', true);
}

function hotelSwitch_off(){
   $('#hotel').toggleClass('type-hotel__hotel--active', false);
   $('#house').toggleClass('type-hotel__hotel--active', true);
   $('#step-3').toggleClass('form__step--display-none', false);
}


$(".single-room__magnifier").click(function(){
   var src= $('.slick-active > img').data('img');
   var path='img/rooms/'+src;
   $(".single-room__magnifier").attr('href',path);
});

$(".switch-rooms__title").click(function(){
      $('.switch-rooms__title').toggleClass('switch-rooms__title--active', false);
      $(this).toggleClass('switch-rooms__title--active', true);
      $('.switch-rooms__title > ul ').toggleClass('switch-rooms__list--active', false);
      $('ul', this).toggleClass('switch-rooms__list--active', true);
      var leftCursor= $('ul', this).data('cursor')+'px';
      var otv=$('.switch-rooms__cursor', this).css('left',leftCursor );
   });



function valid_focus(e){
   e = e|| event
   var idelem=e.target.id;
   var myid='#'+idelem;
   var mail_text=$(myid).val();

   if(idelem=='your_email'){
      var test_valid= /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/;
   }

   if(idelem=='your_number'){
      var test_valid= /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
   }
   if(idelem=='card_number'){
      var test_valid= /^[0-9]{4}[\- ]?[0-9]{4}[\- ]?[0-9]{4}[\- ]?[0-9]{4}$/;
   }

   if(idelem=='card_cvv'){
      var test_valid= /^[0-9]{3}$/;
   }

   if(idelem=='your_name'||idelem=='your_lname'){
      var test_valid= /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$/;
   }

   if(idelem=='card_name'){
         var test_valid= /^[A-Za-z]+ [A-Za-z]+$/;
   }

   if(test_valid.test(mail_text)){
      $(myid).css('background-image','url("../img/ico-OK.png")');
      $(myid).attr('name','ok');
   }else{
      $(myid).css('background-image','url("../img/ico-NO.png")');
      $(myid).attr('name','no');
   }
}


$("#payment__card").focusin(function(){
   document.getElementById('card').checked = true;
});
