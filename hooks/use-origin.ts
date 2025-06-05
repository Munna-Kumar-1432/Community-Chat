import { useEffect, useState } from "react"

export const useOrigin = () =>{
    const [mounted,setIsMonted] = useState(false)

    useEffect(()=>{
        setIsMonted(true)
    },[])

    const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : ""
    if(!mounted){
        return ""
    }
    return origin
}