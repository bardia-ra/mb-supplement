const html=document.getElementById('htmltag');
const checkbox=document.getElementById('checkbox');
const sidecheckbox=document.getElementById('side-checkbox');
// var root = document.querySelector(':root');
// var rootstyle = getComputedStyle(root);
// var mode = rootstyle.getPropertyValue('--orange-color');
// document.querySelector(':root').style.setProperty('--orange-color', '#212529');
checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        html.setAttribute("data-bs-theme","dark");
        document.querySelector('#sidebar').style.background="#212529";
        // document.querySelector('.belt-menu').style.background="#212529";
        document.querySelector('.sup-menu').style.background="#212529";
        document.querySelector('.side-nav-sup-menu').style.background="#212529";
        document.querySelector('.layout-menu').style.background="#212529";
        document.querySelector('.side-nav-layout-menu').style.background="#212529";
        document.querySelector('.nav').style.background="#212529";
        document.querySelector('.login-container').style.background="#212529";
        document.querySelector('.cart-container').style.background="#212529";
        document.querySelector('#card-1').style.background="#212529";
        document.querySelector('#card-2').style.background="#212529";
        document.querySelector('#card-3').style.background="#212529";
        document.querySelector('#card-4').style.background="#212529";
        document.querySelector('#card-5').style.background="#212529";
        sidecheckbox.checked=true;
        // document.querySelector('.card-bottom').classList.add('active');
        document.querySelector('.card-button').style.background="#212529";
        // document.documentElement.style.setProperty('--orange-color', '#ff0000');
        // document.querySelector(':root').style.setProperty('--orange-color', '#212529');
        // document.querySelector('.button-48:before').style.background="#212529";
    }else{
        html.setAttribute("data-bs-theme","light");
        document.querySelector('#sidebar').style.background="#fff";
        // document.querySelector('.belt-menu').style.background="#fff";
        document.querySelector('.sup-menu').style.background="#fff";
        document.querySelector('.side-nav-sup-menu').style.background="#fff";
        document.querySelector('.layout-menu').style.background="#fff";
        document.querySelector('.side-nav-layout-menu').style.background="#212529";
        document.querySelector('.nav').style.background="#fff";
        document.querySelector('.login-container').style.background="#fff";
        document.querySelector('.cart-container').style.background="#fff";
        document.querySelector('#card-1').style.background="#fff";
        document.querySelector('#card-2').style.background="#fff";
        document.querySelector('#card-3').style.background="#fff";
        document.querySelector('#card-4').style.background="#fff";
        document.querySelector('#card-5').style.background="#fff";
        sidecheckbox.checked=false;
        // document.querySelector('.card-bottom').classList.remove('active');
        document.querySelector('.card-button').style.background="#fff";
    }
});
sidecheckbox.addEventListener('change',()=>{
    if(sidecheckbox.checked){
        html.setAttribute("data-bs-theme","dark");
        document.querySelector('#sidebar').style.background="#212529";
        // document.querySelector('.belt-menu').style.background="#212529";
        document.querySelector('.sup-menu').style.background="#212529";
        document.querySelector('.side-sup-menu').style.background="#212529";
        document.querySelector('.layout-menu').style.background="#212529";
        document.querySelector('.side-nav-layout-menu').style.background="#212529";
        document.querySelector('.nav').style.background="#212529";
        document.querySelector('.login-container').style.background="#212529";
        document.querySelector('.cart-container').style.background="#212529";
        document.querySelector('#card-1').style.background="#212529";
        document.querySelector('#card-2').style.background="#212529";
        document.querySelector('#card-3').style.background="#212529";
        document.querySelector('#card-4').style.background="#212529";
        document.querySelector('#card-5').style.background="#212529";
        // document.querySelector('.card-bottom').classList.add('active');
        document.querySelector('.card-button').style.background="#212529";
        // document.documentElement.style.setProperty('--orange-color', '#ff0000');
        // document.querySelector(':root').style.setProperty('--orange-color', '#212529');
        // document.querySelector('.button-48:before').style.background="#212529";
    }else{
        html.setAttribute("data-bs-theme","light");
        document.querySelector('#sidebar').style.background="#fff";
        // document.querySelector('.belt-menu').style.background="#fff";
        document.querySelector('.sup-menu').style.background="#fff";
        document.querySelector('.side-sup-menu').style.background="#fff";
        document.querySelector('.layout-menu').style.background="#fff";
        document.querySelector('.side-nav-layout-menu').style.background="#fff";
        document.querySelector('.nav').style.background="#fff";
        document.querySelector('.login-container').style.background="#fff";
        document.querySelector('.cart-container').style.background="#fff";
        document.querySelector('#card-1').style.background="#fff";
        document.querySelector('#card-2').style.background="#fff";
        document.querySelector('#card-3').style.background="#fff";
        document.querySelector('#card-4').style.background="#fff";
        document.querySelector('#card-5').style.background="#fff";
        // document.querySelector('.card-bottom').classList.remove('active');
        document.querySelector('.card-button').style.background="#fff";
    }
});
// document.querySelector('.belt').addEventListener('click',()=>{
//     document.querySelector('.belt-menu').classList.toggle('active');
//     document.querySelector('.sup-menu').classList.remove('active');
//     document.querySelector('.layout-menu').classList.remove('active');
// });
document.querySelector('.sup').addEventListener('click',()=>{
    document.querySelector('.sup-menu').classList.toggle('active');
    // document.querySelector('.belt-menu').classList.remove('active');
    document.querySelector('.layout-menu').classList.remove('active');
});
document.querySelector('.layout').addEventListener('click',()=>{
    document.querySelector('.layout-menu').classList.toggle('active');
    document.querySelector('.sup-menu').classList.remove('active');
    // document.querySelector('.belt-menu').classList.remove('active');
});
// document.querySelector('.side-belt').addEventListener('click',()=>{
//     // document.querySelector('.side-belt-menu').classList.toggle('active');
//     document.querySelector('.side-sup-menu').classList.remove('active');
//     document.querySelector('.side-layout-menu').classList.remove('active');
// });
document.querySelector('.side-sup').addEventListener('click',()=>{
    document.querySelector('.side-sup-menu').classList.toggle('active');
    // document.querySelector('.side-belt-menu').classList.remove('active');
    document.querySelector('.side-layout-menu').classList.remove('active');
});
document.querySelector('.side-layout').addEventListener('click',()=>{
    document.querySelector('.side-layout-menu').classList.toggle('active');
    document.querySelector('.side-sup-menu').classList.remove('active');
    // document.querySelector('.side-belt-menu').classList.remove('active');
});
document.querySelector('#horizontal').addEventListener('click',()=>{
    document.querySelector('#horizontal').style.background="#ff7424e2";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#vertical').style.background="transparent";
    // document.querySelector('#vertical').style.color="#000";
    document.querySelector('#side-horizontal').style.background="#ff7424e2";
    document.querySelector('#side-vertical').style.background="transparent";
    document.querySelector('.inner-nav').classList.add('unactive');
    document.querySelector('.side-nav').classList.add('active');
    document.querySelector('.main').classList.add('width');
    document.querySelector('.iran').classList.add('side');
    document.querySelector('.login').classList.add('side');
});
document.querySelector('#vertical').addEventListener('click',()=>{
    document.querySelector('#vertical').style.background="#ff7424e2";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#horizontal').style.background="transparent";
    // document.querySelector('#vertical').style.color="#000";
    
});
document.querySelector('#side-horizontal').addEventListener('click',()=>{
    document.querySelector('#side-horizontal').style.background="transparent";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#side-vertical').style.background="#ff7424e2";
    // document.querySelector('#vertical').style.color="#000";
    
});
document.querySelector('#side-vertical').addEventListener('click',()=>{
    document.querySelector('#side-vertical').style.background="transparent";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#side-horizontal').style.background="#ff7424e2";
    // document.querySelector('#vertical').style.color="#000";
    document.querySelector('#vertical').style.background="#ff7424e2";
    document.querySelector('#horizontal').style.background="transparent";
    document.querySelector('.inner-nav').classList.remove('unactive');
    document.querySelector('.side-nav').classList.remove('active');
    document.querySelector('.main').classList.remove('width');
    document.querySelector('.iran').classList.remove('side');
    document.querySelector('.login').classList.remove('side');
});
document.querySelector('#side-nav-lay').addEventListener('click',()=>{
    document.querySelector('.side-nav-layout-menu').classList.toggle('active');
    document.querySelector('.side-nav-sup-menu').classList.remove('active');
});
document.querySelector('#side-nav-sup').addEventListener('click',()=>{
    document.querySelector('.side-nav-sup-menu').classList.toggle('active');
    document.querySelector('.side-nav-layout-menu').classList.remove('active');
});
document.querySelector('.bar-parent').addEventListener('click',()=>{
    document.querySelector('#sidebar').classList.toggle('active');
    document.querySelector('.close').classList.toggle('active');
    document.querySelector('.bar').classList.toggle('unactive');
    // document.querySelector('.side-shadow').classList.toggle('active');
});
// document.querySelector('.bar-btn').addEventListener('click',()=>{
//     document.querySelector('#sidebar').classList.remove('active');
//     document.querySelector('.close').classList.remove('active');
//     document.querySelector('.close').classList.add('click');
//     document.querySelector('.bar').classList.remove('unactive');
// });
document.addEventListener('click',(e)=>{
    let bar=document.querySelector('.bar-parent');
    let side=document.querySelector('#sidebar');
    // var btn=document.querySelector('#login-btnn');
    if(!bar.contains(e.target) && !side.contains(e.target)){
        // let login=document.querySelector('.login-container');
        document.querySelector('#sidebar').classList.remove('active');
        document.querySelector('.close').classList.remove('active');
        document.querySelector('.bar').classList.remove('unactive');
        // document.querySelector('.side-shadow').classList.remove('active');
    };
});
document.querySelector('#sidebar-horizontal').addEventListener('click',()=>{
    document.querySelector('#sidebar-horizontal').style.background="#ff7424e2";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#sidebar-vertical').style.background="transparent";
    // document.querySelector('#vertical').style.color="#000";
});
document.querySelector('#sidebar-vertical').addEventListener('click',()=>{
    document.querySelector('#sidebar-vertical').style.background="#ff7424e2";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#sidebar-horizontal').style.background="transparent";
    // document.querySelector('#vertical').style.color="#000";
});
document.querySelector('#login-btnn').addEventListener('click', ()=>{
    document.querySelector('.login-container').classList.toggle('active');
    document.querySelector('.main').classList.toggle('active');
    document.querySelector('#login-btnn').classList.toggle('active');
    document.querySelector('.iran').classList.toggle('active');
    document.querySelector('.bar-parent').classList.toggle('active');
});
document.querySelector('#close-login').addEventListener('click',()=>{
    document.querySelector('.login-container').classList.remove('active');
    document.querySelector('.main').classList.toggle('active');
    document.querySelector('#login-btnn').classList.toggle('active');
    document.querySelector('.iran').classList.remove('active');
    document.querySelector('.bar-parent').classList.remove('active');
})
document.addEventListener('click',(e)=>{
    let login=document.querySelector('.login');
    // var btn=document.querySelector('#login-btnn');
    if(!login.contains(e.target)){
        // let login=document.querySelector('.login-container');
        document.querySelector('.login-container').classList.remove('active');
        document.querySelector('.main').classList.remove('active');
        document.querySelector('#login-btnn').classList.remove('active');
        document.querySelector('.iran').classList.remove('active');
        document.querySelector('.bar-parent').classList.remove('active');
    };
});
document.querySelector('#cart').addEventListener('click', ()=>{
    document.querySelector('.cart-container').classList.toggle('active');
    document.querySelector('.main').classList.toggle('blur');
    document.querySelector('.login').classList.toggle('active');
    document.querySelector('#cart').classList.toggle('blur');
    document.querySelector('.bar-parent').classList.toggle('blur');
});
document.querySelector('.cart-close-btn').addEventListener('click', ()=>{
    document.querySelector('.cart-container').classList.remove('active');
    document.querySelector('.main').classList.remove('blur');
    document.querySelector('.login').classList.remove('active');
    document.querySelector('#cart').classList.remove('blur');
    document.querySelector('.bar-parent').classList.remove('blur');
});
document.addEventListener('click',(e)=>{
    let cart=document.querySelector('.iran');
    // var btn=document.querySelector('#login-btnn');
    if(!cart.contains(e.target)){
        // let login=document.querySelector('.login-container');
        document.querySelector('.cart-container').classList.remove('active');
        document.querySelector('.main').classList.remove('blur');
        document.querySelector('.login').classList.remove('active');
        document.querySelector('#cart').classList.remove('blur');
        document.querySelector('.bar-parent').classList.remove('blur');    
    };
});
const hidepass=document.querySelector('#hide-pass');
const passinput=document.querySelector('#password');
// const loginform=document.querySelector('.login-top');

let visible = false;

hidepass.addEventListener('click',()=>{
    visible =  !visible;
    if(visible){
        hidepass.src= `${location.origin}/idk/img/hide.png`;
        passinput.setAttribute('type','text');
    } else{
        hidepass.src= `${location.origin}/idk/img/show.png`;
        passinput.setAttribute('type','password');
    }
});
const loader=addEventListener('DOMContentLoaded',()=>{
    let load=document.querySelector('.blank');
    load.style.display="none";

});


AOS.init({
    duration: 500,
    easing: "ease-in-sine",
  });
// document.addEventListener('DOMContentLoaded', () => {
//     if (window.innerWidth >= 992) { // Adjust the width as needed for your mobile breakpoint
//         const fade = document.getElementById('fade'); // Replace with your element's ID
//         fade.setAttribute('data-aos', 'fade-left');
//     }
// });

let swiperCard = new Swiper(".card-content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      600: { slidesPerView: 2 },
      968: { slidesPerView: 3 },
    },
  });
