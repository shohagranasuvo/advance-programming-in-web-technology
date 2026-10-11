var y =30 ;
console.log(y)
function sum(a,b){
    return a+b ;

}

console.log(sum(5,7))

const fun = function(){

    return "anonymous";
}
console.log(fun())

const summation = (a,b)=> a+b ;
console.log(summation(5,6))

const name= na => "Hello "+na

console.log(name("shohag"))

const withdraw = (bal ,ammount) => {

    if(bal>ammount)
    {
        return true

    }
    else {
        return false
    }
}
const flag =withdraw(500,400)
console.log(flag)

//array 
let arr =[1,2,3,4,5]
console.log(arr)
arr.push(6)
console.log(arr)
const newNumArr =arr.map(element=>element+5)
console.log(newNumArr)

const filterArr =newNumArr.filter(element=> element>9)
console.log(filterArr)

const reduceval = newNumArr.reduce((sum ,element)=>{
    return sum+element
},0)

console.log(reduceval)

console.log(newNumArr.some(element=>element>2))

console.log(newNumArr.every(element=>element>200))

const val = 50 
const student  ={
    id:"54897" ,
    name :"Shohag Rana" ,
    greet :function(){
        return "Hi....!"
    },
    greett : name =>"Hi.. "+this.name
    
}

student.id="23-54897-3"

student.dept ="CSE"

console.log(student.id)
console.log(student.name)
console.log(student.greet())

//array destructuring

let arr2= [10,20,30]
let v11111=arr2[0]
console.log(v11111)

const[v1,v2,v3]=arr2 ;
console.log(v1,v2,v3)

// let a= 30 
// let b = 40
// [a,b]=[b,a] ;
// console.log(a,b)

const {id :newid }=student
console.log(newid)

//spread

function test(a,b,c,d)
{
    return a+b+c+d ;
}
const testArr =[1,2,3,4,5]
console.log(test(...testArr))

const universit ={
    name :"AIUB",
    dhaka :"Kuril"
}

const university2 ={
    ...universit ,
    fees :4000,
}
console.log(university2.name)

arr=[...testArr]
console.log(arr)
//rest op

const [v33 ,...rest] =testArr

console.log(rest)

function mul (...numarr)
{    var mum =1
    for(let i of numarr)
    {
        mum =mum * i;

    }
    return mum
}

console.log(mul(49,56,2))


//for each 

let arr3= [10,30,30,40] ;

arr3.forEach(element=>{
    console.log(element)
})

//syncronus
console.log("Apple")
console.log("Be")

//asyncronus


console.log("Asyncronus")
setTimeout(()=>{
    console.log("B")
},1000);

console.log("Be")

const interval = setInterval(()=>{console.log("Hi")},1000)
setTimeout(() => {
    clearInterval(interval)
    
}, 2000);


//promise
function testPromise()
{
    return new Promise((resolve ,reject) => {
        let simulator =true
        if (simulator==true)
        {
            console.log("Success")
        }
        else{
            console.log("fail")

        }

    })
}

async function getUserId() {
    return new Promise((resolve,reject)=>{
        let admin =true ;
        if(admin ==true)
        {
            console.log("Welcome")
        }
        else
        {
            console.log("Reject")
        }
    })   
}



