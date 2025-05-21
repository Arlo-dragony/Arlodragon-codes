const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(50000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(8000);
                await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: `🪀Support/Contact Developer


⎆Welcome to 𝑻𝑯𝑼𝑵𝑫𝑬𝑹-𝑪𝑳𝑨𝑺𝑺𝑰𝑪-𝑩𝑼𝑮𝑩𝑶𝑻

⎆Whatsapp group 1: https://chat.whatsapp.com/BDoqiGgexOiCfMiZgNaR4d

⎆WhatsApp Channel 2: https://whatsapp.com/channel/0029VaNPPwR30LKQk437x51Q

⎆Whatsapp GC :https://chat.whatsapp.com/I5xIShFtrk43tfaWEmppNH
⎆WhatsApp Number: +254752588323

⎆GitHub: https://github.com/smith-pixe

★MAKE SURE YOU'VE JOINED ALL THE CHANNELS ABOVE FOR UPDATES.

✨WE are the Hackers Family 🔥✅


` });
            await delay(1000 * 2) 
             const classic = await  Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { document: data, mimetype: `application/json`, fileName: `creds.json` })
               Pair_Code_By_Maher_Zubair.groupAcceptInvite("I5xIShFtrk43tfaWEmppNH");
                Pair_Code_By_Maher_Zubair.groupAcceptInvite("I5xIShFtrk43tfaWEmppNH")
             await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: `⚠️Do not share this file with anybody⚠️\n
┌─❖
│𝑻𝑯𝑼𝑵𝑫𝑬𝑹-𝑪𝑳𝑨𝑺𝑺𝑰𝑪-𝑩𝑼𝑮𝑩𝑶𝑻 CONNECTED SUCCESSFULLY 
└┬❖  
┌┤✑ credits to sir 𝕮𝖔𝖑𝖑𝖎𝖓𝖘 𝖘𝖒𝖎𝖙𝖍👊
│└────────────┈ ⳹        
│©2023-2024 𝑻𝑯𝑼𝑵𝑫𝑬𝑹-𝑪𝑳𝑨𝑺𝑺𝑰𝑪-𝑩𝑼𝑮𝑩𝑶𝑻
└─────────────────┈ ⳹\n\n ` }, {quoted: classic });

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
