// import { BtnClick } from './jsClass/BtnClick.js'


export class FavouritesClick{
    constructor(){

    }
    td(){
        console.log(this.noyActivElement);
        this.noyActivElement.classList.remove('active') // удалили  класс
        this.noyActivElement.classList.add('none') // добавили класс
        this.activElement.classList.remove('none') // удалили  класс
        this.activElement.classList.add('active') // добавили класс
}
}