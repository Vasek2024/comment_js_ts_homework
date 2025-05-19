import { BtnClick } from './jsClass/BtnClick.js'
import { FavouritesClick } from './jsClass/FavouritesClick.js'


// let input = document.querySelector(".form__input-text").value


let commentOneElement = document.querySelector('.commentBlock__commentOne') // Общий Блок полд новые комменты


// let commentOneElement = document.createElement('div') // Общий Блок полд новые комменты
// commentOneElement.className = 'commentBlock__newComments'

// let commentOneElement = document.createElement('div') // Общий блок с первым комментом
// commentOneElement.className = 'commentBlock__commentOne'

let avatarElement = document.createElement('div') // Общий блок под аватарку
avatarElement.className = 'commentOne__avatar'

let albertElement = document.createElement('img') // Картинка с аватаркой
albertElement.className = 'commentOne__avatar-albert'
albertElement.src = "./images/samsung-memory-hjRC0i0oJxg-unsplash 1.jpg"

let nikElement = document.createElement('div') // Общий блок под имя и дату
nikElement.className = 'commentOne__nik'

let nomeElement = document.createElement('span') // Блок под имя
nomeElement.className = 'commentOne__nik-nome'
nomeElement.textContent = 'Максим Авдеенко'

let dataElement = document.createElement("span") // Блок под дату
dataElement.className = 'commentOne__nik-data'
dataElement.textContent = '15.01 13:55'

let textElement = document.createElement('div') // Блок под сам комментарий
textElement.className = 'commentOne__text'

let likeElement = document.createElement("div") // Одщий блок под (Ответить. В избранном. Рейтинг)
likeElement.className = 'commentOne__like'

let litterElement = document.createElement('div') // Блок под (Ответить)
litterElement.className = 'commentOne__like-litter'

let maskElement = document.createElement("img") // иконка со стрелочкой
maskElement.className = 'commentOne__like-mask'
maskElement.src = "./images/Mask group(1).svg"

let answerElement = document.createElement("span") // Ответить
answerElement.className = 'commentOne__like-answer'
answerElement.innerText = 'Ответить'

let choiceElement = document.createElement('div') // Общий блок 
choiceElement.className = 'commentOne__like-choice'

let noyActivElement = document.createElement('img') // Не активное сердечко
noyActivElement.className = 'commentOne__like-noyActiv activ'
noyActivElement.src = "./images/Mask group(2).svg"

let activElement = document.createElement('img') // активное сердечко
activElement.className = 'commentOne__like-activ none'
activElement.src = "./images/Mask group.svg"

let favouritesElement = document.createElement('span') // В избранном
favouritesElement.className = 'commentOne__like-favourites'
favouritesElement.innerText = 'В избранном'

let voiceElement = document.createElement('div') // Общий блок под рейтинг
voiceElement.className = 'commentOne__like-voice'

let minusElement = document.createElement('img') // -
minusElement.className = 'commentOne__voice-minus'
minusElement.src = "./images/-.svg"

let numberElement = document.createElement('span') // рейтинг
numberElement.className = 'commentOne__voice-number'

let plusElement = document.createElement('img') // +
plusElement.className = 'commentOne__voice-plus'
plusElement.src = "./images/+.svg"



// Для фотмы под ответ
let answerFotmElement = document.createElement('div') // 
answerFotmElement.className = 'answer__form'

let answerInputElement = document.createElement('input') // 
answerInputElement.className = 'answer__input'

let answerButtonElement = document.createElement('button') // 
answerButtonElement.className = 'answer__button'
answerButtonElement.innerText = 'Ответить'



// Ответ на комментарий
let commentTwoElement = document.querySelector('.commentBlock__commentTwo') // Общий Блок под комментарий с ответом

let avatarTwoElement = document.createElement('div') // Общий блок под аватарку
avatarTwoElement.className = 'commentTwo__avatar'

let albertTwoElement = document.createElement('img') // Картинка с аватаркой
albertTwoElement.className = 'commentTwo__avatar-mubariz'
albertTwoElement.src = "./images/mubariz-mehdizadeh-Py8F6-hRn5o-unsplash.jpg"

let nikTwoElement = document.createElement('div') // Общий блок под имя от кого ответ и дату
nikTwoElement.className = 'commentTwo__nik'

let nomeTwoElement = document.createElement('span') // Блок под имя
nomeTwoElement.className = 'commentTwo__nik-nome'
nomeTwoElement.textContent = 'Джунбокс3000'

let maskTwoElement = document.createElement('img') // Стрелочка послн ответа ДОДЕЛКАТЬ
maskTwoElement.className = 'commentTwo__nik-mask'
maskTwoElement.src = "./images/Mask group(1).svg"

let nikNomeOneElement = document.createElement("span") // Блок под имя на чей коммент был сделан ответ
nikNomeOneElement.className = 'commentTwo__nik-nomeOne'
nikNomeOneElement.textContent = 'Максим Авдеенко'

let dataTwoElement = document.createElement("span") // Блок под дату
dataTwoElement.className = 'commentTwo__nik-data'
dataTwoElement.textContent = '15.01 13:55'

let textTwoElement = document.createElement('div') // Блок под сам комментарий
textTwoElement.className = 'commentTwo__text'

let likeTwoElement = document.createElement("div") // Одщий блок под (В избранном. Рейтинг)
likeTwoElement.className = 'commentTwo__like'

