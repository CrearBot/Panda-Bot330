let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*โโ ๐ด๐ป ๐ฝ๐๐ผ๐ด๐๐พ ๐ณ๐ด ๐ผ๐ธ ๐ฒ๐๐ด๐ฐ๐ณ๐พ๐ ๐ด๐ wa.me/5493772642151*

*โโ ๐ด๐ป ๐ฝ๐๐ผ๐ด๐๐พ ๐ณ๐ด๐ป ๐ฒ๐พ๐ป๐ฐ๐ฑ๐พ๐๐ฐ๐ณ๐พ๐ ๐ด๐ wa.me/5493772438808*

`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/CrearBot/Panda-Bot330` },
'mimetype': `application/${document}`,
'fileName': `ใ  ๐ฏ๐๐๐๐ ๐พ๐๐๐๐ ใ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/CrearBot/Panda-Bot330',
'mediaType': 2,
'previewType': 'pdf',
'title': 'แดส แดแดแดแดส สแดแด แดแด แดกสแดแดsแดแดแดโฉ',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://chat.whatsapp.com/F8r1t9CvUruE5pmqMXEUGG' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '๐ผ๐ด๐ฝ๐'}, type: 1},
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;๐ต๐ฎ๐ธ๐ท๐ช๐ป๐ญ๐ธ๐ผ;;;\nFN:๐ต๐ฎ๐ธ๐ท๐ช๐ป๐ญ๐ธ๐ผ\nORG:๐ต๐ฎ๐ธ๐ท๐ช๐ป๐ญ๐ธ๐ผ\nTITLE:\nitem1.TEL;waid=5493772642151:+549 3772 642151\nitem1.X-ABLabel:๐ต๐ฎ๐ธ๐ท๐ช๐ป๐ญ๐ธ๐ผ\nX-WA-BIZ-DESCRIPTION:[โ] แดแดษดแดแดแดแดแด แด แดsแดแด ษดแดแด แดแดสแด แดแดsแดs ษชแดแดแดสแดแดษดแดแดs.\nX-WA-BIZ-NAME:๐ต๐ฎ๐ธ๐ท๐ช๐ป๐ญ๐ธ๐ผ\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'Leonardo ๐ผ', contacts: [{ vcard }] }}, {quoted: m})
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i
export default handler
