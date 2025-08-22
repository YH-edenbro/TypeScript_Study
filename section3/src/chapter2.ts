/**
 * Unknown 타입 -> 모든 타입의 슈퍼 타입 -> 전체 집합
 */

function unknownExam(){
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknwonVar: unknown;

    // let num : number = unknwonVar;
    // let str : string = unknwonVar;
    // let bool : boolean = unknwonVar;
}

/**
 * Never 타입 -> 모든 타입의 서브 타입 -> 공집합
 */

function neverExam() {
    function neverFunc(): never {
        while(true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    // let never1: never = 10;
    // let never2: never = "hello";
    // let never3: never = true;
}

/**
 * Void 타입 - undefined 타입의 슈퍼 타입
 */

function voidExam(){
    function voidFunc(): void {
        console.log("hi");
    }

    let voidVar : void = undefined;
}

/**
 * any 타입 - 치트키 타입! 모든 타입의 슈퍼 타입으로도 존재하고, 서브 타입으로도 존재함(never제외)
 */

function anyExam(){
    function anyFunc(): any{
        let unknownVar : unknown;
        let anyVar: any;
        let undefinedVar: undefined;
        let neverVar: never;


        anyVar = unknownVar; // 이게 왜 가능? 

        undefinedVar = anyVar; 

        // neverVar = anyVar - 오류 발생


    }
}