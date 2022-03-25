document.addEventListener('click', (e) => {
  if(e.target.dataset.type === 'delete') {
    const id = e.target.getAttribute('data-id')

     removeNote(id).then(() => {
       e.target.closest('li').remove();
     })
  }

  if(e.target.dataset.type === 'change') {
    let answer = prompt('На какое название меняем?')
    if(answer === '') {
      answer = prompt('На какое название меняем? Значение не должно быть пусто.')
    } else if ( answer === null) {
      return;
    }

    const id = e.target.getAttribute('data-id')

    changeNote([id, answer]).then(() => {
      e.target.closest('li').querySelector('span').innerHTML = answer;
    })
  }
})

async function removeNote (id) {
  await fetch(`/${id}`, {
    method: "DELETE"
  })
}

async function changeNote (id) {
  await fetch(`/${id}`, {
    method: "PUT"
  })
}
