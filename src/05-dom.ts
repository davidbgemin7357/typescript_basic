// asumiendo que foo es un input en el html:
const someElement = document.querySelector('.foo') as HTMLInputElement
console.log("someElement", someElement.value);


// ============================
const someElement2 = document.querySelector('.foo')
someElement2.addEventListener("blur", (event) => {
    const target = event.target as HTMLInputElement
    console.log(target.value)
})