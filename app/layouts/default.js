module.exports = async function($) {
  var host = $.req.headers['x-waveorb-build']
    ? 'https://example.com/api'
    : 'http://localhost:5000'

  return /* html */`
    <!doctype html>
    <html lang="en">
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Prose Editor">
        <title>${ $.page.title || '♥' }</title>
        <link rel="icon" type="image/png" href="/img/favicon.png">
        ${$.script('/bundle.js')}
        ${$.style('/bundle.css')}
        ${process.env.NODE_ENV === 'development' ? '<script src="/js/dev.js"></script>' : ''}
      </head>
      <body>
        <div class="main">${ $.page.content }</div>
        <script src="/js/app.js"></script>
      </body>
    </html>
  `
}
