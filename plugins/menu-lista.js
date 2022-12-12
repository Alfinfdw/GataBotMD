import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)
const sections = [
{
title: `𝙇𝙄𝙎𝙏𝘼 𝘿𝙀𝙎𝙋𝙇𝙀𝙂𝘼𝘽𝙇𝙀 | 𝘿𝙍𝙊𝙋-𝘿𝙊𝙒𝙉 𝙇𝙄𝙎𝙏`,
rows: [
      {title: "💖 Owner 💖", description: null, rowId: `${usedPrefix}creadora`},
      {title: "💖 DONASI 💖", description: null, rowId: `${usedPrefix}donar`},
      {title: "🐈 Cara install GataBot-MD 🐈", description: null, rowId: `${usedPrefix}instalarbot`},
      {title: "🤖 JadiBot (maintance} 🤖", description: null, rowId: `${usedPrefix}jadibot`},
      {title: "🚀 Speed GojoBotzMD 🚀", description: null, rowId: `${usedPrefix}ping`},
      {title: "🌀 AllMenu 🌀", description: null, rowId: `${usedPrefix}allmenu`},
      {title: "🌟 InfoMenu 🌟", description: null, rowId: `${usedPrefix}infomenu`},
      {title: "🏅 ListPremium 🏅", description: null, rowId: `${usedPrefix}listprem`},
      {title: "🎒 Inventory 🎒", description: null, rowId: `${usedPrefix}buy`}, 
      {title: "🎡 GameMenu 🎡", description: null, rowId: `${usedPrefix}juegosmenu`},
      {title: "🧰 AudioMenu 🧰", description: null, rowId: `${usedPrefix}audioefectomenu`},
      {title: "🔰 GroupMenu 🔰", description: null, rowId: `${usedPrefix}grupomenu`},
      {title: "⚙️ Pengaturan ⚙️", description: null, rowId: `${usedPrefix}on`}, 
      {title: "🎈 StickerMenu 🎈", description: null, rowId: `${usedPrefix}stickermenu`},
      {title: "🛰️ ConvertMenu 🛰️", description: null, rowId: `${usedPrefix}convertidormenu`},
      {title: "✨ MakerMenu ✨", description: null, rowId: `${usedPrefix}makermenu`},
      {title: "📲 DownloadMenu 📲", description: null, rowId: `${usedPrefix}descargasmenu`},
      {title: "🔍 SearchMenu 🔍", description: null, rowId: `${usedPrefix}buscarmenu`},
      {title: "⛩️ RandomMenu ⛩️", description: null, rowId: `${usedPrefix}randommenu`},
      {title: "🔞 HorrnyMenu 🔞", description: null, rowId: `${usedPrefix}hornymenu`},
      {title: "⚗️ RpgMenu ⚗️", description: null, rowId: `${usedPrefix}rpgmenu`},
      {title: "👨‍💻 OwnerMenu 👨‍💻", description: null, rowId: `${usedPrefix}ownermenu`},
      {title: "📄 𝙏𝙀𝙍𝙈𝙄𝙉𝙊𝙎, 𝘾𝙊𝙉𝘿𝙄𝘾𝙄𝙊𝙉𝙀𝙎 𝙔 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 📄", description: null, rowId: `términos`},
      

]}, ]
 
let name = await conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
//let name = conn.getName(m.sender)
const listMessage = {
text: `ListMenu GojoBotzMD`, //${name} ${ucapan()}
title: null,
buttonText: "𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙈𝙀𝙉𝙐 : 𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐", 
sections }

