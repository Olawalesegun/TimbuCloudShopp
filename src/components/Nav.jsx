import "../App.css";
import { useState } from 'react';

export default function Nav({ children, ...props}){
    const [isActive, setIsActive] = useState(false);

    function selectButton(){
        setIsActive((prev) => !prev);
    }
    return (
        <>
            <li style={{listStyle: "none"}}>
                <button {...props} className={isActive ? 'active': undefined} onClick={selectButton}>{ children }</button>
            </li> 
        </>
    )
}
