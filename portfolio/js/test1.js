const DATA=[{question:'Вопрос 1',answers:[{id:'1',value:"Ответ 1",correct:true},{id:'2',value:"Ответ 2",correct:false},{id:'3',value:"Ответ 3",correct:false},]},{question:'Вопрос 2',answers:[{id:'4',value:"Ответ 4",correct:false},{id:'5',value:"Ответ 5",correct:true},]},{question:'Вопрос 3',answers:[{id:'6',value:"Ответ 6",correct:false},{id:'7',value:"Ответ 7",correct:true},{id:'8',value:"Ответ 8",correct:false},]},];let localResults={};const quiz=document.getElementById('quiz');const questions=document.getElementById('questions'); const indicator=document.getElementById('indicator'); const results=document.getElementById('results'); const btnNext=document.querySelector('.btn__next');const btnRestart=document.querySelector('.btn__restart');const renderQuestions=(index)=>{renderIndicator(index+1);questions.dataset.currentStep=index;const renderAnswers=()=>DATA[index].answers.map((answer)=>`<li><label><input class="answer__input"type="radio"name=${index}value=${answer.id}>${answer.value}</label></li>`).join('');questions.innerHTML=`<div class="questions-quiz__item"><div class="questions-quiz__item_question">${DATA[index].question}</div><ul class="questions-quiz__item_answers">${renderAnswers()}</ul></div>`;};const renderResults=()=>{let content='';const getClassname=(answer,questionIndex)=>{let classname='';if(!answer.correct&&answer.id===localResults[questionIndex]){classname='answer--false';}else if(answer.correct){classname='answer--true';} return classname;}; const getAnswers=(questionIndex)=>DATA[questionIndex].answers.map((answer)=>`<li class=${getClassname(answer,questionIndex)}>${answer.value}</li>`).join('');DATA.forEach((question,index)=>{content+=`<div class="results-quiz__item"><div class="results-quiz__item_question">${question.question}</div><ul class="results-quiz__item_answers">${getAnswers(index)}</ul></div>`;}); results.innerHTML=content;};const renderIndicator=(currentStep)=>{indicator.innerHTML=`${currentStep}/${DATA.length}`;};quiz.addEventListener('change',(event)=>{if(event.target.classList.contains('answer__input')){localResults[event.target.name]=event.target.value;btnNext.disabled=false;}}); quiz.addEventListener('click',(event)=>{if(event.target.classList.contains('btn__next')){if(DATA.length===+questions.dataset.currentStep+1){questions.classList.add('questions--hidden');indicator.classList.add('indicator--hidden');results.classList.add('results--visible');btnNext.classList.add('btnNext--hidden');btnRestart.classList.add('btnRestart--visible');renderResults();}else{renderQuestions(+questions.dataset.currentStep+1);} btnNext.disabled=true;} if(event.target.classList.contains('btn__restart')){localResults={};results.innerHTML='';questions.classList.remove('questions--hidden');indicator.classList.remove('indicator--hidden');results.classList.remove('results--visible');btnNext.classList.remove('btnNext--hidden');btnRestart.classList.remove('btnRestart--visible');renderQuestions(0);}}); renderQuestions(0);