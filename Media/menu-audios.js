const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `
 π·πΎπ»π°, π°ππ ππππππ ππ πΌπππ ππ π°πππππ_${name}_ ππ

*- π΄ππ²ππΈπ±π΄ π»π°π ππΈπΆππΈπ΄π½ππ΄π πΏπ°π»π°π±ππ°π πΎ π΅ππ°ππ΄π ππΈπ½ π½πΈπ½πΆππ½ πΏππ΄π΅πΈπΉπΎ (#, /, *, .)*
βββββγ *<ππππ πππππππ/>* γβββββ
ββ­βββββββββββββββββββββββ
ββββ½_Quien es tu sempai botsito 7w7_
ββββ½_Te diagnostico con gay_
ββββ½_A nadie le importa_
ββββ½_Fiesta del admin_
ββββ½_Fiesta del administrador_ 
ββββ½_Vivan los novios_
ββββ½_Feliz cumpleaΓ±os_
ββββ½_Noche de paz_
ββββ½_Buenos dias_
ββββ½_Buenos tardes_
ββββ½_Buenos noches_
ββββ½_Audio hentai_
ββββ½_Chica lgante_
ββββ½_Feliz navidad_
ββββ½_Vete a la vrg_
ββββ½_Pasa pack Bot_
ββββ½_Atencion grupo_
ββββ½_Marica quien_
ββββ½_Murio el grupo_
ββββ½_Oh me vengo_
ββββ½_tio que rico_
ββββ½_Viernes_
ββββ½_Baneado_
ββββ½_Sexo_
ββββ½_Hola_
ββββ½_Un pato_
ββββ½_Nyanpasu_
ββββ½_Te amo_
ββββ½_Yamete_
ββββ½_BaΓ±ate_
ββββ½_Es puto_
ββββ½_La biblia_
ββββ½_Onichan_
ββββ½_Mierda de Bot_
ββββ½_Siuuu_
ββββ½_Rawr_
ββββ½_UwU_
ββββ½_:c_
ββββ½_a_
ββ°βββββββββββββββββββββββ
βββββββββββββββββββββββββ
`.trim()
conn.sendHydrated(m.chat, str, wm, pp, 'https://github.com/CrearBot/Panda-Bot330', 'πΆπΈππ·ππ±', null, null, [
['πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '/menu']
], m)
}}
handler.help = ['menu2', 'help2', '?2', 'menuaudios']
handler.tags = ['main']
handler.command = /^(menu2|audios|menΓΊ2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.fail = null
export default  handler
