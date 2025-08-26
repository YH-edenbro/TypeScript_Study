/**
 * 타입 단언 assertion
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;  // as Type 타입 단언
person.name = "이정환";
person.age = 27;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;  // never 타입은 모든 타입의 서브 타입
let num2 = 10 as unknown; // unknown 타입은 모든 타입의 슈퍼 타입

// let num3 = 10 as string; - number타입과 string 타입은 교집합이 없음.
let num3 = 10 as unknown as string;  // 단언 하고 다시 단언함. <- 다중 단언


/**
 * const 단언
 */

let num4 = 10 as const;

let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
};

let post : Post = {
    title: "게시글1",
    author: "이정환",
}

// const len : number = post.author?.length;
const len: number = post.author!.length;
