import { createSlice } from "@reduxjs/toolkit";

const defaultText = `
# Heading level 1
## Heading level 2
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`
- First item
- Second item
- Third item

> blockquote

![alt text](https://images.pexels.com/photos/19141124/pexels-photo-19141124/free-photo-of-a-red-scooter-is-parked-in-an-empty-warehouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)

**bold text**`;

const initialState = {
    text : defaultText,
    flag : false,
    editorFlag: false,
    previewFlag: false,

}

export const textSlice = createSlice({
    name : "text",
    initialState,
    reducers: {
        updateText:(state, action) => {
            state.text = action.payload
        },
        setflag:(state, action) => {
            state.flag = action.payload
        },
        setEditorFlag:(state, action) => {
            state.editorFlag = action.payload
        },
        setPreviewFlag:(state, action) => {
            state.previewFlag = action.payload
        }
        
    }
})

export  const {updateText,setflag, setEditorFlag, setPreviewFlag} = textSlice.actions

export default textSlice.reducer