let choiceTwoElement = document.createElement('div') // Блок под (В избранном)
choiceTwoElement.className = 'commentTwo__like-choice'

let noyActivTwoElement = document.createElement('img') // Не активное сердечко
noyActivTwoElement.className = 'commentTwo__like-noyActiv none'
noyActivTwoElement.src = "./images/Mask group(2).svg"

let activTwoElement = document.createElement('img') // активное сердечко
activTwoElement.className = 'commentTwo__like-activ activ'
activTwoElement.src = "./images/Mask group.svg"

let favouritesTwoElement = document.createElement('span') // В избранном
favouritesTwoElement.className = 'commentTwo__like-favourites'
favouritesTwoElement.innerText = 'В избранном'

let voiceTwoElement = document.createElement('div') // Общий блок под рейтинг
voiceTwoElement.className = 'commentTwo__like-voice'

let minusTwoElement = document.createElement('img') // -
minusTwoElement.className = 'commentTwo__voice-minus'
minusTwoElement.src = "./images/-.svg"

let numberTwoElement = document.createElement('span') // рейтинг
numberTwoElement.className = 'commentTwo__voice-number'

let plusTwoElement = document.createElement('img') // +
plusTwoElement.className = 'commentTwo__voice-plus'
plusTwoElement.src = "./images/+.svg"





// =============================================

let favoritesOkElement = document.querySelector('.commentBlock__favorites-ok'), // Избранное (в верхнем меню)
    favoritesNoyElement = document.querySelector('.commentBlock__favorites-noy') // Избранное (в верхнем меню)



const okElement = document.querySelector('.form__error-ok'), // Макс. 1000 символов
        limitElement = document.querySelector('.form__error-limit'), // /1000 Слишком длинное сообщение
        quantityElement = document.querySelector('.form__error-quantity') // поле под коллсчество введённых символов
        // inputlengthElement = +input.length // коллсчество введённых символов

        // quantityElement.textContent = inputlengthElement // заносим туда введённые значения

            // okElement.classList.remove('active') // удалили  класс
            // okElement.classList.add('none') // добавили класс
            // limitElement.classList.remove('none') // удалили  класс
            // limitElement.classList.add('active') // добавили класс
            // limitElement.style.color = "red" // добавили стиль

            



    const btnElement = document.querySelector('.form__input-button')
    // errorOk = document.querySelector('.form__error-ok'), // Макс. 1000 символов
    // errorLimit = document.querySelector('.form__error-limit'), // /1000 Слишком длинное сообщение
    // errorQuantity = document.querySelector('.form__error-quantity'), // поле под коллсчество введённых символов
    // // let inputlength = +input.length // коллсчество введённых символов
    // // formSamsung = document.querySelector('.form__avatar-samsung').src, // картинкка бородатого
    // formNome = document.querySelector('.form__nik-nome').innerHTML, // Максим
    // formSurname = document.querySelector('.form__nik-surname').innerHTML // Авдеенко
    // if(input != ''){
    //     btnElement.classList.add('btnOk'); // задаём класс
    //             }
    // console.log(input)

    btnElement.addEventListener('click', function(evt) {
        let input = document.querySelector(".form__input-text").value
        // console.log(input);
        let app = new BtnClick(
            input,
            commentOneElement,
            avatarElement,
            albertElement,
            nikElement,
            nomeElement,
            dataElement,
            textElement,
            likeElement,
            litterElement,
            maskElement,
            answerElement,
            choiceElement,
            noyActivElement,
            activElement,
            favouritesElement,
            voiceElement,
            minusElement,
            numberElement,
            plusElement,
            okElement,
            favoritesOkElement,
            favoritesNoyElement,
            limitElement,
            quantityElement,
            btnElement,
            answerFotmElement,
            answerInputElement,
            answerButtonElement,
            // Ответ на комментарий
            commentTwoElement,
            avatarTwoElement,
            albertTwoElement,
            nikTwoElement,
            nomeTwoElement,
            maskTwoElement,
            nikNomeOneElement,
            dataTwoElement,
            textTwoElement,
            likeTwoElement,
            choiceTwoElement,
            noyActivTwoElement,
            activTwoElement,
            favouritesTwoElement,
            voiceTwoElement,
            minusTwoElement,
            numberTwoElement,
            plusTwoElement
        );
app.valueComment()

// При кликк по вкладке В избранное
favouritesElement.addEventListener('click', function(evt) {
    app.favourites()
})

// При клике по ссылке Ответить
    answerElement.addEventListener('click', function(evt) {
        // let answerInput = document.querySelector(".answer__input").value
            app.answer()
    }) 

    // При клике по кнопке Ответить
    answerButtonElement.addEventListener('click', function(evt) {
        // let answerInput = document.querySelector(".answer__input").value
            app.answerBtn()
    })

    // При кликк по вкладке В избранное (В ОТВЕТЕ)
    favouritesTwoElement.addEventListener('click', function(evt) {
        // let answerInput = document.querySelector(".answer__input").value
            app.favouritesAnswer()
    })

    // При клике по -
    minusElement.addEventListener('click', function(evt) {
        app.minus()
    })

    // При клике по +
    plusElement.addEventListener('click', function(evt) {
        app.plus()
    })

    // При клике в ответем по -
    minusTwoElement.addEventListener('click', function(evt) {
        app.minusTwo()
    })

    // При клике в ответем по +
    plusTwoElement.addEventListener('click', function(evt) {
        app.plusTwo()
    })
})