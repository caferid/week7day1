// localStorage.setItem('name', 'ferid')
// localStorage.setItem('username', 'fa')
// localStorage.setItem('suername', 'aqamaliyev')
// localStorage.setItem('password', '123')

// let n = localStorage.getItem('name')
// console.log(n);
// let u = localStorage.getItem('username')
// console.log(u);
// let s = localStorage.getItem('suername')
// console.log(s);
// let pas = localStorage.getItem('password')
// console.log(pas);

// document.getElementById('p').innerHTML = `${n} <br> ${u} <br>${s} <br>${pas}`
let buton = document.getElementById("but");
let ad = document.getElementById("ad");
let body = document.querySelector(".container");
let arr = [];
window.onload = () => {
    arr = JSON.parse(localStorage.getItem("data"));
    if (arr) {
        arr.forEach((element) => {
            let ul = document.createElement("ul");
            let li = document.createElement("li");
            let chek = document.createElement("input");
            // let del = document.createElement('del')
            chek.type = "checkbox";
            // console.log(chek);
            li.textContent = element;
            body.append(ul);
            ul.append(li);
            li.append(chek);
            // chek.addEventListener("click", () => {
            //     li.classList.toggle("list");
            // });
        });
    }
};
buton.addEventListener("click", () => {
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let chek = document.createElement("input");
    // let del = document.createElement('del')
    chek.type = "checkbox";
    // console.log(chek);
    li.textContent = ad.value;
    body.append(ul);
    ul.append(li);
    li.append(chek);
    chek.addEventListener("click", () => {
        li.classList.toggle("list");
    });
    console.log(arr);
    arr.push(ad.value);
    localStorage.setItem("data", JSON.stringify(arr));

    ad.value = "";
});



// document.getElementById("forlocal").innerHTML = localStorage.setItem(JSON.stringify('.container'));
// // document.getElementById("forlocal").innerHTML = localStorage.getItem(JSON.stringify('.container'));
// // let variables = JSON.parse(localStorage.getItem("vars"));