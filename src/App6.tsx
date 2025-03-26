import { ChangeEvent, useRef, useState } from "react";
function App6() {
    // 열거형 type //상수처럼(값을 변경할 수 없는 변수)쓰기때문에 보통대문자로 쓴다. 
    // Weapon.SWORD=>이런형태로 참조 가능 //참조되는값은 순서대로 0, 1, 2 =>이 숫자를 문자로 참조하고싶으면? 값을쓴다!
    enum Weapon{
        SWORD, //Weapon.SWORD =>0 으로 인식된다!
        GUN,
        ARROW
    }
    const [weaponState, setWeaponState] = useState<Weapon>(Weapon.SWORD);
    /*
        select요소에 change이벤트가 발생했을때 발생하는 이벤트객체의 type은
        ChangeEvent<HTMLSelectElement>이다.
    */
    //e 이벤트의 타입은 뭘까? change이벤트
    const handleChange = (e:ChangeEvent<HTMLSelectElement>)=>{
        //문자를 숫자로 바꾸어서 Weapon type으로 만든다.
        setWeaponState(Number(e.target.value) as Weapon);  
    }
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
        if(weaponState === Weapon.SWORD){
            /*
                pRef.current는 null일 가능성이 있기때문에, 확인을해서 .innerText를 참조해야 한다.
            */
           if(pRef.current !== null){
                pRef.current.innerText="칼로 공격해요!"; //?는 null이 아닌경우 참조하겠다는것!
           }
           
        }else if(weaponState === Weapon.GUN){
            //!는 null일 가능성이 전혀 없다는 단언, 즉 그냥 강제로 참조해!라는 의미(null이 된다면 exception발생!)
            pRef.current!.innerText="총으로 공격해요!";
        }else if(weaponState === Weapon.ARROW){
            pRef.current!.innerText="활로 공격해요!";
        }
    }
    //p 요소의 참조값을 useRef()를 이용해서 관리하고 싶으면 generic을 HTMLParagraphElement로 선언
    const pRef = useRef<HTMLParagraphElement>(null);

    return (
        <div>
            <select onChange={handleChange} value = {weaponState}>
                <option value={Weapon.SWORD}>칼</option>
                <option value={Weapon.GUN}>총</option>
                <option value={Weapon.ARROW}>활</option>
            </select>
            <button onClick={handleClick}>공격하기</button>
            <p ref={pRef}></p>
        </div>
    );
}

export default App6;