import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
------------------------------------

*ββ π²πΎπΌπ°π½π³πΎπ ππ΄ππΌππ*
β­βββββγπΌγββββ
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°πcd
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π termux-setup-storage
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π apt update 
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π pkg upgrade 
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π pkg install git -y
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π pkg install nodejs -y
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π pkg install ffmpeg -y
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π pkg install imagemagick -y
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π pkg install yarn
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π git clone https://github.com/CrearBot/Panda-Bot330
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π cd Panda-Bot330
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π yarn install 
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π npm install
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π npm update
κͺΆΝ‘Νπβΰ§‘α­Ν’ΰ§£κ°π npm start
β°βββββγπΌγββββ
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'πΈπ½π΅πΎππΌπ°π²πΈπΎπ½ - πΈπ½πππ°π»π°ππ±πΎπ',
body: 'α΄α΄Ι΄α΄α΄-Κα΄α΄330',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/CrearBot/Panda-Bot330`}}})   
}
handler.command = /^(instalarbot)/i
export default handler
