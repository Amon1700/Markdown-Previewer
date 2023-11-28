import { useSelector, useDispatch} from 'react-redux'
import { updateText } from '../features/textSlice'

export default function Editor () {

    const dispatch = useDispatch();
    const text = useSelector(state => state.text)
    const flag = useSelector(state => state.flag)
    const editorFlag = useSelector(state => state.editorFlag)

    const styles1 = flag ? "text styled-scrollbars" : "hide styled-scrollbars"
    const styles2 = editorFlag ? " hide-view" : ""
    
    return (
        <> 
            <textarea className={`${styles1}${styles2}`} onChange={(e) => {dispatch(updateText(e.target.value))}} value={text} id="editor"></textarea>  
        </>
    )
}