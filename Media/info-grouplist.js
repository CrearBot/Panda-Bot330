let handler = async (m, { conn }) => {
let txt = ''
for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) txt += `\nββ ${await conn.getName(jid)}\nβ€ ${jid} [${chat?.metadata?.read_only ? 'π½πΎ πΏπ°πππΈπ²πΈπΏπ°π½ππ΄' : 'πΏπ°πππΈπ²πΈπΏπ°π½ππ΄'}]\n\n`
m.reply(`*π°π²π° ππΈπ΄π½π΄π π»π° π»πΈπππ° π³π΄ πΆπππΏπΎπ π³π΄ πΏπ°π½π³π°-π±πΎππΉπΉπΆ :π³:*
${txt}
`.trim())
}
handler.help = ['groups', 'grouplist']
handler.tags = ['info']
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos)$/i
export default handler