let imagen = './media/menus/Menu3.jpg'
let ftroli = { key: { fromMe: false, "participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us" }, "message": { orderMessage: { itemCount: 6546464643, status: 200, thumbnail: imagen, surface: 200, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' }}, contextInfo: { "forwardingScore": 999, "isForwarded": true}, sendEphemeral: true}  

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
} 



/*import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
//let userr = global.db.data.users[m.sender]
//userr.registered = false
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 

wm = global.wm
vs = global.vs
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

let name = await conn.getName(m.sender)
//let name = conn.getName(m.sender)

let menu = `╭───────────────────❀\n│${ucapan()}\n│💖•.¸💝¸.• *${name}* •.¸💝¸.•💖\n╰───────────────────❀
╭━━〔 *${wm}* 〕━━⬣
┃✪ *Tiempo Actual | Current Time*	    
┃➺ ${time}   
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Activa durante | Active during* 
┃➺ ${uptime}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Versión de GataBot-MD*
┃➺ ${vs}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) | Users*
┃➺ ${Object.keys(global.db.data.users).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Modo | Mode*
┃➺ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊 - 𝙋𝙍𝙄𝙑𝘼𝙏𝙀' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊 - 𝙋𝙐𝘽𝙇𝙄𝘾'}
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Chat(s) Prohibido(s) | Forbidden Chats*
┃➺ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✪ *Usuario(s) Prohibido(s) | Prohibited Users*
┃➺ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}
╰━━━━━━━━━━━━━━━━━━━⬣`
//menulista
let menulista = `
╭━━━━━━━━━━━━━━━━━━━⬣
┃ ⚡ ListMenu GojoBotzMD ⚡
╰━━━━━━━━━━━━━━━━━━━⬣
${readMore}
╭━━━━━━━━━━━━━━━━━━━⬣
┃ 👨‍💻 Owner 👨‍💻
┃ _${usedPrefix}creadora_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💖 Donasi 💖
┃ _${usedPrefix}donar_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🚀 Speed GojoBotzMD 🚀
┃ _${usedPrefix}ping_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🌀 AllMenu 🌀
┃ _${usedPrefix}allmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🌟 InfoMenu 🌟
┃ _${usedPrefix}infomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🎡 GamesMenu 🎡
┃ _${usedPrefix}juegosmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🧰 AudioMenu 🧰
┃ _${usedPrefix}audioefectomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔰 GroupMeny 🔰
┃ _${usedPrefix}grupomenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⚙️ Pengaturan Group ⚙️
┃ _${usedPrefix}on_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🎈 StickerMenu 🎈
┃ _${usedPrefix}stickermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🛰️ ConvertMenu 🛰️
┃ _${usedPrefix}convertidormenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ✨ MakerMenu ✨
┃ _${usedPrefix}makermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 📲 DownloadMenu 📲
┃ _${usedPrefix}descargasmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔍 SearchMenu 🔍
┃ _${usedPrefix}buscarmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⛩️ RandomMenu ⛩️
┃ _${usedPrefix}randommenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 🔞 HorrnyMenu 🔞
┃ _${usedPrefix}hornymenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ⚗️ RpgMenu ⚗️
┃ _${usedPrefix}rpgmenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 💎 OwnerMenu 💎
┃ _${usedPrefix}ownermenu_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 📄 𝙏𝙀𝙍𝙈𝙄𝙉𝙊𝙎, 𝘾𝙊𝙉𝘿𝙄𝘾𝙄𝙊𝙉𝙀𝙎 
┃ 𝙔 𝙋𝙍𝙄𝙑𝘼𝘾𝙄𝘿𝘼𝘿 📄
┃ _Términos_
╰━━━━━━━━━━━━━━━━━━━⬣`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
} 
await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender] }, { quoted: fkontak, m })
await conn.sendMessage(m.chat, { text: menulista, mentions: [m.sender] }, { quoted: fkontak, m })
	
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = "👋 *BIENVENIDO(A) | WELCOME* 👋"
  if (time >= 4) {
    res = "🌇 *Buenos Días | Good Morning* ⛅"
  }
  if (time >= 11) {
    res = "🏙️ *Buenas Tardes | Good Afternoon* 🌤️"
  }
  if (time >= 15) {
    res = "🌆 *Buenas tardes | Good Afternoon* 🌥️"
  }
  if (time >= 17) {
    res = "🌃 *Buenas noches | Good Evening* 💫"
  }
  return res
}*/

