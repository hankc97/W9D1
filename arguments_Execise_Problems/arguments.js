// function sum() {
//     let args = Array.from(arguments);
//     let sum = 0;
//     args.forEach(ele => {
//         sum += ele;
//     })
//     return sum;
// }


function sum(...arr) {
    let sum = 0;
    arr.forEach( (ele) => {
        sum += ele;
    })
    return sum;
}


console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);

