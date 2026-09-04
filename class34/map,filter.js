let student = {
    name : "varad",
    rollNo : 34,
    subject : ["math", "english", "hindi"],
}

// let {subject, rollNo, name } = student
// console.log(subject)

// how to rename key

let {subject : vishay , ...variable } = student
// subject -> vishay
// console.log(vishay);
// console.log(subject)

let obj1 = {
name : "nisha",
phone : 5566655
}
let obj2 = {
  address: "india",
  adharCard:  56555555
}
let obj3 = {...obj1 , ...obj2}
console.log(obj3)