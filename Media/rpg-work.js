// creditos a https://github.com/FG98F
let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 5000)
let time = global.db.data.users[m.sender].lastwork + 600000
if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `*饾櫞饾殰饾殱饾殜饾殰 饾殞饾殜饾殫饾殰饾殜饾殟饾殬, 饾殟饾殠饾殝饾殠饾殰 饾殟饾殠饾殰饾殞饾殜饾殫饾殰饾殜饾殯 饾殞饾殬饾殩饾殬 饾殩饾殥饾殫饾殥饾殩饾殬 ${msToTime(time - new Date())} 饾殭饾殜饾殯饾殜 饾殶饾殬饾殨饾殶饾殠饾殯 饾殜 饾殱饾殯饾殜饾殝饾殜饾殦饾殜饾殯!*`

m.reply(`${pickRandom(global.work)} *${hasil} XP*`)
global.db.data.users[m.sender].lastwork = new Date * 1
}
handler.help = ['work']
handler.tags = ['xp']
handler.command = ['work', 'trabajar']
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s " 
}


function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

global.work = ["Trabajas como cortador de galletas y ganas", "Trabaja para una empresa militar privada, ganando", "Organiza un evento de cata de vinos y obtiene",
 "Te secuestran y te llevan a un coliseo subterr谩neo donde luchaste contra monstruos con personas que nunca antes hab铆as conocido. Ganas", "Limpias la chimenea y encuentras", 
"Desarrollas juegos para ganarte la vida y ganas", 
"驴Por qu茅 este comando se llama trabajo? Ni siquiera est谩s haciendo nada relacionado con el trabajo. Sin embargo, ganas", "Trabajaste en la oficina horas extras por", 
"Trabajas como secuestrador de novias y ganas", 
"Alguien vino y represent贸 una obra de teatro. Por mirar te dieron", "Compraste y vendiste art铆culos y Ganaste", "Trabajas en el restaurante de la abuela como cocinera y ganas", 
"Trabajas 10 minutos en un Pizza Hut local. Ganaste", 
"Trabajas como escritor(a) de galletas de la fortuna y ganas", "Revisas tu bolso y decides vender algunos art铆culos in煤tiles que no necesitas. Resulta que toda esa basura val铆a", 
"Ves a alguien luchando por subir una caja a su auto, te apresuras a ayudarlo antes de que se lastime. Despu茅s de ayudarlos, amablemente te dan", 
"Desarrollas juegos para ganarte la vida y ganas", 
"Ganas un concurso de comer chili picante. 隆El premio es", 
"Trabajas todo el d铆a en la empresa por", 
"Ayudas a moderar el grupo de DyLux por", "Dise帽aste un logo para *FG* por", 
"Moderaste el grupo cuando *FG* no estaba, el pago fue", 
"隆Trabaj贸 lo mejor que pudo en una imprenta que estaba contratando y gan贸 su bien merecido!", 
"Trabajas como podador de arbustos para *FG98* y ganas", "La demanda de juegos para dispositivos m贸viles ha aumentado, por lo que creas un nuevo juego lleno de micro-transacciones. Con tu nuevo juego ganas un total de", 
"Trabajas como actor de voz para Bob Esponja y te las arreglaste para ganar", 
"Estabas cultivando y Ganaste", "Trabajas como constructor de castillos de arena y ganas", "Trabajaste y Ganaste", 
"Trabajas como artista callejera y ganas","隆Hiciste trabajo social por una buena causa! por tu buena causa Recibiste", 
"Llevas mujeres a la tienda por"
]
