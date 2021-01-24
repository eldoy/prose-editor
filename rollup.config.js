import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    file: 'app/assets/js/prose-editor.js',
    format: 'iife'
  },
  plugins: [resolve()]
}
