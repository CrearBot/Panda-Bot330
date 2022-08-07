let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙴𝚂 wa.me/5493772642151*

*—◉ 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝙲𝙾𝙻𝙰𝙱𝙾𝚁𝙰𝙳𝙾𝚁 𝙴𝚂 wa.me/5493772438808*

`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/CrearBot/Panda-Bot330` },
'mimetype': `application/${document}`,
'fileName': `「  𝑯𝒆𝒍𝒍𝒐 𝑾𝒐𝒓𝒍𝒅 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/CrearBot/Panda-Bot330',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://chat.whatsapp.com/F8r1t9CvUruE5pmqMXEUGG' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝓵𝓮𝓸𝓷𝓪𝓻𝓭𝓸🐼;;;\nFN:𝓵𝓮𝓸𝓷𝓪𝓻𝓭𝓸🐼\nORG:𝓵𝓮𝓸𝓷𝓪𝓻𝓭𝓸🐼\nTITLE:\nitem1.TEL;waid=5493772642151:+549 3772 642151\nitem1.X-ABLabel:𝓵𝓮𝓸𝓷𝓪𝓻𝓭𝓸🐼\nX-WA-BIZ-DESCRIPTION:[❗] ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴇsᴛᴇ ɴᴜᴍ ᴘᴀʀᴀ ᴄᴏsᴀs ɪᴍᴘᴏʀᴛᴀɴᴛᴇs.\nX-WA-BIZ-NAME:𝓵𝓮𝓸𝓷𝓪𝓻𝓭𝓸🐼\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Leonardo 🐼', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
