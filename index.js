const express = require('express')
const cors = require('cors')
const match = require('@nondanee/unblockneteasemusic')
const { createProxyMiddleware } = require('http-proxy-middleware')

const app = express()

app.use(
  cors({
    origin: '*'
  })
)

// 反向代理
function createProxy(address) {
  const host = address.replace(/https?:\/\//, '/')
  app.use(
    createProxyMiddleware(host, {
      target: address,
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        [host]: '/'
      }
    })
  )
}

let address = []

// 请求：http://127.0.0.1:3001/?id=418602084
// 得到：https?://other.player.rh01.sycdn.kuwo.cn/6430135b9ce2e578cb8e584fad7089cf/61bec401/resource/n2/71/52/108643182.mp3
// 反代：http://127.0.0.1:3001/other.player.rh01.sycdn.kuwo.cn/6430135b9ce2e578cb8e584fad7089cf/61bec401/resource/n2/71/52/108643182.mp3
app.get('/', async function (req, res) {
  try {
    const url = await match(req.query.id, ['qq', 'kuwo', 'migu']).then(_res => _res.url)
    const reg = url.match(/^((?:https?:\/\/)?(.+?))\/(.+)$/)
    address.includes(reg[1]) || address.push(reg[1]) & createProxy(reg[1])
    res.redirect(reg[2] + '/' + reg[3])
  } catch (error) {
    res.send('')
  }
})

// 测试
app.get('/test', function (req, res) {
  res.send('')
})

app.listen(3001, function () {
  console.log('Server running at http://127.0.0.1:3001/')
})
