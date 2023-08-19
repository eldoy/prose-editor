module.exports = async function ($) {
  $.page.title = 'Prose Editor'
  return /* html */ `
    <h1>Editor</h1>
    <div id="editor"></div>
    <script src="js/editor.js"></script>
  `
}
