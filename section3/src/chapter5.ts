/**
 * 타입 추론
 */

let a : number = 10;
let b = "hello";
let c = {
    id: 1,
    name: "이정원",
    profile: {
        nickname : "winterwood"
    },
    urls : ["https://winterwood.com"]
}

let { id, name, profile } = c; 

let [one, two, three] = [1, 'hello', true]

function func(message = "hello") {
    return "hello";
}

/**
 * 우리의 예상과는 다른 타입 추론
 */

let d; // 암묵적으로 any 타입으로 추론 -> any 진화
d = 10;
d.toFixed();
// d.toUpperCase(); - number타입으로 추론되어 불가능

d = 'hello'
d.toUpperCase(); 
// d.toFixed();  - string 타입으로 추론되어 불가능

const num = 10;  // number 리터럴 타입으로 추론

// const로 선언하면 바뀔 일이 없기 때문에.

let arr = [1, 'hello']
