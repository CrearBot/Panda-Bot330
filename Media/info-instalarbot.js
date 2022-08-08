import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
------------------------------------

*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚃𝙴𝚁𝙼𝚄𝚇*
╭┅┅┅┄┄《🐼》┄┄┉┉
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕cd
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 termux-setup-storage
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 apt update 
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 pkg upgrade 
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 pkg install git -y
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 pkg install nodejs -y
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 pkg install ffmpeg -y
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 pkg install imagemagick -y
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 pkg install yarn
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 git clone https://github.com/CrearBot/Panda-Bot330
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 cd Panda-Bot330
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 yarn install 
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 npm install
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 npm update
ꪶ͜͡🌙⃝ৡ᭄͢ৣ꙰𒆕 npm start
╰┅┅┉┄┄《🐼》┄┄┉┉
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 - 𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝚁𝙱𝙾𝚃',
body: 'ᴘᴀɴᴅᴀ-ʙᴏᴛ330',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/CrearBot/Panda-Bot330`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
