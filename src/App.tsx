import { useState } from "react";

function App() {
  //기본 type 익히기

  //1. number, string, boolean;
  const age:number = 10;
  const name:string = "kimgura";
  const isMan:boolean = true;
  
  //type이 맞지 않아서 들어가지 않는다.
  //let age2:number= name; //에러

  //data type을 선언하지 않으면 type을 infer (추론)한다.
  const myName = "superman";
  let yourname:string = myName;
  //myName은 string type으로 이미 추론되어서 결정되어있다.
  //let myNum:number = myName; //에러

  //useState에서 사용하는 type을 강제할수있다.
  const [msg, setMsg] = useState<string>("hi");
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1>인덱스 페이지 입니다.</h1>
      <button onClick={()=>{
        setMsg("bye");
        //setMsg(111); //타입이 맞아야 들어간다.
      }}>{msg}</button>
      <button onClick={()=>{
        setCount(count+1);
      }}>{count}</button>
    </div>
  )
}

export default App
