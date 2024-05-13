import {useEffect, useState} from "react";
import axios from "axios";

const useFetchh = (url,page) => {
    // page is query parameter

        const [data,setData]=useState()
    useEffect(()=>{
        axios.get(`${url}?page=${page}`).then(res=>useState(res.data))
    },[url,page])
}
export default useFetchh