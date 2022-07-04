
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

   //console.log(req.query.nome); 
   var url2 = req.body.html;
   var css2 = req.body.css;
   console.log("HTML")
   console.log(url2)
   console.log("css")
   console.log(css2)
   var url3 = url2;
    const page = await browser.newPage();
 
   // await page.setContent(q);
     await page.goto(url3, {  });
     await page.addStyleTag({url: css2})

     const body2 = await page.evaluate(() => {
        return {
          h1: $('h1'),
          p: $('p'), 
          color: $('body').css('background-color')
        };
      });
      var nota = 0;
      var media = 0;
      var h1tamanho = body2.h1.length;
      var color = body2.color;
      var p = body2.p.length;
  
    
    //const screenshot = await page.screenshot();
    await browser.close(); 

    //res.header({ "Content-Type":  "image/png" });
    //res.end(screenshot, "binary");
    //res.setHeader("Access-Control-Allow-Origin", "*");
      //verifica a tag h1
      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(h1tamanho == 1){
        res.write('Voce usou apenas uma tag H1 e a atividade pede duas <br>')
        media= media +1 ;
        nota = nota + 5;
      }
      else if(h1tamanho == 2){
        res.write('Voce acertou a tag h1 <br>')
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write('voce nao utilizou a tag h1 <br>');
        media= media +1 ;
        nota = nota + 0;
      }
      if(p == 1){
        res.write('Voce usou apenas uma tag P e a atividade pede duas <br>')
        media= media +1 ;
        nota = nota + 5;
      }
      else if(p == 2){
        res.write('Voce acertou a tag P <br>')
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write('voce nao utilizou a tag P <br>');
        media= media +1 ;
        nota = nota + 0;
      }
      var nota_final = nota/media;
      res.write('------------ SUA NOTA ------------ <br>')
     res.write('Sua nota final na atividade é de = ' + nota_final.toFixed(1) + '<br>')
    
    res.end();  
    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>h1tamanho</h1>");   
    res.status(200).end("ola");
  });
