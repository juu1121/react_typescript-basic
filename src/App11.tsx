//Step08_Reducer/friends를 App11.jsx로 옮기고, 타입스크립트로 변경중...~!

import React, { useReducer, useRef } from 'react';
import { v4 as uuid } from 'uuid';

//액션을 발행할때 해당 액션의 type정의하기기
interface Action{
    type:ActionType
    payload?:string //RESET할때는 payload가 없으므로 optional로 정의
}

// 액션객체에서 사용할 type 목록을 미리 enum으로 정의해놓기
enum ActionType{
    ADD, RESET, REMOVE
}

const actioin1:Action = {type:ActionType.ADD, payload:"xxx"};
const actioin2:Action = {type:ActionType.REMOVE}; //remove인 경우에 payload가 없다.

actioin1.payload
actioin2.payload //undefined 

const result1:string = actioin1.payload || "" //타입추론=> string | undefined //so string에 담으면 에러나는것
//actioin1.payload 가undefined일 가능성이있는데, undefined면 ""빈문자열을 집어넣어라 => 이렇게 하면 해결!

const reducer = (state:State, action:Action):State=>{
    let newState:State;
    if(action.type ===ActionType.ADD){
        newState={
            ...state,
            friends:[...state.friends, {id:uuid(), name:action.payload || ""}]
        }
        }else if(action.type ===ActionType.RESET){
            newState={
                ...state,
                friends:[]
            }
        }else if(action.type ===ActionType.REMOVE){
            newState={
                ...state,
                friends:state.friends.filter(item=>item.id !== action.payload)
            }
        }else{
            newState=state;
    }
    return newState
}

interface Friend{
    id:string;
    name:string;
}

interface State{
    userName:string,
    friends:Friend[]
}

//초기 상태값 //친구이름 입력하면 {id:"uuid", name:"이름"} 오브젝트를 만들어서, 배열로 관리할거임임 //friends:[{id:"uuid", name:"이름"}, {id:"uuid", name:"이름"}...]
const initState:State={
    userName:"kimgura",
    friends:[]
}

function App11() {
    //useReducer(리듀서함수, 초기상태값)
    const [state, dispatch] = useReducer(reducer, initState);

    //특정 요소의 참조값을 관리하기 위한 hook
    const inputName = useRef<HTMLInputElement>(null);

    return (
        <div>
            <p>로그인된 userName : <strong>{state.userName}</strong> </p>
            <input ref={inputName} type="text" placeholder='친구이름입력...' />   
            <button onClick={()=>{
                //입력한 이름을 추가하는 action을 dispatch한다(동작을 발행)
                //inputName.current라는 방에는 참조값(input요소)이 들어있다.
                const name = inputName.current!.value;
                //발행할 action을 object로 만든다. //type키값으로액션명 , payload로 이름
                const action:Action = {type:ActionType.ADD, payload:name};
                //action 발행하기
                dispatch(action);
            }}>추가</button>
            <button onClick={()=>{
                //Action객체의 payload는 optional이기 때문에 payload를 담지 않아도 된다.
                const action:Action={type:ActionType.RESET};
               dispatch(action);
            }}>Reset</button>
            <ul>
                {state.friends.map(item=>
                //state = { userName:"kimgura",  friends : [ {id:"uuid", name:"이름"}, {id:"uuid", name:"이름"}...] }
                    <li key={item.id}>
                        {item.name} <button onClick={()=>{
                            const action:Action = {type:ActionType.REMOVE, payload:item.id};
                            dispatch(action)
                        }}>x</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default App11;