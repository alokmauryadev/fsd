const myAtoi = function(s){
    const INT_MIN = -(2**31);
    const INT_MAX = (2**31)-1;

    let i=0;
    let sign = 1;
    let result = 0;
    const n=s.length;
    while(i<n && s[i]===' '){
        i++;
    }
    if(i===n) return 0;
    if(s[i]==='-'){
        sign = -1;
        i++
    }
    else if(s[i]==='+'){
        sign = 1;
        i++
    }
    while(i<n){
        const charCode = s.charCodeAt(i)
        if(charCode<48 || charCode >57){
            break;
        }
        const digit = charCode - 48;
        result = result*10+digit;
        i++
    }
    result = result*sign;
    if(result<INT_MIN){
        return INT_MIN
    }
    if(result>INT_MAX){
        return INT_MAX
    }
    return result
}


let r = myAtoi("-0042")
console.log(r)