// asumiendo que foo es un input en el html:
var someElement = document.querySelector('.foo');
console.log("someElement", someElement.value);
// ============================
var someElement2 = document.querySelector('.foo');
someElement2.addEventListener("blur", function (event) {
    var target = event.target;
    console.log(target.value);
});
