const guestList = []
const button = document.querySelector('.form__input-button')

// клик по кнопке
button.addEventListener('click', function() {
    // поле ввода данных
    let input = document.querySelector(".form__input-text").value
// если ничего не ввёл, то алерт
    if(input === ""){
        alert('Ва забыли написать комментарий!')
        //  если более 1000 символов, то  (красим в красный Макс. 1000 символов)
    } else if(input.length > 1000){


        // ---ПОВТОРЯЕТСЯ-----------------------
        const errorOk = document.querySelector('.form__error-ok'), // Макс. 1000 символов
            errorLimit = document.querySelector('.form__error-limit'), // /1000 Слишком длинное сообщение
            errorQuantity = document.querySelector('.form__error-quantity'), // поле под коллсчество введённых символов
            inputlength = +input.length // коллсчество введённых символов

            errorOk.classList.remove('active') // удалили  класс
            errorOk.classList.add('none') // добавили класс
            errorLimit.classList.remove('none') // удалили  класс
            errorLimit.classList.add('active') // добавили класс
            errorLimit.style.color = "red" // добавили стиль

            errorQuantity.textContent = inputlength // заносим туда введённые значения
// ----------------------------------------------------------

        
    } else{// если всё хорошо, то


        // ---ПОВТОРЯЕТСЯ-----------------------
        const errorOk = document.querySelector('.form__error-ok'), // Макс. 1000 символов
            errorLimit = document.querySelector('.form__error-limit'), // /1000 Слишком длинное сообщение
            errorQuantity = document.querySelector('.form__error-quantity'), // поле под коллсчество введённых символов
            inputlength = +input.length // коллсчество введённых символов

            errorOk.classList.remove('none') // удалили  класс
            errorOk.classList.add('active') // добавили класс
            errorLimit.classList.remove('active') // удалили  класс
            errorLimit.classList.add('none') // добавили класс
            // errorLimit.style.color = "red" // добавили стиль

            errorQuantity.textContent = inputlength // заносим туда введённые значения
// ----------------------------------------------------------


        // поле с первым комментарием
        const commentOneText = document.querySelector('.commentOne__text')
        // заносим в массив комментарии
        guestList.push(input)
        //  проходим циклом
for (let i = 0; i < guestList.length; i++) {
    // заносим в localStorage и читаем их
    localStorage.setItem(i, guestList[i])
        inputText = localStorage.getItem(i)
  }
//   создаём параграф
        let newDiv = document.createElement('p');
        // задаём класс
            newDiv.className = 'newP';
            // заносим туда введённые значения
            newDiv.textContent = inputText
            // добавляем новый параграф в конец общего блока с комментариями
            commentOneText.appendChild(newDiv);
    }
  });
