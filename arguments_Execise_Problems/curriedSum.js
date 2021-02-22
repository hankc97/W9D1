function curriedSum(numArgs){
    let numbers  = [];
    return function innerSum(arg){
        numbers.push(arg)
        if (numbers.length != numArgs){
            return innerSum;
        }else{
            console.log(numbers.reduce((acc,ele) => {
                return acc + ele;
            }));
        }
    }   
}



const sum = curriedSum(5);
sum(5)(30)(20)(1); // => 56
// console.log(sum(5)(30)(20)(1)); // => 56