const html=document.getElementById('htmltag');
const checkbox=document.getElementById('checkbox');
checkbox.addEventListener('change',()=>{
    if(checkbox.checked){
        html.setAttribute("data-bs-theme","dark");
        document.querySelector('#sidebar').style.background="#212529";
    }else{
        html.setAttribute("data-bs-theme","light");
        document.querySelector('#sidebar').style.background="#fff";
    }
});
document.querySelector('.belt').addEventListener('click',()=>{
    document.querySelector('.belt-menu').classList.toggle('active');
    document.querySelector('.sup-menu').classList.remove('active');
    document.querySelector('.layout-menu').classList.remove('active');
});
document.querySelector('.sup').addEventListener('click',()=>{
    document.querySelector('.sup-menu').classList.toggle('active');
    document.querySelector('.belt-menu').classList.remove('active');
    document.querySelector('.layout-menu').classList.remove('active');
});
document.querySelector('.layout').addEventListener('click',()=>{
    document.querySelector('.layout-menu').classList.toggle('active');
    document.querySelector('.sup-menu').classList.remove('active');
    document.querySelector('.belt-menu').classList.remove('active');
});
document.querySelector('#horizontal').addEventListener('click',()=>{
    document.querySelector('#horizontal').style.background="#ff7424e2";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#vertical').style.background="transparent";
    // document.querySelector('#vertical').style.color="#000";
});
document.querySelector('#vertical').addEventListener('click',()=>{
    document.querySelector('#vertical').style.background="#ff7424e2";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#horizontal').style.background="transparent";
    // document.querySelector('#vertical').style.color="#000";
});
document.querySelector('.side-belt').addEventListener('click',()=>{
    document.querySelector('.side-belt-menu').classList.toggle('active');
    document.querySelector('.side-sup-menu').classList.remove('active');
    document.querySelector('.side-layout-menu').classList.remove('active');
});
document.querySelector('.side-sup').addEventListener('click',()=>{
    document.querySelector('.side-sup-menu').classList.toggle('active');
    document.querySelector('.side-belt-menu').classList.remove('active');
    document.querySelector('.side-layout-menu').classList.remove('active');
});
document.querySelector('.side-layout').addEventListener('click',()=>{
    document.querySelector('.side-layout-menu').classList.toggle('active');
    document.querySelector('.side-sup-menu').classList.remove('active');
    document.querySelector('.side-belt-menu').classList.remove('active');
});
document.querySelector('#horizontal').addEventListener('click',()=>{
    document.querySelector('#horizontal').style.background="#ff7424e2";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#vertical').style.background="transparent";
    // document.querySelector('#vertical').style.color="#000";
});
document.querySelector('#vertical').addEventListener('click',()=>{
    document.querySelector('#vertical').style.background="#ff7424e2";
    // document.querySelector('#horizontal').style.color="#fff";
    document.querySelector('#horizontal').style.background="transparent";
    // document.querySelector('#vertical').style.color="#000";
});
document.querySelector('.bar-parent').addEventListener('click',()=>{
    document.querySelector('#sidebar').classList.toggle('active');
    document.querySelector('.close').classList.toggle('active');
    document.querySelector('.bar').classList.toggle('unactive');
    document.querySelector('.side-shadow').classList.toggle('active');
});
