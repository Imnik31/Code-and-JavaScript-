// iterators

// for(const val of [1,2,3,4,5]){
//     console.log(val);
    
// }

function makeIterator(start=0, end = Infinity, step=1){
    let nextStart=start
    let iterationCount=0

    return {
        next(){
            let result
            if(iterationCount<end){
                result={value:nextStart, done:false}
                nextStart=nextStart+step
                iterationCount++
                return result
            }

            return{value:iterationCount, done:true}
        }
    }
}

const myIterator=makeIterator(1,10,1)

let result=myIterator.next()

while (!result.done){
    console.log(result.value);
    result=myIterator.next()
    
}

// whwn we want to make generator function we will use * next to the function keyword
// to use yield keyword we will make a generator function


function* count(){
    yield 2
    yield 4
    yield 6
    yield 8
    yield 10
}

const even = count()
for (const v of even){
    console.log(v);
    
}

function* makeMyIteratorNew(start, end){
    for (let i = start; i <= end; i++) {
        yield i
        
    }
}

const one = makeMyIteratorNew(1,10)

for (const val of one) {
    console.log(val);
    
}