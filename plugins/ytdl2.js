process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
let fetch = require('node-fetch')
const { servers, yt } = require('../lib/y2mate')

let handler = async (m, { conn, args, isPrems, isOwner }) => {
let fs = require('fs')
let y = fs.readFileSync('./Menu2.jpg')
  if (!args || !args[0]) throw '*โฐ โ โฑ Inserte un enlace de YouTube*\n\n*Ejemplo:*\n*#ytmp4 https://youtu.be/gBRi6aZJGj4*'
  let chat = global.DATABASE.data.chats[m.chat]
  let quality = args[1] || '360'
  let server = (args[2] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF } = await yt(args[0], quality + 'p', 'mp4', quality, servers.includes(server) ? server : servers[0])
  //let isLimit = (isPrems || isOwner ? 99 : limit) * 99888898 < filesize
let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  conn.sendMessage(m.chat, `*๐ช ๏ธDescargando por Gata Dios ๐ช*\n\n*๐ฎ Titulo:* ${title}\n*๐ Tamaรฑo del archivo:* ${filesizeF}` , 'conversation', {quoted: m, thumbnail: y, contextInfo:{externalAdReply: {title: 'Simple WhatsApp bot', body: `ยฉ ${conn.user.name}`, sourceUrl: 'enviando...', thumbnail: y}}})
 conn.sendFile(m.chat, dl_link, `By ${conn.user.name}.mp4`, `
 ๐ *${title}* ๐
๐๐๐ฉ๐ ๐ฟ๐๐ค๐จ
`.trim(), m, false, {
  
ptt: false, duration: 999999999999, thumbnail: y , asDocument: chat.useDocument})
}
handler.command = /^yt(v|mp4)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
