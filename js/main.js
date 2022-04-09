//modalWindow

const modal = document.getElementById("myModal");
const btn = document.getElementById("product-button");
const span = document.querySelector(".close");
const button = document.querySelector( ".btn-cancel");
const button2 = document.querySelector(".btn-ok");

btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}
const close = () => {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
}
button.onclick = close
button2.onclick = close
span.onclick = close
document.body.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "visible";
    }
}
document.body.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        span.onclick()
    }
});


//accordion


const tab = document.querySelectorAll(".characteristics");
const tCont = document.querySelectorAll(".descr");

tab.forEach(function (item) {
     item.addEventListener("click", function () {
         const currentBtn = item;
         const tabCont = currentBtn.getAttribute("data-tab");
         const cont = document.querySelector(tabCont);

         if (! currentBtn.classList.contains('active')){

         tab.forEach(function (item) {
            item.classList.remove('active');
         });
         tCont.forEach(function (item) {
            item.classList.remove('active');
         });

         currentBtn.classList.add('active');
         cont.classList.add('active');
         }
     });
});


//slideShow
const container = document.querySelector(".product-slider");
const track = document.querySelector(".best-groods_products");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const items = document.querySelectorAll(".product-cell");
const itemsCount = items.length;
let slidesToShow = 4;
let slidesToScroll = 1;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
let position = 0;



items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft > slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    });

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft > slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
});
const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
    checkBtns();
};
const checkBtns = () => {

    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    btnPrev.disabled = position === 0;

    btnNextDis();
};

const btnNextDis = () => {
    if (btnNext.disabled) {
        btnNext.classList.remove('btn-next');
    } else {
        btnNext.classList.add('btn-next');
    }
    if (btnPrev.disabled) {
        btnPrev.classList.remove('btn-prev');
    } else {
        btnPrev.classList.add('btn-prev');
    }
};

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    if (burger.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else
        document.body.style.overflow = 'visible';
})






                                                                    

