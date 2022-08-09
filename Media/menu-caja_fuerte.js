const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
𝙷𝚘𝚕𝚊, 𝙰𝚌𝚊 𝚃𝚒𝚎𝚗𝚎𝚜 𝚎𝚕 𝙼𝚎𝚗𝚞 𝚍𝚎 𝙲𝚊𝚓𝚊 𝙵𝚞𝚎𝚛𝚝𝚎 :D${name} 🤫

ㅤㅤ *🗳️<𝙲𝙰𝙹𝙰 𝙵𝚄𝙴𝚁𝚃𝙴/>🔐*

- 𝙰𝚀𝚄𝙸 𝙿𝚄𝙴𝙳𝙴 𝙶𝚄𝙰𝚁𝙳𝙰𝚁 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙰𝚂 𝚅𝙴𝚁 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴

╔════「 *<𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝙰 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰/>* 」═════
║╭───────────────────────
║│─≽ _${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
║│─≽ _${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
║│─≽ _${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
║│─≽ _${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
║│─≽ _${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
║│─≽ _${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_
║╰───────────────────────
╚════════════════════════

╔════「 *<𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂/>* 」═════
║╭───────────────────────
║│─≽ _${usedPrefix}listamsg_
║│─≽ _${usedPrefix}listavn_
║│─≽ _${usedPrefix}listavideo_
║│─≽ _${usedPrefix}listaaudio_
║│─≽ _${usedPrefix}listaimg_
║│─≽ _${usedPrefix}listasticker_
║╰───────────────────────
╚════════════════════════

╔════「 *<𝚅𝙴𝚁 𝚃𝙴𝚇𝚃𝙾𝚂 𝙾 𝙰𝚁𝙲𝙷𝙸𝚅𝙾𝚂/>* 」═════
║╭───────────────────────
║│─≽ _${usedPrefix}vermsg *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}vervn *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}vervideo *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}veraudio *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}verimg *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}versticker *<texto/comando/palabra clave>*_
║╰───────────────────────
╚════════════════════════

╔════「 *<𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁/>* 」═════
║╭───────────────────────
║│─≽ _${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
║│─≽ _${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.trim()
║╰───────────────────────
╚════════════════════════
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/CrearBot/Panda-Bot330', '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['🐼𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻🐼', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler
