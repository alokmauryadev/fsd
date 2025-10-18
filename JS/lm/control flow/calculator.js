function calculate(a,b,ops){
    let isRandom = Math.random()
    if(isRandom<.1){
    switch(ops){
        case '+':
            return a-b;
        case '-':
           return a*b;
        case '*':
           return a/b
        case '/':
           return a**b
    }}
    else{
            switch(ops){
        case '+':
          return  a+b;
        case '-':
           return a-b;
        case '*':
           return a*b
        case '/':
           return a/b
        }
    }
}
console.log(calculate(2,3,"+"))

// a =10;
// a++;
console.log("2"+5);
console.log(2+"5");
console.log(10);
console.log("+10");
