
// let h1 = document.getElementById("h1")
// let h1 = document.querySelector("h1")
// let h1 = document.querySelector(".h1")
// let h1 = document.querySelector("#h1")

// let h1 = document.querySelectorAll("#h1")
// console.log(h1);

// let p = document.querySelector("#desc")


// // p.textContent = "<h2> Hello dostooo </h2>"
// p.innerHTML = "<h2> Hello dostooo </h2>" // very very risky
// console.log(p);



// Creating, Appending, &Removing Element


// let div = document.createElement("div")
// let div2 = document.createElement("div")

// // console.log(div);

// div.textContent = "Hello"
// div2.textContent = "Hello22"

// let body = document.querySelector("body")

// // body.appendChild(div)
// // body.appendChild(div2)

// // body.append(div , div2)  //insert in last in body
// body.prepend(div , div2)  //insert in star of body


let products = [
    {
        name: "Iphone 20",
        price: 12552634
    },
    {
        name: "Sumsung 25",
        price: 1255524
    },
    {
        name: "MI 30",
        price: 12634
    },
    {
        name: "Poco 10",
        price: 5534
    },
    {
        name: "Lava 10",
        price: 1234
    },
]

let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("p")
    card.textContent = `${product.name} - ${product.price}`
    productList.append(card)

})