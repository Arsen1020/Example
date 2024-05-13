import {useMemo, useState} from "react";

const Memo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    const caloulation = (num) => {
        console.log(caloulation)
        for (let i = 0; i < 1000000000; i++) {
            num += 1
        }
    }

    const addTodos=()=>{
        setTodos(prevState => [...prevState,'new Todo'])
    }
    const onCount = ()=>{
        setCount(prev=>prev+1)
    }

    const number= useMemo(()=>{
        return caloulation(count)
    },[count])

    return <div>
        <div>
            {todos.map(el=>{
                return <div>{el}</div>
            })}
        </div>
        <button onClick={addTodos}>Add todos</button>
        <div>{count}</div>
        <button onClick={onCount}>click me</button>
        <div>{number}</div>

    </div>
}
export default Memo




