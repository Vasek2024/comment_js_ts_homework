export class BtnClick{
    constructor(
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
    )
    {
this.input = input
this.commentOneElement = commentOneElement
this.avatarElement = avatarElement
this.albertElement = albertElement
this.nikElement = nikElement
this.nomeElement = nomeElement
this.dataElement = dataElement
this.textElement = textElement
this.likeElement = likeElement
this.litterElement = litterElement
this.maskElement = maskElement
this.answerElement = answerElement
this.choiceElement = choiceElement
this.noyActivElement = noyActivElement
this.activElement = activElement
this.favouritesElement = favouritesElement
this.voiceElement = voiceElement
this.minusElement = minusElement
this.numberElement = numberElement
this.plusElement = plusElement
this.okElement = okElement
this.favoritesOkElement = favoritesOkElement
this.favoritesNoyElement = favoritesNoyElement
this.limitElement = limitElement
this.quantityElement = quantityElement
this.btnElement = btnElement
this.limit = 1000
this.numberLimit = 6
this.numberLimitAnswer = 6
this.guestList = []
this.answerList = []
this.answerFotmElement = answerFotmElement
this.answerInputElement = answerInputElement
this.answerButtonElement = answerButtonElement

this.commentTwoElement = commentTwoElement
this.avatarTwoElement = avatarTwoElement
this.albertTwoElement = albertTwoElement
this.nikTwoElement = nikTwoElement
this.nomeTwoElement = nomeTwoElement
this.maskTwoElement = maskTwoElement
this.nikNomeOneElement = nikNomeOneElement
this.dataTwoElement = dataTwoElement
this.textTwoElement = textTwoElement
this.likeTwoElement = likeTwoElement
this.choiceTwoElement = choiceTwoElement
this.noyActivTwoElement = noyActivTwoElement
this.activTwoElement = activTwoElement
this.favouritesTwoElement = favouritesTwoElement
this.voiceTwoElement = voiceTwoElement
this.minusTwoElement = minusTwoElement
this.numberTwoElement = numberTwoElement
this.plusTwoElement = plusTwoElement
this.date = new Date();
    }


// Выпадающий список и замена иконки
nawElement(nawLiElement, imgLiElement){
    this.nawLiElement = nawLiElement
    this.imgLiElement = imgLiElement
    this.nawLiElement.classList.toggle('active')
    this.nawLiElement.classList.toggle('none')
    this.nameClass = this.nawLiElement.className
    if(this.nameClass === 'commentBlock__naw-two active'){
        this.imgLiElement.src = './images/Arrow 1.svg'
               
    } else {
        this.imgLiElement.src = './images/Arrow 2.svg'
    }
}



// Добавляем элементы в DOM дерево при отправке первой формы
    creatsElement(inputText) {
        this.commentOneElement.append(this.avatarElement)
        this.avatarElement.append(this.albertElement)

        this.commentOneElement.append(this.nikElement)
        this.nikElement.append(this.nomeElement)
        this.dataElement.textContent = `${this.date.getDate()}.${this.date.getMonth()} ${this.date.getHours()}:${this.date.getMinutes()}`
        this.nikElement.append(this.dataElement)

        this.textElement.textContent = this.inputText
        this.commentOneElement.append(this.textElement)

        this.commentOneElement.append(this.likeElement)
        this.likeElement.append(this.litterElement)
        this.litterElement.append(this.maskElement)
        this.litterElement.append(this.answerElement)
        this.likeElement.append(this.choiceElement)
        this.choiceElement.append(this.noyActivElement)
        this.choiceElement.append(this.activElement)
        this.choiceElement.append(this.favouritesElement)

        this.likeElement.append(this.voiceElement)
        this.voiceElement.append(this.minusElement)
        this.numberElement.textContent = this.numberLimit
        this.voiceElement.append(this.numberElement)
        this.voiceElement.append(this.plusElement)
    }


    // Добавляем элементы в DOM дерево при отправке второй формы
    creatsTwoElement(answerInputText) {
        this.commentTwoElement.append(this.avatarTwoElement)
        this.avatarTwoElement.append(this.albertTwoElement)

        this.commentTwoElement.append(this.nikTwoElement)
        this.nikTwoElement.append(this.nomeTwoElement)
        this.nikTwoElement.append(this.maskTwoElement)
        this.nikTwoElement.append(this.nikNomeOneElement)
        this.dataTwoElement.textContent = `${this.date.getDate()}.${this.date.getMonth()} ${this.date.getHours()}:${this.date.getMinutes()}`
        this.nikTwoElement.append(this.dataTwoElement)

        this.textTwoElement.textContent = this.answerInputText
        this.commentTwoElement.append(this.textTwoElement)

        this.commentTwoElement.append(this.likeTwoElement)
        this.likeTwoElement.append(this.choiceTwoElement)
        this.choiceTwoElement.append(this.noyActivTwoElement)
        this.choiceTwoElement.append(this.activTwoElement)
        this.choiceTwoElement.append(this.favouritesTwoElement)

        this.likeTwoElement.append(this.voiceTwoElement)
        this.voiceTwoElement.append(this.minusTwoElement)
        this.numberTwoElement.textContent = this.numberLimitAnswer
        this.voiceTwoElement.append(this.numberTwoElement)
        this.voiceTwoElement.append(this.plusTwoElement)
    }
    
   // Стиль кнопки ои заполнения поля ввода коммента
    styleBtn(){
        if(this.input != ''){
            this.btnElement.classList.add('btnOk'); // задаём класс
        } else {
            this.btnElement.classList.remove('btnOk'); // удаляем класс
        }
    }

    // Меняем иконку при нажатии на избранное
    favourites(){
            this.noyActivElement.classList.toggle('active') // добавляем если нету класса или убираем если он есть  класс
            this.noyActivElement.classList.toggle('none')
            this.activElement.classList.toggle('none') 
            this.activElement.classList.toggle('active')
            this.favoritesOkElement.classList.toggle('active')
            this.favoritesOkElement.classList.toggle('none')
            this.favoritesNoyElement.classList.toggle('active')
            this.favoritesNoyElement.classList.toggle('none')
    }

    // Меняем иконку при нажатии на избранное (В ОТВЕТЕ)
    favouritesAnswer(){
        this.noyActivTwoElement.classList.toggle('active') // добавляем если нету класса или убираем если он есть  класс
        this.noyActivTwoElement.classList.toggle('none')
        this.activTwoElement.classList.toggle('none') 
        this.activTwoElement.classList.toggle('active')
}


// Добавляем форму в DOM дерево при ответе
    answer(){
        // this.answerFotmElement.classList('none')
        this.commentOneElement.append(this.answerFotmElement)
        this.answerFotmElement.append(this.answerInputElement)
        this.answerFotmElement.append(this.answerButtonElement)
}

// Проверяем заполнение поля с ответом
// Прячем форму с ответом и выводим сам ответ
answerBtn(){
    let answerInput = document.querySelector(".answer__input").value
    this.answerInput = answerInput
    
    if(this.answerInput === ""){
        alert('Ва забыли написать ответ к комментарию!')
    } else if (this.answerInput.length > 1000) {//  если более 1000 символов, то  (красим в красный Макс. 1000 символов)
        this.quantityElement.textContent = this.answerInput.length // заносим туда введённые значения
        this.okElement.classList.remove('active') // удалили  класс
        this.okElement.classList.add('none') // добавили класс
        this.limitElement.classList.remove('none') // удалили  класс
        this.limitElement.classList.add('active') // добавили класс
        this.limitElement.style.color = "red" // добавили стиль
    } else { // если всё хорошо,
        this.okElement.classList.remove('none') // удалили  класс
        this.okElement.classList.add('active') // добавили класс
        this.limitElement.classList.remove('active') // удалили  класс
        this.limitElement.classList.add('none') // добавили класс
        this.answerFotmElement.remove() // удаляем форму с ответом
        
        localStorage.setItem(answerInput, this.answerInput)
        this.answerInputText = localStorage.getItem(answerInput)
        this.creatsTwoElement(this.answerInputText)
    }
}

    // Выводим сообщение об ошибке ИЛИ сам комментарий
    valueComment(){

        this.styleBtn() // Стиль кнопки ои заполнения поля ввода коммента

        if(this.input === ""){
            alert('Ва забыли написать комментарий!')
        } else if (this.input.length > 1000) {//  если более 1000 символов, то  (красим в красный Макс. 1000 символов)
            this.quantityElement.textContent = this.input.length // заносим туда введённые значения
            this.okElement.classList.remove('active') // удалили  класс
            this.okElement.classList.add('none') // добавили класс
            this.limitElement.classList.remove('none') // удалили  класс
            this.limitElement.classList.add('active') // добавили класс
            this.limitElement.style.color = "red" // добавили стиль
        } else { // если всё хорошо, 
            this.okElement.classList.remove('none') // удалили  класс
            this.okElement.classList.add('active') // добавили класс
            this.limitElement.classList.remove('active') // удалили  класс
            this.limitElement.classList.add('none') // добавили класс
            
            this.guestList.push(this.input) // заносим в массив комментарии
            //  проходим циклом
                for (let i = 0; i < this.guestList.length; i++) {
                    // заносим в localStorage и читаем их
                    localStorage.setItem(i, this.guestList[i])
                        this.inputText = localStorage.getItem(i)
                        // console.log(this.inputText);
                        this.creatsElement(this.inputText) // Добавляем элементы в DOM дерево
                }
        }
    }


    // 
    minus(){
            this.numberLimit = this.numberLimit-1
            this.numberElement.textContent = this.numberLimit
    }
    plus(){
        this.numberLimit = this.numberLimit+1
        this.numberElement.textContent = this.numberLimit
    }

    // 
    minusTwo(){
        this.numberLimit = this.numberLimit-1
        this.numberTwoElement.textContent = this.numberLimit
}
    plusTwo(){
        this.numberLimit = this.numberLimit+1
        this.numberTwoElement.textContent = this.numberLimit
    }
}