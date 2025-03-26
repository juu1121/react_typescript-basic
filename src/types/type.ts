
//외부에서 이 타입을쓰려면 export해줘야 한다.

//회원정보 type
export type MemberDto = {
    num:number;
    name:string;
    addr:string;
}

//글정보 type 
export type PostDto ={
    id:number;
    title:string;
    content:string;
}