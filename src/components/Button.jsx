import { useSelector, useDispatch } from "react-redux"
import { setflag } from "../features/textSlice"

export default function Button() {
    const flag = useSelector((state)=>state.flag)
    const dispatch = useDispatch()
    return (
        <>
            <h1 className="heading-two" onClick={()=>{dispatch(setflag(!flag))}}>{flag? "Editor" : "Previewer"}</h1>
        </>
    )
}