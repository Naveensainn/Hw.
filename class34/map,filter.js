let student = {
  name: "varad",
  rollNo: 34,
  subject: ["math", "english", "hindi"],
}

// let {subject, rollNo, name } = student
// console.log(subject)

// how to rename key

let { subject: vishay, ...variable } = student
// subject -> vishay
// console.log(vishay);
// console.log(subject)

// let obj1 = {
// name : "nisha",
// phone : 5566655
// }
// let obj2 = {
//   address: "india",
//   adharCard:  56555555
// }
// let obj3 = {...obj1 , ...obj2}
// console.log(obj3)

let arr1 = [1, 2, 3, 4, 5, 6,]

// arr1[2] = undefined
// arr1.splice(2,2)  delete
// arr1.splice(3, 0,"hello") // add
arr1.splice(3, 1, "replace") // replace
// console.log(arr1);

let arr3 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10, 11]]]

// // console.log(arr3);
// console.log(arr3.flat());
// console.log(arr3.flat(Infinity));


let arr4 = [4, 5, 88, 66, 55, 33]

let arrCopy = arr4;
let arrCopy2 = [...arr4];

arrCopy.pop()

// console.log("arr4",arr4);
// console.log("arrCopy2",arrCopy2);





// Map , filter and reduce in js


let originalPrices = [463, 654, 2346]
let discountedPrices = []

// long way


for (value of originalPrices) {
  discountedPrices.push(value * 0.9) //10% discount
}

console.log(originalPrices);
console.log(discountedPrices);

// eagy way

const discountedPrices2 = originalPrices.map((value) => {
  return value * 0.9
})
console.log(discountedPrices2);


let students = [
  {
    name: "ayaan",
    marks: 56,
  },
  {
    name: "mansa",
    marks: 46,
  },
  {
    name: "sivan",
    marks: 30,
  },
  {
    name: "hany",
    marks: 33,
  },
]

// let studentsNames = []
// students.forEach((value) => {
//   studentsNames.push(value.name)
// })

// console.log(studentsNames);

const studentsNames = students.map((student) => student.name)
const studentsmarks = students.map((student) => student.marks)
console.log(studentsNames, studentsmarks);


let boostedMarks = students.map((student) => { return { ...student, marks: student.marks + 10 } })

console.log(boostedMarks);