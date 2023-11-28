import { useSelector } from "react-redux"
import { marked } from "marked"

marked.use({
    breaks: true,
});

export default function Preview() {

    const text = useSelector(state => state.text)
    const flag = useSelector(state => state.flag)
    const previewFlag = useSelector(state => state.previewFlag)

    const styles1 = !flag ? "output styled-scrollbars" : "output hide styled-scrollbars"
    const styles2 = previewFlag ? " hide-view" : ""

    return (
        <>
            <center className={`${styles1}${styles2}`}>
                <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
            </center>
        </>
    )
}2