let body = document.querySelector('form')
let buton = document.getElementById('but')
let n = document.getElementById('name')
let p = document.getElementById('password')




buton.addEventListener('click', () => {
    const obj = {
        name: n.value,
        password: p.value,
    }
    localStorage.setItem("data", JSON.stringify(obj))


})
window.onload = () => {
    let data12 = JSON.parse(localStorage.getItem('data'))
    console.log(data12);
    if (data12) {
        n.value = data12.name
        p.value = data12.password
    }
}