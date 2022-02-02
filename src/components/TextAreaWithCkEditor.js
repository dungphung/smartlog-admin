import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',

      'bulletedList',
      'numberedList',

      'insertTable',

      'undo',
      'redo',
    ],
  },
  // image: {
  //   toolbar: [
  //     'imageStyle:full',
  //     'imageStyle:side',
  //     '|',
  //     'imageTextAlternative',
  //   ],
  // },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  language: 'en',
}

const TextAreaWithCkEditor = ({ onSubmitData }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data="<p></p>"
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor)
      }}
      onChange={(event, editor) => {
        const data = editor.getData()
        console.log({ event, editor, data })
      }}
      onBlur={(event, editor) => {
        const data = editor.getData()
        if (data && onSubmitData) {
          onSubmitData(data)
        }
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor)
      }}
    />
  )
}

export default TextAreaWithCkEditor
