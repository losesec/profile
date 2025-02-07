const image = document.getElementById('photo');

image.addEventListener('mouseover' ,()=>{

    image.src ='hack.jpg';
})

image.addEventListener('mouseout' ,()=>{

    image.src ='tch.png';
})

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-1ED5SPKCND');
