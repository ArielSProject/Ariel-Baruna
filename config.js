const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6285321822875','6282118022072']
global.premium = ['6282118022072']
global.botname = 'Aespi Botz'
global.packname = 'Aespi Botz'
global.author = 'Ariel Sandy Permana'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.footer = 'Aespi Botz'
global.sp = '⭔'
global.limitawal = {
premium: "Infinity",
free: 25
}

global.image = fs.readFileSync('./connect/image/logo.jpg')
global.thumbnail = fs.readFileSync('./connect/image/thumb.jpg')

global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Tunggu Kak...',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
