import {memo, useCallback, useState} from "react";

const CallBack = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const onCount = () => {
        setCount(prev => prev + 1)
    }
    const addTodos = useCallback(() => {
        return setTodos(prevState => {
            return [...prevState, 'new todo']
        })
    }, [])

    return <div>
        <div>
            {todos.map(el => {
                return <div>{el}</div>
            })}
        </div>
        <button onClick={addTodos}>Add todos</button>
        <div>{count}</div>
        <button onClick={onCount}>click me</button>
    </div>
}
export default CallBack



