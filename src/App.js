// import React from "react";
// import Button from "./Button/Button";
// import './App.css'
//
//
//
// class App extends React.Component {
//
//     state = {
//         count: 1,
//         label: 'click mi',
//     }
//
//     componentWillMount() {
//         console.log('componentWillMount')
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount')
//     }
//
//     onclickButton = () => {
//         // console.log('------')
//         this.setState({
//             // count: this.state.count + 1,
//             label: 'Go'
//         })
//     }
//
//     componentWillUpdate() {
//         console.log('componentWillUpdate')
//     }
//
//     componentDidUpdate() {
//         console.log('componentDidUpdate')
//     }
//
//     componentWillUnmount() {
//         console.log('componentWillUnmount')
//     }
//
//     render() {
//         console.log('render')
//         return <div>App
//             <div>
//                 <div>{this.state.count}</div>
//                 {/*<button onClick={this.onclickButton}>click mi</button>*/}
//                 <Button onclick={this.onclickButton} label={this.state.label}/>
//                 <Button className={'aaaa'} onclick={this.onclickButton} label={'click mi'}/>
//                 <Button className={'bbbb'} onclick={this.onclickButton} label={'click mi'}/>
//                 <Button className={'cccc'} onclick={this.onclickButton} label={'click mi'}/>
//                 <Button onclick={this.onclickButton} label={'click mi'}/>
//             </div>
//
//         </div>
//     }
// }
// export default App

import {useState} from "react";
import Example from "./Example/Exaple";
import Memo from "./memo/Memo";
import CallBack from "./CallBack/CallBack";
import Header from "./Headr/Headr";
import {Route, Routes} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Hom from "./Hom/Hom";
import AboutUs from "./AboutUs/AboutUs";
import Contactas from "./Contactas/Contactas";
import Login from "./password/login";
import AuthLaout from "./Layouts/AuthLaout/AuthLaout";
import Info from "./Information/Information";
import Register from "./Register/Register";
import useFetch from "./hooks/useFetch";


const App = () => {

    const [count, setCount] = useState(178)
    const [obj, setObj] = useState({name: 'Valod', age: 45})
    const [text, setText] = useState('kjagfdulYEWGFKUYegfDU')
    const [proj, setProj] = useState('vbnm')
    const buttonOnclick = () => {
        // setCount((prevState)=>{return prevState+1})
        setText('kjhgfcdxz')
        setCount(prevState => prevState + 1)
        // setObj({name: 'Gago',age: 48})
        setObj(prevState => {
            return {...prevState, age: prevState.age + 10}
        })
    }
    // const data=useFetch('https://jsonplaceholder.typicode.com/posts')
    //
    // console.log(data)

    // const data = useFetch('https://jsonplaceholder.typicode.com/posts',page)
    return <div className={'App'}>

        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path={'/hom'} element={<Hom/>}/>
                <Route path={'/about-us'} element={<AboutUs/>}/>
                <Route path={'/contact-us'} element={<Contactas/>}/>
                <Route path={'/'} element={<Hom/>}/>
                <Route path={'/login'} element={<Login/>}/>
            </Route>
            <Route path={'*'} element={<div>chka</div>}/>
        </Routes>

        {/*<Routes>*/}
        {/*    <Route path={'/'} element={<AuthLaout/>}>*/}
        {/*        <Route path={'/login'} element={<Login/>}/>*/}
        {/*        <Route path={'/register'} element={<Register/>}/>*/}
        {/*        <Route path={'/'} element={<Login/>}/>*/}
        {/*    </Route>*/}
        {/*</Routes>*/}

        {/*<div>{count}</div>*/}
        {/*<button onClick={buttonOnclick}>click me</button>*/}
        {/*<div>{obj.name }{obj.age}</div>*/}
        {/*<Example text={text}/>*/}

        {/*<Memo/>*/}
        {/*<CallBack/>*/}
        {/*<Header/>*/}


    </div>
}
export default App


