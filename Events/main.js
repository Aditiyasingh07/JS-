const sec = document.querySelector("#second");
const third = document.querySelector("#third");
const forth = document.querySelector("#forth");
const fifth = document.querySelector("#fifth");
const sixth = document.querySelector("#sixth");
const seventh = document.querySelector("#seventh");
const eighth = document.querySelector("#eighth");

//attachEvent()
//jQuery

//type, timestamp, preventDafault, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY,altkey, ctrlkey, shiftkey, keycode

// click event
// document.querySelector("#first").addEventListener("click", function (e) {
//   console.log("First img clicked!");
//   e.stopPropagation(true); // stops the bubbling of an event up the DOM tree.
// });

// document.querySelector("#main").addEventListener("click", function () {
//   console.log("Clicked inside the ul!");
// });

// document.querySelector('#google').addEventListener('click' , function(a) {
//     console.log("clicked Google!");
//     a.preventDefault()
//     a.stopPropagation()
// })

// Removeing Img
// document.querySelector("#second").addEventListener("click", function () {
//   const sec = document.querySelector("#second");
//   sec.style.display = "none";
//   console.log("hello");
// });

// Removeing img
document.querySelector("#main").addEventListener("click", function (a) {
    if (a.target.tagName == 'IMG'){
        let target = a.target.parentNode;
        target.remove()
    }
//   target.parentNode.removeChild(target);
});
