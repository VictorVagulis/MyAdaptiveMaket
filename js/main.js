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
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') { span.onclick()
    }
});


// class ItcTabs {
//     constructor(target, config) {
//         const defaultConfig = {};
//         this._config = Object.assign(defaultConfig, config);
//         this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
//         this._elButtons = this._elTabs.querySelectorAll('.characteristics');
//         this._elPanes = this._elTabs.querySelectorAll('.descr');
//         this._eventShow = new Event('tab.itc.change');
//         this._init();
//         this._events();
//     }
//
//     _init() {
//         this._elTabs.setAttribute('role', 'tablist');
//         this._elButtons.forEach((el, index) => {
//             el.dataset.index = index;
//             el.setAttribute('role', 'tab');
//             this._elPanes[index].setAttribute('role', 'tabpanel');
//         });
//     }
//
//     show(elLinkTarget) {
//         const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
//         const elLinkActive = this._elTabs.querySelector('.tabs__btn_active');
//         const elPaneShow = this._elTabs.querySelector('.tabs_pane_show');
//         if (elLinkTarget === elLinkActive) {
//             return;
//         }
//         elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null;
//         elPaneShow ? elPaneShow.classList.remove('tabs_pane_show') : null;
//         elLinkTarget.classList.add('tabs__btn_active');
//         elPaneTarget.classList.add('tabs_pane_show');
//         this._elTabs.dispatchEvent(this._eventShow);
//         elLinkTarget.focus();
//     }
//
//     showByIndex(index) {
//         const elLinkTarget = this._elButtons[index];
//         elLinkTarget ? this.show(elLinkTarget) : null;
//     };
//
//     _events() {
//         this._elTabs.addEventListener('click', (e) => {
//             const target = e.target.closest('.characteristics');
//             if (target) {
//                 e.preventDefault();
//                 this.show(target);
//             }
//         });
//     }
// }
// new ItcTabs('.characteristics-reviews');


let tab = function () {
    let tabNav = document.querySelectorAll('.description'),
           tabContenr = document.querySelectorAll('.descr'),
           tabName;
       tabNav.forEach(item => {item.addEventListener('click',    selectTabNav)});
    function selectTabNav() {
           tabNav.forEach(item => {
               item.classList.remove('tabs_btn_active');
           });
       this.classList.add('tabs_btn_active');
       tabName = this.getAttribute('data-tab-name');
       selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContenr.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('tabs_btn_active') : item.classList.remove('tabs_btn_active');
        })
    }
};

tab();

