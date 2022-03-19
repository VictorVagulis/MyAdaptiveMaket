//modalWindow

const modal = document.getElementById("myModal");
const btn = document.getElementById("product-button");
const span = document.querySelector(".close");
const button = document.querySelector( ".btn-cancel");
const button2 = document.querySelector(".btn-ok");

btn.onclick = function() {
    modal.style.display = "block";
}
const close = () => {
    modal.style.display = "none";
}
button.onclick = close
button2.onclick = close
span.onclick = close
document.body.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
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

let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector(".product-slider");
const track = document.querySelector(".best-groods_products");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const items = document.querySelectorAll(".product-cell");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

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


//other






                                                                    

