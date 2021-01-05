const switcher = document.querySelector('.switch'),
      imgXR = document.getElementById('iphoneXR'),
      btn1 = document.getElementById('btn-black_XR'),
      btn2 = document.getElementById('btn-red_XR'),
      btn3 = document.getElementById('btn-yellow_XR')
      imgX = document.getElementById('iphoneX'),
      btn4 = document.getElementById('btn-white_X'),
      btn5 = document.getElementById('btn-black_X'),
      img8 = document.getElementById('iphone8'),
      btn6 = document.getElementById('btn-white_8'),
      btn7 = document.getElementById('btn-black_8'),
      btn8 = document.getElementById('btn-gold_8'),
      imgXs = document.getElementById('iphoneXs'),
      btn9 = document.getElementById('btn-white_Xs'),
      btn10 = document.getElementById('btn-black_Xs'),
      btn11 = document.getElementById('btn-gold_Xs'),
      imgSE = document.getElementById('iphoneSE'),
      btn12 = document.getElementById('btn-white_SE'),
      btn13 = document.getElementById('btn-black_SE'),
      btn14 = document.getElementById('btn-red_SE'),
      img11 = document.getElementById('iphone11'),
      btn15 = document.getElementById('btn-red_11'),
      btn16 = document.getElementById('btn-black_11'),
      btn17 = document.getElementById('btn-yellow_11')

function nightMode() {
    if(night === false) {
        night = true

        document.body.classList.add('night');

    document.querySelector('.header > h1').style.color = '#fff'

    document.querySelector('.header-text').style.color = '#fff'

    document.querySelector('.header').classList.add('header-night_mode')

    document.querySelectorAll('.wrap-block').forEach(item => {
    item.classList.add('wrap-block_night')
    })

    document.querySelectorAll('.wrap-block > h2').forEach(item =>{
        item.style.color = '#fff'
    })

    document.querySelectorAll('.btn-block').forEach(item => {
        item.style.backgroundColor = 'rgb(75, 0, 130, 0.4)'
        item.style.color = '#fff'
    }) 

    document.querySelectorAll('.btn-size').forEach(item => {
        item.classList.add('btn-size_night')
        item.style.backgroundColor = 'rgb(75, 0, 130, 0.4)'
        item.style.color = '#fff'
    })

    document.querySelectorAll('.price').forEach(item => {
        item.style.color = '#fff'
    })
    document.querySelector('.btn-add').classList.add('btn-add_night')

}else {
    night = false

    document.body.classList.remove('night')

    document.querySelector('.header > h1').style.color = '#000'

    document.querySelector('.header-text').style.color = '#000'

    document.querySelector('.header').classList.remove('header-night_mode')

    document.querySelectorAll('.wrap-block').forEach(item => {
        item.classList.remove('wrap-block_night')
    })    

    document.querySelectorAll('.wrap-block > h2').forEach(item =>{
        item.style.color = '#000'
    })

    document.querySelectorAll('.btn-block').forEach(item => {
        item.style.backgroundColor = 'rgb(0,0,0,0.08)'
        item.style.color = '#000'
    })

    document.querySelectorAll('.btn-size').forEach(item => {
        item.classList.remove('btn-size_night')
        item.style.backgroundColor = '#fff'
        item.style.color = '#000'
    })

    document.querySelectorAll('.price').forEach(item => {
        item.style.color = '#000'
    })
    document.querySelector('.btn-add').classList.remove('btn-add_night')
  }
}
let night = false;

switcher.addEventListener('change', () => {
 nightMode();
})

function imgChange () {

 // iphone XR  
    btn1.addEventListener('click', () => {
        imgXR.src = '/img/1.png'
    })
    btn2.addEventListener('click', () => {
        imgXR.src = '/img/2.png'
    })
    btn3.addEventListener('click', () => {
        imgXR.src = '/img/3.png'
    })

 // iphone X
    btn4.addEventListener('click', () => {
        imgX.src = '/img/4.png'
    })
    btn5.addEventListener('click', () => {
        imgX.src = '/img/5.png'
    })

 // iphone 8 
    btn6.addEventListener('click', () => {
        img8.src = '/img/8.png'
    })
    btn7.addEventListener('click', () => {
        img8.src = '/img/6.png'
    })
    btn8.addEventListener('click', () => {
        img8.src = '/img/7.png'
    })

// iphone Xs
    btn9.addEventListener('click', () => {
        imgXs.src = '/img/11.png'
    })
    btn10.addEventListener('click', () => {
        imgXs.src = '/img/9.png'
    })
    btn11.addEventListener('click', () => {
        imgXs.src = '/img/10.png'
    })

// iphone SE
    btn12.addEventListener('click', () => {
        imgSE.src = '/img/12.webp'
    })
    btn13.addEventListener('click', () => {
        imgSE.src = '/img/14.webp'
    })
    btn14.addEventListener('click', () => {
        imgSE.src = '/img/13.webp'
    })

 //  iphone 11
    btn15.addEventListener('click', () => {
        img11.src = '/img/17.png'
    })
    btn16.addEventListener('click', () => {
        img11.src = '/img/15.png'
    })
    btn17.addEventListener('click', () => {
        img11.src = '/img/16.png'
    })
}

imgChange()
const pricesXR = ['799$', '899$', '999$'],
      pricesX = ['499$','599$','699$'],
      prices_8 = ['400$', '450$','550$'],
      pricesXs = ['1000$','1100$','1200$'],
      pricesSE = ['150$','200$', '250$'],
      prices11 = ['1500$','2000$', '2500$']

function btnSize(btn64,btn128,btn256, text_block, pricesBlock) {
    document.querySelector(btn64).addEventListener('click', () =>{
        document.querySelector(text_block).innerHTML = pricesBlock[0]
    })
    document.querySelector(btn128).addEventListener('click', () =>{
        document.querySelector(text_block).innerHTML = pricesBlock[1]
    })
    document.querySelector(btn256).addEventListener('click', () =>{
        document.querySelector(text_block).innerHTML = pricesBlock[2]
    })
}
  
function priceChange() {
    btnSize('#btn64XR', '#btn128XR', '#btn256XR', '#iphoneXR-text', pricesXR),
    btnSize('#btn64X', '#btn128X', '#btn256X', '#iphoneX-text', pricesX),
    btnSize('#btn64_8', '#btn128_8', '#btn256_8', '#iphone8-text', prices_8),
    btnSize('#btn64_Xs', '#btn128_Xs', '#btn256_Xs', '#iphoneXs-text', pricesXs),
    btnSize('#btn64_SE', '#btn128_SE', '#btn256_SE', '#iphoneSE-text', pricesSE),
    btnSize('#btn64_11', '#btn128_11', '#btn256_11', '#iphone11-text', prices11)
}

priceChange();

const btnAdd = document.querySelector('.btn-add');
function addItems() {
    btnAdd.addEventListener('click', () =>{
        document.querySelectorAll('#newiphone').forEach(item => {
            item.classList.remove('display-none')
        })
        btnAdd.remove()
    })
   
}

addItems()
