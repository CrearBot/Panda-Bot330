const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
let name = await conn.getName(m.sender)
let str = `
π·πππ, π°ππ ππππππ ππ πΌπππ ππ π²πππ π΅πππππ :D${name} π€«

γ€γ€ *π³οΈ<π²π°πΉπ° π΅ππ΄πππ΄/>π*

- π°πππΈ πΏππ΄π³π΄ πΆππ°ππ³π°π πΌπ΄π½ππ°πΉπ΄π πππ΄ πππΈπ΄ππ°π ππ΄π πΌπ°π ππ°ππ³π΄

βββββγ *<π°πΆππ΄πΆπ°π π° π»π° π»πΈπππ°/>* γβββββ
ββ­βββββββββββββββββββββββ
ββββ½ _${usedPrefix}agregarmsg *<texto/comando/palabra clave>* (responde a un texto)_
ββββ½ _${usedPrefix}agregarvn *<texto/comando/palabra clave>* (responde a una nota de voz)_
ββββ½ _${usedPrefix}agregarvideo *<texto/comando/palabra clave>* (responde a un video)_
ββββ½ _${usedPrefix}agregaraudio *<texto/comando/palabra clave>* (responde a un audio)_
ββββ½ _${usedPrefix}agregarimg *<texto/comando/palabra clave>* (responde a una imagen)_
ββββ½ _${usedPrefix}agregarsticker *<texto/comando/palabra clave>* (responde a un sticker)_
ββ°βββββββββββββββββββββββ
βββββββββββββββββββββββββ

βββββγ *<π»πΈπππ° π³π΄ π²πΎπΌπ°π½π³πΎπ/>* γβββββ
ββ­βββββββββββββββββββββββ
ββββ½ _${usedPrefix}listamsg_
ββββ½ _${usedPrefix}listavn_
ββββ½ _${usedPrefix}listavideo_
ββββ½ _${usedPrefix}listaaudio_
ββββ½ _${usedPrefix}listaimg_
ββββ½ _${usedPrefix}listasticker_
ββ°βββββββββββββββββββββββ
βββββββββββββββββββββββββ

βββββγ *<ππ΄π ππ΄πππΎπ πΎ π°ππ²π·πΈππΎπ/>* γβββββ
ββ­βββββββββββββββββββββββ
ββββ½ _${usedPrefix}vermsg *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}vervn *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}vervideo *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}veraudio *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}verimg *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}versticker *<texto/comando/palabra clave>*_
ββ°βββββββββββββββββββββββ
βββββββββββββββββββββββββ

βββββγ *<π΄π»πΈπΌπΈπ½π°π/>* γβββββ
ββ­βββββββββββββββββββββββ
ββββ½ _${usedPrefix}eliminarmsg *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}eliminarvn *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}eliminarvideo *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}eliminaraudio *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}eliminarimg *<texto/comando/palabra clave>*_
ββββ½ _${usedPrefix}eliminarsticker *<texto/comando/palabra clave>*_`.trim()
ββ°βββββββββββββββββββββββ
βββββββββββββββββββββββββ
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/CrearBot/Panda-Bot330', 'πΆπΈππ·ππ±', null, null, [
['πΌπΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»πΌ', '/menu']
], m)
}}
handler.help = ['cajafuerte']
handler.tags = ['owner']
handler.command = /^(cajafuerte)$/i
handler.rowner = true
handler.fail = null
export default handler
