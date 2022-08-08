let handler = async (m, { conn, text }) => {
if (!text) throw 'No Text'
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
comment: text,
username: conn.getName(m.sender)
}), 'error.png', '*隆隆饾櫠饾殎饾櫚饾櫜饾櫢饾櫚饾殏 饾櫩饾櫨饾殎 饾櫜饾櫨饾櫦饾櫞饾櫧饾殐饾櫚饾殎!!*', m)
}
handler.help = ['ytcomment <comment>']
handler.tags = ['maker'] 
handler.command = /^(ytcomment)$/i
export default handler
