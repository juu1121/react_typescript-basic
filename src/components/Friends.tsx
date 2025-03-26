import { FC } from "react";
import { v4 as uuid } from "uuid";

export interface FriendsProps{
    list:string[]
    onDelete:(idx:number)=>void //숫자타입전달받고 리턴타입없는함수
}


const Friends:FC<FriendsProps> = ({list, onDelete}) => {
    
    return (
        <>
            <h2>친구 목록입니다.</h2>
            <ul>
                {list.map((item, index) => 
                    <li key = {uuid()}>
                        {item}
                        <button onClick={()=>{onDelete(index)}}>x</button>
                    </li>)}
            </ul>
        </>
    );
}

export default Friends;