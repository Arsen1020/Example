import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Hom = () => {

    const navigate = useNavigate()
    // const onclick = () => {
    //     navigate('/about-us', {state: {name: 'about us'}})
    // }
    // const textInputHandler=(event)=>{
    //     console.log(event.target.value)
    // }
    // const checkboxInputHandler=(e)=>{
    //     console.log(e.target.checked)
    // }
    const radioInputHandler = (e) => {
        console.log(e.target.value)
    }

    const {count} = useSelector(state => state.count)
    const dispatch = useDispatch()

    function onIncrement() {
        dispatch({type: 'INCREMENT', payload: 10})
    }

    function onDecrement() {
        dispatch({type: "DECREMENT"})

    }

    return <div>
        {/*<button onClick={onklick}>click me</button>*/}

        {/*<input type="email" onChange={(event)=>{textInputHandler(event)}}/>*/}
        {/*<input type="checkbox" onChange={checkboxInputHandler}/>*/}
        {/*<input type="radio" id="html" name="fav_language" value="HTML" onChange={radioInputHandler}/>*/}
        {/*<label htmlFor="html">HTML</label><br/>*/}
        {/*<input type="radio" id="css" name="fav_language" value="CSS" onChange={radioInputHandler}/>*/}
        {/*<label htmlFor="css">CSS</label><br/>*/}
        {/*<input type="date"/>*/}

        <div>
            <div>{count}</div>
            <div>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onDecrement}>Decrement</button>
            </div>
        </div>

    </div>
}
export default Hom