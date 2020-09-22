document.addEventListener("DOMContentLoaded", function(){
    const waterbearName = document.getElementById('waterbearName');
    const waterbearAge = document.getElementById('waterbearAge');
    let name = waterbearName.getAttribute('data-name');
    let age = waterbearAge.getAttribute('data-age');
    console.log(name, age);
});