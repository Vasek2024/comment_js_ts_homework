class NewComment{
    constructor(button){
        this.button = button
        // this.limit = 1000
        // this.input = input
    }
    

    ButtonClick(){
this.button = document.querySelector('.form__input-button')
    }
}
let f = new NewComment(document.querySelector('.form__input-button'))
// console.log(f);





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
       
        //  newNode = document.createElement("span");
        
        // commentBlockForm = document.querySelector('.commentBlock__form').parentNode
// let commBlockForm = document.querySelector('.commentBlock__commentOne')
        // ---ПОВТОРЯЕТСЯ-----------------------
        const errorOk = document.querySelector('.form__error-ok'), // Макс. 1000 символов
            errorLimit = document.querySelector('.form__error-limit') // /1000 Слишком длинное сообщение
            
            errorOk.classList.remove('none') // удалили  класс
            errorOk.classList.add('active') // добавили класс
            errorLimit.classList.remove('active') // удалили  класс
            errorLimit.classList.add('none') // добавили класс
            // errorLimit.style.color = "red" // добавили стиль



            const formSamsung = document.querySelector('.form__avatar-samsung').src, // картинкка бородатого
                                formNome = document.querySelector('.form__nik-nome').innerHTML, // Максим
                                formSurname = document.querySelector('.form__nik-surname').innerHTML, // Авдеенко
                                commentOneNomeElement = document.querySelector('.commentOne__nik-nome')  // Блок под Имя (nik)
            commentOneNomeElement.textContent = `${formNome} ${formSurname}` // Вставляем ник (Максим Авдеенко)

            let commentOneAlbertElement = document.querySelector('.commentOne__avatar-albert') // Картинка с аватаркой
            commentOneAlbertElement.src = formSamsung // Вставляем  картинкку бородатого

            inputButtonElement = document.querySelector('.form__input-button') // кнопка
            inputButtonElement.classList.add('btnOk'); // задаём класс
            // inputButtonElement.style.color = "#00"
            // inputButtonElement.style.backgroundColor = "#ABD873"

// ----------------------------------------------------------



         // поле с первым комментарием
         const commentOneText = document.querySelector('.commentOne__text'),
         q = document.querySelector('.q')
        //  let commentBlock = document.querySelector('.commentBlock__commentOne')
         // заносим в массив комментарии
         guestList.push(input)
         //  проходим циклом
 for (let i = 0; i < guestList.length; i++) {
     // заносим в localStorage и читаем их
     localStorage.setItem(i, guestList[i])
         inputText = localStorage.getItem(i)
        //  console.log(commentBlock);
        // commentOneText.appendChild(commentBlock);
        let commentBlock = document.querySelector('.commentBlock__commentOne')
        // localDOM.setItem(i, commentBlock[i])
        // inputDOM = localDOM.getItem(i)
        // q.appendChild(commentBlock);
   }


//    commentBlock.forEach((p => {    
//     commentOneText.appendChild(p);
//   }))
 //   создаём параграф
         let newDiv = document.createElement('p');
         // задаём класс
             newDiv.className = 'newP';
             // заносим туда введённые значения
             newDiv.textContent = inputText
             // добавляем новый параграф в конец общего блока с комментариями
             commentOneText.appendChild(newDiv);
            //  q.appendChild(inputDOM);
            // console.log(commentBlock);
            
    }
  });