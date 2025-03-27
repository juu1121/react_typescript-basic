import { useState } from "react";

import Friends from "./components/Friends";
import Fortune from "./components/Fortune";




function App9() {
    const [friends, setFriends] = useState<string[]>(["김구라", "해골", "원숭이"]);

    //Friends 컨포넌트에 전달한 함수
    const handleDelete = (idx:number) =>{
        setFriends(friends.filter((item, index) => index !== idx));
    }

    return (
        <div>
            <h1>외부 component 사용하기기</h1>
            <Fortune fortune = "동쪽으로"/>
            <Fortune fortune = "남남쪽으로 "/>
            <Friends list={friends} onDelete={handleDelete}/>
        </div>
    );
}

export default App9;