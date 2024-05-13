import {useEffect, useState} from "react";
import axios from "axios";

const Example = (props) => {
    const {text} = props
    const [count, setCount] = useState(178)
    const [todos, setTodos] = useState([])

    const buttonOnclick = () => {
        setCount(prevState => prevState +1)

    }

    const getTodos = () => {
        axios.get('https://jsonplaceholder.typicode.com/users/1/todos').then(res => {
            setTodos(res.data)
        })
    }
    // getTodos()

    useEffect(() => {
        console.log(123)
        getTodos()
    }, [count]);

    return <div>
        {text}
        <div>{count}</div>
        <button onClick={buttonOnclick}>click me</button>
        <div>

            {todos.map(el => {
                return <div>{el.title}</div>
            })}

        </div>
    </div>
}
export default Example








