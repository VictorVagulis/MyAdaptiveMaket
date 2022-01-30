let modal = document.getElementById("myModal");
let btn = document.getElementById("product-button");
let span = document.getElementsByClassName("close")[0];
let button = document.getElementsByClassName( "btnCancelOk")[0];
let button2 = document.getElementsByClassName("btnCancelOk-1")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
button.onclick = function () {
    modal.style.display = "none";
}
button2.onclick = function () {
    modal.style.display = "none";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { span.onclick()
    }
});

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
