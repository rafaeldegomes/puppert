

const functions = require("firebase-functions");
const puppeteer = require('puppeteer');

// admin seems to be necessary in order
// to run the function via `firebase emulators`


exports.preview2 = functions
  .runWith({ memory: "2GB", timeoutSeconds: 50 })
  .https.onRequest(async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Methods", "GET");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Content-Type", "application/json");
    res.type('html');     
    const browser = await puppeteer.launch({
      defaultViewport: { width: 1400, height: 800 },
      headless: true
    });

    
    const {
      query: { q = "" },
    } = req;

   console.log(req.query.nome); 
   var url = req.query.nome;
    const page = await browser.newPage();

   // await page.setContent(q);
     await page.goto(url, {  });

     const body = await page.evaluate(() => {
        return {
          h1: $('h1'),
          p: $('p'), 
        };
      });
      var h1tamanho = body.h1.length;
    console.log(h1tamanho);
    console.log("to aqui");
    //const screenshot = await page.screenshot();
    await browser.close(); 

    //res.header({ "Content-Type":  "image/png" });
    //res.end(screenshot, "binary");
    //res.setHeader("Access-Control-Allow-Origin", "*");

    res.write("segundo teste recebimento");
    res.write("terceiro" + h1tamanho);
    res.end();  
    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>h1tamanho</h1>");   
    res.status(200).end("ola");
  });
