'use strict'

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark')
var className = document.body.className;
if(className == "light"){
    this.textContent = "Dark";
} 
else{
    this.textContent = "Light";
}
console.log('current class name: ' + className);
});
