import { useState } from "react";

function App2() {
    //배열 타입 선언
    const nums:number[] = [10, 20, 30];
    const names:string[] = ["kim", "lee", "park"];

    //타입을 선언하면 다른타입은 배열안에 못 들어감 //const numsaa:number[] = [10, 20, 30,"김구라"]; //에러    

    //친구 이름 목록을 상태값으로 관리
    const [friends, setFriends] = useState<string[]>(["김구라", "해골", "원숭이"]);

    //미리 type을 선언해놓고 사용할수있다.
    type MemberDto = {
        num:number; //개행할거면 세미콜론생략가능
        name:string;
        addr:string;
    }
    let m1 = {num:1, name:"구라킴", addr:"노량진츄"}; //오브젝트 타입으로 추론됨(이때 오브제트안의 키의 타입도 추론!)
    //대입할 object의 type을 명시적으로 선언한다면 아래와 같다.
    let m2:{num:number; name:string; addr:string} =  {num:2, name:"해골", addr:"행신동"};
    let m3:MemberDto = {num:3, name:"원숭이", addr:"분당"};

    //members는 MemberDto[] type이다.
    const members:MemberDto[] = [m1,m2, m3]

    return (
        <div>
            <h1>친구 목록</h1>
            <ul>
                {friends.map(item=><li>{item}</li>)}
            </ul>
            <h3>회원 목록</h3>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>주소</th>
                </tr>
            </thead>
            <tbody>
                {members.map(item=>
                <tr>
                    <td>{item.num}</td>
                    <td>{item.name}</td>
                    <td>{item.addr}</td>
                </tr>)}
            </tbody>
        </div>
    );
}

export default App2;