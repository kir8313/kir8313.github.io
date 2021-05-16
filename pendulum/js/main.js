window.addEventListener('DOMContentLoaded', pendulum)
// функция для объявления локальных переменных
function pendulum() {
  const weight = document.querySelector('#input-weight');
  const stiffness = document.querySelector('#input-stiffness');
  const x0 = document.querySelector('#input-way');
  var requestId = null

  // кнопка старт
  document.querySelector('.pendulum-demo__btn-start').addEventListener('click', function btnOn() {  
    // скрываю кнопку, показываю стоп.  
    this.setAttribute('hidden', '');
    document.querySelector('.pendulum-demo__btn-stop').removeAttribute('hidden');
    // отслеживаю изменение пружины и передаю значение шару
    function ballMoving() {
      let position = document.querySelector('.pendulum-demo__svg-spring').getBoundingClientRect().height;
      document.querySelector('.pendulum-demo__svg-circle').style.setProperty('--y', position + "px");  
      requestId = requestAnimationFrame(ballMoving) 
    }
    // для плавной анимации
    requestAnimationFrame(ballMoving);     
    // передаю параметры в формулу
    document.querySelector('#weight').value = weight.value;
    document.querySelector('#stiffness').value = stiffness.value;
    document.querySelector('#x0').value = x0.value;         
    // высчитываю частоту колебаний, округляю, передаю в cubic-bezier
    let answer = (document.querySelector('#x0').value / 100) * 
                  (Math.sqrt(document.querySelector('#stiffness').value /
                  document.querySelector('#weight').value));
    document.querySelector('#answer').value = answer.toFixed(2);
    document.querySelector('.pendulum-demo__svg-spring').style.setProperty('--cubic', answer.toFixed(2))
    // запускаю анимацию фона полей в формуле
    showBgInput();
    // после задержки 1сек передаю в переменные:  размера шара, х0, макс. и мин. растягивание пружины
    timeout1 = setTimeout(()=> {
      let circleWidth = Math.round(((Math.cbrt(weight.value)) * 100 / 2)) ;
      document.querySelector(':root').style.setProperty('--circle-width', circleWidth +"px");  
      document.querySelector('.pendulum-demo__svg-start-position').style.setProperty('--x0', x0.value + "px");  
      document.querySelector(':root').style.setProperty('--scale-more',  1 + x0.value / 100 );  
      document.querySelector(':root').style.setProperty('--scale-less',  1 - x0.value / 100 );  
    }, 1000)

    // после задержки 2с запускаю анимацию
    timeout2 = setTimeout(() => {
      document.querySelector('.pendulum-demo__svg').classList.add('--anim');
      stopWatch();
    }, 2000)
  })

  // кнопка отключения
  document.querySelector('.pendulum-demo__btn-stop').addEventListener('click', function btnOff() {
    // скрыл кнопку, показал старт
    this.setAttribute('hidden', '')
    document.querySelector('.pendulum-demo__btn-start').removeAttribute('hidden');
    // вернул исходные значения ширины круга и позицию
    document.querySelector(':root').style.setProperty('--circle-width', 40 +"px"); 
    document.querySelector('.pendulum-demo__svg-circle').style.setProperty('--y', 129 +"px"); 
    // сбросил обработку анимации
    cancelAnimationFrame(requestId); 
    // сбросил секундомер
    ClearСlock();
    // сбросил тайм ауты и убрал класс анимирующий
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
    clearTimeout(timeout4);
    document.querySelector('.pendulum-demo__svg').classList.remove('--anim');
    showBgInput();
  })

  // для анимации фона у инпутов в формуле и тайм аут на удаление класса
  function showBgInput() {
    document.querySelectorAll('.pendulum-result__formula>input').forEach(input => {
      input.classList.add('change')
      timeout3 = setTimeout(() => input.classList.remove('change'), 1000)
    })  
    document.querySelectorAll('.pendulum-result__formula-fraction>input').forEach(input => {
      input.classList.add('change')
      timeout4 = setTimeout(() => input.classList.remove('change'), 1000)
    })  
  }
  // задал рамки на максимальную величину и минимальную у параметров
  differenceValue('#btn-weight-less', weight, 0.1, 0.5)
  differenceValue('#btn-stiffness-less', stiffness, 1, 5)
  differenceValue('#btn-way-less', x0, 2, 0)
  sumValue('#btn-weight-more', weight, 0.1, 1);
  sumValue('#btn-stiffness-more', stiffness, 1, 9);
  sumValue('#btn-way-more', x0, 2, 20);
  // формула, при максимальном значении
  function sumValue(btn,input, stepNum, maxValue) {
    document.querySelector(btn).addEventListener('click', () => {
      let sum = input.value = (+input.value * 100 + stepNum * 100)/100;
      if(sum > maxValue) input.value = maxValue;
    })
  }
// формула, при минимальном значении
  function differenceValue(btn,input, num, minValue) {
    document.querySelector(btn).addEventListener('click', () => {
      let sum = input.value = (+input.value * 100 - num * 100)/100;
      if(sum < minValue) input.value = minValue;
    })
  }


}


//объявляем переменные для секундомера
let base = 60; 
let clocktimer,dateObj,dh,dm,ds,ms=0; 
let readout=''; 
let h=1,m=1,tm=1,s=0,ts=0,init=0; 

//функция для очистки поля
function ClearСlock() { 
  clearTimeout(clocktimer); 
  h=1;m=1;tm=1;s=0;ts=0;ms=0; 
  init=0;
  readout='00:00:00.00'; 
  document.MyForm.stopwatch.value=readout; 
  
} 

//функция для старта секундомера
function StartTIME() { 
  var cdateObj = new Date(); 
  var t = (cdateObj.getTime() - dateObj.getTime())-(s*1000); 
  if (t>999) { s++; } 
  if (s>=(m*base)) { 
    ts=0; 
    m++; 
  } else { 
      ts=parseInt((ms/100)+s); 
      if(ts>=base) { ts=ts-((m-1)*base); } 
  } 
  if (m>(h*base)) { 
    tm=1; 
    h++; 
  } else { 
      tm=parseInt((ms/100)+m); 
      if(tm>=base) { tm=tm-((h-1)*base); } 
  } 
  ms = Math.round(t/10); 
  if (ms>99) {ms=0;} 
  if (ms==0) {ms='00';} 
  if (ms>0&&ms<=9) { ms = '0'+ms; } 
  if (ts>0) { ds = ts; if (ts<10) { ds = '0'+ts; }} else { ds = '00'; } 
  dm=tm-1; 
  if (dm>0) { if (dm<10) { dm = '0'+dm; }} else { dm = '00'; } 
  dh=h-1; 
  if (dh>0) { if (dh<10) { dh = '0'+dh; }} else { dh = '00'; } 
  readout = dh + ':' + dm + ':' + ds + '.' + ms; 
  document.MyForm.stopwatch.value = readout; 
  clocktimer = setTimeout("StartTIME()",1); 
} 

//Функция запуска и остановки
function stopWatch() { 
    if (init==0){ 
            ClearСlock();
            dateObj = new Date(); 
            StartTIME(); 
            init=1; 
    } else { 
            clearTimeout(clocktimer);
            init=0;
    } 
} 