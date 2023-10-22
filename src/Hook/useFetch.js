import { useEffect, useState } from "react"

 export const useFetch =(url)=>{
    const [data,setData] =useState(null)
    // to fetch api call
    useEffect(()=>{
        // make api call
        fetch(url).then((res)=>res.json().then((data)=>setData(data)))
    },[])
    return data

}