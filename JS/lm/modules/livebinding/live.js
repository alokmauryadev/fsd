import {count, increment} from './state.js'

console.log('initial count:',count)

increment();

console.log('Final count:',count)

try {
    count = 100
} catch (e){
    console.error(e)
}