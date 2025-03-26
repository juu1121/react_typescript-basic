import React, { ChangeEvent, useState } from 'react';

function App7() {
    interface Product{
        readonly id?:number; //?는 optional //id는 없어도 된다. //readonly는 읽기 전용
        name:string;
        price:number;
    }
    //Product type
    const item1: Product = {id:1, name:"아이폰", price:10000};
    const item2: Product = {id:2, name:"안드로이드 폰", price:20000};


    const phoneList:Product[] = [item1, item2];

    const [state, setState] = useState<Product>({
        name:"",
        price:0
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        // name과 value를 미리 얻어낸다.
        const {name, value} = e.target //구조분해할당
        //만일 가격을 숫자가 아닌 값을 입력하면 
        if(name === "price" && isNaN(Number(value))){
            alert("숫자를 입력하세요");
            setState({...state, price:0})
            return;
        }
        setState({
            ...state,
            //[e.target.name]:e.target.name ==="price" ? Number(e.target.value) : e.target.value //줄여쓰기! //구조분해할당!
            [name]:name ==="price" ? Number(value) : value
        });
    }

    return (
        <div>
            <pre>{JSON.stringify(state, null, 4)}</pre>
            <input type="text" onChange={handleChange} name="name" placeholder="상품명..." value = {state.name} />
            <input type="text" onChange={handleChange} name="price" placeholder="가격..." value = {state.price}/>
            <button>추가</button>
            <h1>폰 목록입니다.</h1>            
            <ul>
                {phoneList.map(item=><li key={item.id}>{`${item.id}${item.name}${item.price}원 `}</li>)}
            </ul>
        </div>
    );
}

export default App7;