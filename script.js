
let viewport = document.getElementById("viewport").offsetWidth;/*возвращает ссылку на первый объект*/

let btnNext = document.getElementById("next");/*действие кнопки вперед*/

let btnPrev = document.getElementById("prev");/*действие кнопки назад*/

let slider = document.querySelector("div.slider");

let viewSliders = document.querySelectorAll(".viewSlide");

let viewSlide = 0; /*показывает начальный слайд*/
 

viewSliders[0].style.backgroundColor = "green";/*зеленый цвет указателя номера слайдера*/
 

btnNext.addEventListener("click", function () { /*запуск события в ответ на клик*/
    
    viewSliders[viewSlide].style.backgroundColor = "grey";
   
    if (viewSlide < 4) {
        viewSlide++;
    } else { 
        viewSlide = 0;
    }
    
    viewSliders[viewSlide].style.backgroundColor = "green";
   
    slider.style.left = -viewSlide * viewport + "px";/*интерактивно меняет цвета указателя номера слайдера с серго на зеленый при переключении вперед*/
});
 

btnPrev.addEventListener("click", function () { /*запуск события в ответ на клик*/
   
    viewSliders[viewSlide].style.backgroundColor = "grey";
   
    if (viewSlide > 0) { 
       
        viewSlide--; 
    } else { 
        
        viewSlide = 4; 
    }
    
    viewSliders[viewSlide].style.backgroundColor = "green";
    
    slider.style.left = -viewSlide * viewport + "px"; /*интерактивно меняет цвета указателя номера слайдера с серго на зеленый при переключении назад*/
});