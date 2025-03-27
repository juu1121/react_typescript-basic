import { useState } from "react";
import { MemberDto, PostDto } from "./types/type";


function App5() {
    //모든 data type이 기본적으로 null이나 undefined를 허용하지는 않는다.
    //그럴때 타입을 선언할떄 |와 함께 해당타입을 적어준다.

    //union타입 = num은 number type과 undefined type의 합집합(union) type
    let num:number|undefined = undefined;
    num=10;
    //name은 string type과 null의 합집합 type
    let name:string|null = null;

    //userName에 null을 허용하고 싶으면, useState의 generic에 명시하면된다.
    // 초기값을null주고 나중에 string를 사용할수도있잖아?
    const [userName, setUserName] = useState<string | null>(null); 

    //미리 정의한 type을 이용해서 union type을 만들수도있다.
    type Etc = MemberDto | PostDto;
    /*
        ?는 null safe연산자
        userName?.length의 의미는 userName이 null이 아닐때만 .length를 참조해라 라는 의미
        userName!.length의 의미는 userName이 null일 가능성이 없으니 그냥 .length를 참조해라 라는 의미

        const result = userName?.length 에서
        1. userName이 null이 아니면 .length가 참조되어서 result에 문자열의 길이가 대입된다(result숫자가 들어간다)
        2. userName이 null이면 .length가 참조되지않고 result에는 null이 대입된다. //우측에는 null만 남으니까까
        따라서result라는 변수도 null일 가능성이 있다는 의미이다.
        ==> 이때 result의 타입은 result : number | null 이다.
    */
    const r = userName?.length;
    
    return (
        <div>
            
        </div>
    );
}

export default App5;