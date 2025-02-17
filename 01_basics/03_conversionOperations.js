// convert the string into number

const score = '24'

console.log(typeof score);

const convertedScore = Number(score)

console.log(typeof convertedScore);

// but some type it will give wrong answer like if you convert '24san' to number then it will sow you the
//type as number but if you chec the value it will say 'NaN' that ths not a number.

//'24'=> 24
// '24san' =>NaN
//'null' =>0
//'true' =>1
//'undefined' =>NaN

// convert number into boolean

const isBoolean = 2

const convertedBoolean = Boolean(isBoolean)

console.log(convertedBoolean);

// the convertion here depends upon what data type you have used in first 
console.log(2+1+'2') //result = 32
console.log('2'+1+3) //result = 213




