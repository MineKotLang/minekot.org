module.exports = {
  server: {
    baseDir: 'dist',
    middleware: [
      (req, res, next) => {
        const fs = require('fs')
        const path = require('path')
        const reqUrl = decodeURI(req.url.split('?')[0])
        const url = reqUrl.replace(/\/+$/, '')
        const parts = url.split('/').filter(Boolean)

        // asset requests pass through to the static server
        if (path.extname(url)) {
          return next()
        }

        // source html rewritten to the depth of the requested url
        const prefix = parts.length === 0 ? './' : '../'.repeat(parts.length)
        const html = fs
          .readFileSync(path.join(__dirname, 'src', 'index.html'), 'utf-8')
          .replace('href="/styles.css"', `href="${prefix}styles.css"`)
          .replace('src="/index.js"', `src="${prefix}index.js"`)
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(html)
      },
    ],
  },
  watch: true,
  port: 3000,
  notify: false,
  open: false,
}
