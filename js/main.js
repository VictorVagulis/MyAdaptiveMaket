//modalWindow

let modal = document.getElementById("myModal");
let btn = document.getElementById("product-button");
let span = document.querySelector(".close");
let button = document.querySelector( ".btnCancelOk");
let button2 = document.querySelector(".btnCancelOk-1");

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
         let currentBtn = item;
         let tabCont = currentBtn.getAttribute("data_tab");
         let cont = document.querySelector(tabCont);

         if ( ! currentBtn.classList.contains('active')){

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

