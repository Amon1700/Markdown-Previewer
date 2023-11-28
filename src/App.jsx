import Button from './components/Button'
import Editor from './components/Editor'
import Preview from './components/Preview'
import { useSelector, useDispatch } from 'react-redux'
import { setEditorFlag, setPreviewFlag } from './features/textSlice'
function App() {

  const editorFlag = useSelector(state => state.editorFlag)
  const previewFlag = useSelector(state => state.previewFlag)
  const dispatch = useDispatch()

  return (
    <div className='views'>
      <Button />
      <h1 className='heading-one heading' onClick={()=>{dispatch(setEditorFlag(!editorFlag))}}>{editorFlag?"Editor⪡":"Editor⪢"}</h1>
      <Editor />
      <h1 className='heading-one heading' onClick={()=>{dispatch(setPreviewFlag(!previewFlag))}}>{previewFlag?"Previewer⪡":"Previewer⪢"}</h1>
      <Preview />
    </div>
  )
}

export default App
