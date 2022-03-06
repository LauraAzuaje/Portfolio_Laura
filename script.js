// static menu//
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // activation menu
    $('.btn-menu').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.btn-menu i').toggleClass("active");
    });

    $('.menu').click(function(){
        $('.navbar .menu').toggleClass("active");
  
    });
});

//Form submit
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#emailSubmit')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:azuajemarcanolaura@gmail.com?subject= nombre ${form.get('name')}  correo ${form.get('email')}&body= ${form.get('message')}`)
  $buttonMailto.click()
}