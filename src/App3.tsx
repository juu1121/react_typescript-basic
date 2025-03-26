//미리 정의된  type.ts에서 MemberDto를 import해서 사용하기
import { MemberDto, PostDto } from './types/type';

function App3() {
    /*
        외부에 미리 정의된 type을 import해서 사용해보기기
    */
    const members:MemberDto[] = [];
    members.push({num:1, name:"김구라", addr:"노량진"});
    members.push({num:2, name:"원숭이", addr:"상도동"});

    //PostDto[] 배열을 만들고 아이템을 추가해보세요
    const posts:PostDto[] = [];
    posts.push({id:1, title:"제목", content:"내용"});
    posts.push({id:2, title:"제목2", content:"내용2"});

    //json 문자열
    const json1 = `
        {"num":1, "name":"kim", "addr":"노량진 }
    `;

    //json을 파싱한 결과를 MemberDto type으로 받기
    let m1 = JSON.parse(json1) as MemberDto ; //as로 정의했기떄문에 추론가능해서 앞에 타입생략략
    //let m1:MemberDto = JSON.parse(json1) as MemberDto ; //정석
    //let m1:MemberDto = JSON.parse(json1); //타입명시

    const json2=`
        ["kim", "lee", "park"]
    `;
    //위의 json 문자열을 파싱해서 적절한 type변수에 담아보세요
    let names = JSON.parse(json2) as string[];
    names = ["xxx", "yyy"];
    //names = [10, 20]// string배열로 추록가능해서, 숫자넣으면 에러

    const json3 = `
        [
            {"num":1, "name":"kim", "addr":"노량진"},
            {"num":2, "name":"해골", "addr":"행신동"}
        ]
    `;
    //위의 json문자열을 파싱해서 적절한 변수에 담아보세요
    let members2 = JSON.parse(json3) as MemberDto[];
    //string[]은 Array<string> 과 같다. //배열타입을 쓸때 제너릭형식으로 가능하다다
    //MemberDto[]은 Array<MemberDto>로 가능하다!
    let member3:Array<MemberDto> = members2;
    
    return (
        <div>
            
        </div>
    );
}

export default App3;