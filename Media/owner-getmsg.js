let handler = async (m, { conn, command, usedPrefix, text }) => {
let which = command.replace(/ver/i, '')
if (!text) throw `*[βππππβ] πππ°π *${usedPrefix}list${which}* πΏπ°ππ° ππ΄π π»π° π»πΈπππ°*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[βππππβ] '${text}' π½πΎ ππ΄πΆπΈππππ°π³πΎ π΄π½ π»π° π»πΈπππ° π³π΄ πΌπ΄π½ππ°πΉπ΄π*`
let _m = await conn.serializeM(msgs[text])
await _m.copyNForward(m.chat, true)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'get' + v + ' <text>')
handler.tags = ['database']
handler.command = /^ver(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler
