let handler = m => {
let msgs = global.db.data.msgs
m.reply(`
*π° π»πΈπππ° π³π΄ ππ΄πππΎπ/πΌπ΄π½ππ°πΉπ΄π/πΏπ°π»π°π±ππ°π π²π»π°ππ΄π π°*

*β³οΈ πΌπ΄π½ππ°πΉπ΄π β³οΈ*
${Object.keys(msgs).map(v => '*ππ» ' + v).join('*\n*')}*
`.trim())
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^lista(vn|msg|video|audio|img|sticker)$/
export default handler
