import {schema} from 'prosemirror-schema-basic'
import {EditorState} from 'prosemirror-state'
import {EditorView} from 'prosemirror-view'
import {undo, redo, history} from 'prosemirror-history'
import {keymap} from 'prosemirror-keymap'
import {baseKeymap} from 'prosemirror-commands'

let state = EditorState.create({
  schema,
  plugins: [
    history(),
    keymap({'Mod-z': undo, 'Mod-y': redo}),
    keymap(baseKeymap)
  ]
})
window.view = new EditorView(document.querySelector('#editor'), {
  state,
  dispatchTransaction(transaction) {
    console.log(transaction)
    console.log('Document size went from', transaction.before.content.size,
                'to', transaction.doc.content.size)
    let newState = view.state.apply(transaction)
    view.updateState(newState)
  }
})

// From prosemirror-commands:
// export let pcBaseKeymap = {
//   "Enter": chainCommands(newlineInCode, createParagraphNear, liftEmptyBlock, splitBlock),
//   "Mod-Enter": exitCode,
//   "Backspace": backspace,
//   "Mod-Backspace": backspace,
//   "Delete": del,
//   "Mod-Delete": del,
//   "Mod-a": selectAll
// }