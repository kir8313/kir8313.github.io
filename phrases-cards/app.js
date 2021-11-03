'use strict'
window.addEventListener('DOMContentLoaded', () => {
  showCards();
  showManipulations();
  addCard();

  function showCards() {
    fetch('./Phrases.json')
      .then(result => result.json())
      .then((result) => {
        const phrasesColumnOne = document.querySelector('.phrases__inner > div:first-child');
        const phrasesColumnTwo = document.querySelector('.phrases__inner > div:nth-child(2)');
        const phrasesColumnThree = document.querySelector('.phrases__inner > div:nth-child(3)');
        let arrBackgrounds = ['#5162c3', '#c2245e', '#b201fe', '#05c3db', '#e85b26', '#feac00']
        let arrayFiveElem = [];
        let arrayForTwoColumn = [];
        let arrayForThreeColumn = [];
        let randomNum = getRandomNumber(3, 5);

        // add card to second and third columns
        result.forEach((item, index) => {
          if (index < randomNum) {
            arrayFiveElem.push(item);
          } else if (index < Math.round((result.length - randomNum) / 2) + randomNum) {
            arrayForTwoColumn.push(item);
          } else {
            arrayForThreeColumn.push(item);
          }
        })

        sortCard(arrayFiveElem);
        sortCard(arrayForTwoColumn);
        sortCard(arrayForThreeColumn);

        function sortCard(array) {
          array.sort((a, b) => {
            let firstLength = a.sourceText.length;
            let secondLength = b.sourceText.length;

            if (firstLength > secondLength) return -1;
            if (firstLength < secondLength) return 1;
          })
        }

        pushInHtml(phrasesColumnOne, arrayFiveElem)
        pushInHtml(phrasesColumnTwo, arrayForTwoColumn)
        pushInHtml(phrasesColumnThree, arrayForThreeColumn)

        function pushInHtml(column, array, colors = arrBackgrounds) {
          column.innerHTML = array.map(item => `
          <button class="phrases-item" style="background: ${colors[getRandomNumber(0, colors.length - 1)]};">
            <h3 class="phrases-item__title">${item.theme}</h3>
            <p class="phrases-item__texts">
              <span class="phrases-item__text phrases-item__text_eu">${item.sourceText}</span>
              <span class="phrases-item__text phrases-item__text_ru">${item.translation}</span>
            </p>
          </button>
        `).join('');
        }

      })
  }


  function showManipulations() {
    const inner = document.querySelector('.phrases__inner');
    let timeOut;

    // add translate
    inner.addEventListener('click', (event) => {
      const { target } = event;
      const phrasesItem = target.closest('.phrases-item');

      if (phrasesItem && !phrasesItem.classList.contains('--active')) {
        phrasesItem.classList.add('--active');
        timeOut = setTimeout(() => {
          phrasesItem.classList.remove('--active');
        }, 10000);
      } else if (phrasesItem) {
        phrasesItem.classList.remove('--active');
        clearTimeout(timeOut);
      }
    })

    // removeElement
    inner.addEventListener('dblclick', (event) => {
      const { target } = event;
      const phrasesItem = target.closest('.phrases-item');

      if (phrasesItem) phrasesItem.remove();
    })
  }

  function addCard() {
    const createBtn = document.querySelector('.phrases-form__btn');
    const phrasesColumnThree = document.querySelector('.phrases__inner > div:nth-child(3)');

    createBtn.addEventListener('click', (e) => {
      e.preventDefault();

      const textAreas = document.querySelectorAll('.phrases-form__area');
      const phrasesForm = document.querySelector('.phrases-form');
      const theme = document.querySelector('#input-theme')
      const sourceText = document.querySelector('#input-eu')
      const translation = document.querySelector('#input-ru')
      let errorCount = 0;

      textAreas.forEach(area => {
        if (area.value === '') {
          if (!document.querySelector('.error-message')) {
            phrasesForm.insertAdjacentHTML('beforebegin', '<p class="error-message">Все поля должны быть заполнены</p>');
          } else {
            document.querySelector('.error-message').innerHTML = 'Все поля должны быть заполнены';
          }

          area.classList.add('--error');
          errorCount++;
        } else if (area.value !== '') area.classList.remove('--error');
      })

      phrasesColumnThree.querySelectorAll('.phrases-item').forEach(item => {
        if (item.querySelector('.phrases-item__title').textContent === theme.value) {
          if (!document.querySelector('.error-message')) {
            phrasesForm.insertAdjacentHTML('beforebegin', '<p class="error-message">Карточка с такой темой уже существует.</p>');
          } else {
            document.querySelector('.error-message').innerHTML = 'Карточка с такой темой уже существует.';
          }
          textAreas[0].classList.add('--error');
          errorCount++
        }
      });

      if (errorCount === 0) {
        if (document.querySelector('.error-message')) document.querySelector('.error-message').remove();
        createTask(theme, sourceText, translation);
      }

      function createTask(theme, sourceText, translation) {
        let task = `
        <button class="phrases-item">
          <h3 class="phrases-item__title">${theme.value}</h3>
          <p class="phrases-item__texts">
            <span class="phrases-item__text phrases-item__text_eu">${sourceText.value}</span>
            <span class="phrases-item__text phrases-item__text_ru">${translation.value}</span>
          </p>
        </button>
        `;

        phrasesColumnThree.insertAdjacentHTML("beforeend", task);
        textAreas.forEach(area => {
          area.value = ''
          area.classList.remove('--error')
        });
      }
    })
  }
  function getRandomNumber(min = 0, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
})

