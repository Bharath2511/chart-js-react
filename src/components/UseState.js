import React,{useState} from 'react';

const UseState = () => {
    const [count,setCount] = useState(0);
    const [theme,setTheme] = useState("Red");
    const onIncrement = () => {
        setCount(prevCount => prevCount+1)
        setTheme("Blue")
    }
    const onDecrement = () => {
        setCount(prevCount => prevCount - 1)
        setTheme("Red")
    }
    return (
        <div>
            <button type="button" onClick={onIncrement}>+</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button type="button" onClick={onDecrement}>-</button>
        </div>
    )
}

export default UseState