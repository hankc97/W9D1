// no arrow function for monkeyPatching 
Function.prototype.curry = function(numArgs){
    
        let numbers  = [];
        const that = this; 
        return function innerFunc(arg){
            numbers.push(arg);
            if (numbers.length != numArgs){
                return innerFunc;
            }else{
                return that.apply(null,numbers);
                }
            }  
         
}

let logFunc = function(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i])
    }
}

let curryFunc = logFunc.curry(5)(5)(30)(20)(1)(6)
// curryFunc(5)(30)(20)(1)(6)
// const sum = curry(4);
// sum(5)(30)(20)(1); // => 56