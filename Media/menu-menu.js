import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `
😄𝙷𝚘𝚕𝚊𝚊,! @user 𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙷𝙸𝚂 𝙼𝙴𝙽𝚄!👋🏻  𝚊𝚌𝚊 𝚝𝚒𝚎𝚗𝚎𝚜 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚌𝚘𝚖𝚙𝚕𝚎𝚝𝚘 𝚍𝚎 𝙿𝚊𝚗𝚍𝚊-𝙱𝚘𝚝𝟹𝟹𝟶

ᴏᴊɪᴛᴏ ᴄᴏɴ ᴇʟ sᴘᴀᴍ🧐

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*
*📈 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}*
*📊 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}*
*♧•᛭━̞̞̞─̬̬̬̬̬̬̬̬̬̬͡━᛭̥̥̥̥̥►⃟.⃟ 𑁍֟፝݊͜͡♥️̻֟፝݊͜͡𑁍 ⃟.⃟ ◄᛭̥̥̥̥̥━̬̬̬̬̬̬̬̬̬̬͡─̞̞̞━᛭•♧*
░⃟🌹𝐸𝑛𝑡𝑟𝑎 𝑎𝑙 𝑔𝑟𝑢𝑝𝑜 𝑑𝑒𝑙 𝐵𝑂𝑇
${usedPrefix}grupos
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈────*
*<𝐼𝑁𝐹𝑂𝑅𝑀𝐴𝐶𝐼𝑂𝑁🗃️/>*
├─❒༊ֶ֪⃟⃦⃕🍁̸̷͟⸙${usedPrefix}estado
├─❒༊ֶ֪⃟⃦⃕🍁̸̷͟⸙${usedPrefix}infobot_
├─❒༊ֶ֪⃟⃦⃕🍁̸̷͟⸙${usedPrefix}grouplist
├─❒༊ֶ֪⃟⃦⃕🍁̸̷͟⸙${usedPrefix}owner
├─❒༊ֶ֪⃟⃦⃕🍁̸̷͟⸙${usedPrefix}script
├─❒༊ֶ֪⃟⃦⃕🍁̸̷͟⸙Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)

᪇🍁ᤱᤲᤨᨚᨘᨗᩤ𝑈𝑁𝐸 𝐴𝐿 𝐵𝑂𝑇 𝐴𝑇𝑈 𝐺𝑅𝑈𝑃𝑂
❐ོᤢ⃟🌕${usedPrefix}join *<enlace / link / url>*_


*<𝑇𝐴𝐺𝑆/>*

*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️️ _${usedPrefix}prostituto *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️️ _${usedPrefix}prostituta *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️️ _${usedPrefix}gay2 *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️️ _${usedPrefix}lesbiana *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️️ _${usedPrefix}pajero *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️ _${usedPrefix}pajera *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️️ _${usedPrefix}puto *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️️ _${usedPrefix}puta *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️ _${usedPrefix}manco *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️️ _${usedPrefix}manca *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️ _${usedPrefix}rata *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👀️⸙️️ _${usedPrefix}love *<nombre / @tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟️👀⸙️ _${usedPrefix}doxear *<nombre / @tag>*_

*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐽𝑈𝐸𝐺𝑂𝑆️/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙${usedPrefix}ppt *<papel / tijera /piedra>
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}msg *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}pregunta *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}slot *<apuesta>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}ttt *<nombre sala>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}delttt_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}simi *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}top *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}topgays_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}topotakus_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}formarpareja_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}verdad_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}reto_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}cancion_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🕹️⸙️ _${usedPrefix}pista_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐴𝐶𝑇𝐼𝑉𝐴𝑅【✔】 𝑂 𝐷𝐸𝑆𝐴𝐶𝑇𝐼𝑉𝐴𝑅【✘】/>*

│
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}enable *welcome*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙️ _${usedPrefix}disable *welcome*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}enable *modohorny*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}disable *modohorny*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}enable *antilink*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}disable *antilink*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}enable *antilink2*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}disable *antilink2*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}enable *detect*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}disable *detect*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}enable *audios*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}disable *audios*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}enable *autosticker*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}disable *autosticker*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}enable *antiviewonce*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟✅⸙ _${usedPrefix}disable *antiviewonce*_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝑅𝐸𝑃𝑂𝑅𝑇𝐸𝑆 𝐷𝐸 𝐹𝐴𝐿𝐿𝑂𝑆 𝐷𝐸𝐿 𝐵𝑂𝑇/>*

❐ོᤢ⃟⃟🐼_${usedPrefix}reporte *<texto>*_

*<𝐷𝐸𝑆𝐶𝐴𝑅𝐺𝐴𝑆/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}facebook *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}instagram *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}mediafire *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}instagram *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}gitclone *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}stickerpack *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}gdrive *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}tiktok *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}xnxxdl *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}xvideosdl *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}ytmp3 *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}ytmp4 *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}ytmp3doc *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}ytmp4doc *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}play.1 *<texto / enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}play.2 *<texto / enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}play *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}playdoc *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}playlist *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}playlist2 *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}ringtone *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}soundcloud *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}imagen *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}pinteret *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}wallpaper *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}wallpaper2 *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}pptiktok *<nombre de usuario>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}igstalk *<nombre de usuario>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}igstory *<nombre de usuario>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📥⸙ _${usedPrefix}tiktokstalk *<nombre de usuario>*_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐶𝑂𝑀𝐴𝑁𝐷𝑂𝑆 𝑃𝐴𝑅𝐴 𝐺𝑅𝑈𝑃𝑂𝑆/>* 

├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}add *<numero>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}kick *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}grupo *<abrir / cerrar>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}promote *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}demote *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}demote *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}infogroup_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}link_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}setname *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}setdesc *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}invocar *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}setwelcome *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}setbye *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💎⸙ _${usedPrefix}hidetag *<texto>*_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐶𝑂𝑁𝑉𝐸𝑅𝑇𝐼𝐷𝑂𝑅𝐸𝑆/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟🧧⸙ _${usedPrefix}toimg *<responde a un sticker>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🧧⸙ _${usedPrefix}tomp3 *<responde a un video / nota de voz>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🧧⸙ _${usedPrefix}toptt *<responde a un video / audio>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🧧⸙ _${usedPrefix}tovideo *<responde a un sticker>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🧧⸙ _${usedPrefix}tourl *<responde a un video / imagen / audio>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🧧⸙ _${usedPrefix}tts es *<texto>*_

*<𝐸𝐹𝐸𝐶𝑇𝑂 𝑌 𝐿𝑂𝐺𝑂𝑆/>*
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️️ _${usedPrefix}logos *<efecto> <texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️️ _${usedPrefix}logocorazon *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️ _${usedPrefix}logochristmas *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️️ _${usedPrefix}simpcard *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️ _${usedPrefix}hornycard *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️ _${usedPrefix}lolice *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️ _${usedPrefix}ytcomment *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️ _${usedPrefix}phmaker *<opcion><responder a imagen>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️ _${usedPrefix}itssostupid_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️ _${usedPrefix}pixelar_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🖍⸙️ _${usedPrefix}blur_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐹𝑅𝐴𝐶𝐸𝑆/>*

░⃟🌹 _${usedPrefix}consejo_
░⃟🌹 _${usedPrefix}fraseromantica_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝑅𝐴𝑁𝐷𝑂𝑀/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}cristianoronaldo_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}messi_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}meme_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}itzy_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}blackpink_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}kpop *<blackpink / exo / bts>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}lolivid_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}loli_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}navidad_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}ppcouple_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}wpmontaña_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}pubg_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}wpgaming_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}wpaesthetic_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}wpaesthetic2_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}wprandom_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}wallhp_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}wpvehiculo_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}wpmoto_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}coffee_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}pentol_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}caricatura_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}ciberespacio_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}technology_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}doraemon_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}hacker_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}planeta_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}randomprofile_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}neko_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}waifu_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}akira_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}akiyama_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}anna_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}asuna_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}ayuzawa_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}boruto_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}chiho_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}chitoge_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}deidara_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}erza_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}elaina_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}eba_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}emilia_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}hestia_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}hinata_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}inori_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}isuzu_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}itachi_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}itori_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}kaga_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}kagura_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}kaori_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}keneki_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}kotori_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}kurumi_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}madara_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}mikasa_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}miku_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}minato_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}naruto_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}nezuko_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}sagiri_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}sasuke_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}sakura_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👾⸙ _${usedPrefix}cosplay_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐶𝑂𝑀𝐴𝑁𝐷𝑂𝑆 +18/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}pack_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}pack2_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}pack3_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}videoxxx_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}tiktokxxx_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}tetas_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}booty_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}ecchi_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}furro_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}imagenlesbians_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}panties_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}pene_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}porno_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}porno2_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}randomxxx_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}pechos_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}yaoi_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}yaoi2_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}yuri_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}yuri2_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}trapito_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}hentai_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}nsfwloli_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}nsfworgy_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}nsfwfoot_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}nsfwass_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}nsfwbdsm_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}nsfwcum_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}nsfwero_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}nsfwfemdom_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔞⸙ _${usedPrefix}nsfwglass_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐸𝐹𝐸𝐶𝑇𝑂 𝐷𝐸 𝐴𝑈𝐷𝐼𝑂𝑆/>*
*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*

├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}bass_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}blown_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}deep_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}earrape_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}fast_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}fat_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}nightcore_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}reverse_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}robot_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}slow_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}smooth_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🎤⸙ _${usedPrefix}tupai_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐶𝐻𝐴𝑇 𝐴𝑁𝑂𝑁𝐼𝑀𝑂/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟📳⸙ _${usedPrefix}start_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📳⸙ _${usedPrefix}next_
├─❒༊ֶ֪⃟⃦̸̷⃕͟📳⸙ _${usedPrefix}leave_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐵𝑈𝑆𝐶𝐴𝐷𝑂𝑅𝐸𝑆/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}stickersearch *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}xnxxsearch *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}animeinfo *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}google *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}letra *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}wikipedia *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}ytsearch *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}apkdone *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}apkgoogle *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}apkmody *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}apkshub *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}happymod *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}hostapk *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}revdl *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}toraccino *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔍⸙ _${usedPrefix}uapkpro *<texto>*_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐴𝑈𝐷𝐼𝑂𝑆/>* 
*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)* 
_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)_

├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Quien es tu sempai botsito 7w7_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Te diagnostico con gay_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _A nadie le importa_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Fiesta del admin_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Fiesta del administrador_ 
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Vivan los novios_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Feliz cumpleaños_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Noche de paz_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Buenos dias_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Buenos tardes_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Buenos noches_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Audio hentai_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Chica lgante_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Feliz navidad_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Vete a la vrg_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Pasa pack Bot_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Atencion grupo_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Marica quien_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Murio el grupo_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Oh me vengo_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _tio que rico_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Viernes_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Baneado_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Sexo_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Hola_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Un pato_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Nyanpasu_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Te amo_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Yamete_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Bañate_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Es puto_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _La biblia_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Onichan_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Mierda de Bot_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Siuuu_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _Rawr_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _UwU_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _:c_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🔊⸙ _a_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝐻𝐸𝑅𝑅𝐴𝑀𝐼𝐸𝑁𝑇𝐴𝑆/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}afk *<motivo>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}ocr *<responde a imagen>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}acortar *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}calc *<operacion math>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}del *<respondre a mensaje del Bot>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}whatmusic *<responde a un audio>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}qrcode *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}readmore *<texto1| texto2>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}styletext *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟🛠⸙️ _${usedPrefix}traducir *<texto>*_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝑅𝐺𝑃 - 𝐿𝐼𝑀𝐼𝑇𝐸𝑆 - 𝐸𝐶𝑂𝑁𝑂𝑀𝐼𝐴/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}balance_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}claim_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}lb_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}levelup_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}myns_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}perfil_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}work_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}minar_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}buy_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}buyall_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}verificar_
├─❒༊ֶ֪⃟⃦̸̷⃕͟💵⸙ _${usedPrefix}unreg *<numero de serie>*_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝑆𝑇𝐼𝐶𝐾𝐸𝑅𝑆/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}sticker *<responder a imagen o video>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}sticker *<enlace / link / url>*_
❐ོ👽 _${usedPrefix}s *<responder a imagen o video>*_
❐ོ👽 _${usedPrefix}s *<enlace / link / url>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}scircle *<responder a imagen>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}sremovebg *<responder a imagen>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}semoji *<tipo> <emoji>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}attp *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}attp2 *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}ttp *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}ttp2 *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}ttp3 *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}ttp4 *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}ttp5 *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}pat *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}slap *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}kiss *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}dado_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}wm *<packname> <author>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}stickermarker *<efecto> <responder a imagen>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👽⸙ _${usedPrefix}stickerfilter *<efecto> <responder a imagen>*_
*────┈┈┈┄┄╌╌╌╌┄┄┈┈┈─*
*<𝑂𝑊𝑁𝐸𝑅 𝑌 𝑀𝑂𝐷𝐸𝑅𝐴𝐷𝑂𝑅𝐸𝑆/>*

├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}cajafuerte_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}enable *restrict*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}disable *restrict*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}enable *autoread*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}disable *autoread*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}enable *public*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}disable *public*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}enable *pconly*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}disable *pconly*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}enable *gconly*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}disable *gconly*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}banchat_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}unbanchat_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}banuser *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}unbanuser *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}banuser *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}bc *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}bcchats *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}bcgc *<texto>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}cleartpm_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}restart_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}update_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}addprem *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}delprem *<@tag>*_
├─❒༊ֶ֪⃟⃦̸̷⃕͟👑⸙ _${usedPrefix}listprem_
`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://github.com/CrearBot/Panda-Bot330', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
