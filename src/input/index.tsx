import { useState, useCallback } from "react"
import { SvelteJSONEditor } from "./jsoneditor"
import schema from './../json/schema.json'
import { Container } from "react-bootstrap"
import { Content, JSONContent } from "vanilla-jsoneditor"

export const Input = ({jsonData}:{jsonData:object}) => {
  const [showEditor, setShowEditor] = useState(true);
  const [readOnly, setReadOnly] = useState(false);
  const [content, setContent] = useState({
    json: jsonData,
    text: null
  });

  const updateContent = useCallback((newContent: Content, previousContent: Content) => {
    // Coerce into json content
    const thisContent = newContent as JSONContent
    if (thisContent.json){
      setContent(
        {
          json: thisContent.json as object,
          text: null
        }
      )
    }
  }, [])

  return (
    <Container>
      <h1>svelte-jsoneditor in React</h1>
      <p>
        <label>
          <input
            type="checkbox"
            checked={showEditor}
            onChange={() => setShowEditor(!showEditor)}
          />{" "}
          Show JSON editor
        </label>
      </p>
      <p>
        <label>
          <input
            type="checkbox"
            checked={readOnly}
            onChange={() => setReadOnly(!readOnly)}
          />{" "}
          Read only
        </label>
      </p>

      {showEditor && (
        <>
          <h2>Editor</h2>
          <div className="my-editor">
            <SvelteJSONEditor
              schema={schema}
              props = {{
                content: content as JSONContent,
                readOnly: readOnly,
                onChange: updateContent
              }}
            />
          </div>
        </>
      )}
    </Container>
  );

}
