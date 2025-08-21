// // object - 객체 리터럴 타입
// // 구조 기준으로 타입을 정함 -> 구조적 타입 시스템
// //   -> Property Based TS <-> 이름 기준으로 하는 명목적 타입 시스템
// let user: {
//     id: number;
//     name: string;
// } = {
//     id: 1, 
//     name: "이정환",
// }

// let dog: {
//     name: string;
//     color: string;
// } = {
//     name: "돌돌이",
//     color: "brown",
// }


let user : {
    id?: number; // 00? : <- 선택적 property, optional property
    name: string;
} = {
    id: 1,
    name: "이정환",
}

user = {
    name: "홍길동",
}

let config : {
    readonly apiKey: string;
} = {
    apiKey : "My API KEY",
}

// config.apiKey = "hacked"