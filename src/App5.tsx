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
    
    return (
        <div>
            
        </div>
    );
}

export default App5;