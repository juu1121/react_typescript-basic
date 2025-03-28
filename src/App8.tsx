import { FC, JSX  } from "react";

function App8() {
    //FortuneComponent에서 사용하는 props의 type을 미리 정의
    interface FortuneProps{
        fortune:string
    }


    //함수형 컨포넌트 정의하기  //FC => 함수형 컨포넌트의 타입 //<FortuneProps> => props의 타입
    const FortuneComponent:FC<FortuneProps> = (props)=>{

        return (
            <p>오늘의 운세 : {props.fortune}</p>
        );
    }
    /*
        FC<FortuneProps>는 (a:FortuneProps) => JSX.Element type이기도 하다.
    */
    const FortuneComponent2:(a:FortuneProps) => JSX.Element = (props)=>{
        return (
            <p>오늘의 운세 : {props.fortune}</p>
        );
    }

    return (
        <div>
            <h1>함수형 component 를 불러서 사용하기</h1>
            <FortuneComponent fortune = "동쪽으로 가면 귀인을 만나여"/>
            <FortuneComponent2 fortune = "남쪽쪽으로 가면 귀인을 만나여"/>
        </div>
    );
}

export default App8;