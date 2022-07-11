
const functions = require("firebase-functions");
const puppeteer = require('puppeteer');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// admin seems to be necessary in order
// to run the function via `firebase emulators`

exports.addMessage = functions.https.onRequest(async (req, res) => {
  initializeApp(); 

  const db = getFirestore();
  const docRef = db.collection('users').doc('alovelace');

await docRef.set({
  first: 'Rafael',
  last: 'Gomes',
  born: 1815
});
});




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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;
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
      res.write('------------ Seu resultado ------------ <br>')
      res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
        
     }
      
     
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade1: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade1: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade1: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>h1tamanho</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade2 = functions
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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

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
          h2: $('h2'),
          h3: $('h3'),
          h4: $('h4'),
          h5: $('h5'),
          h6: $('h6'),
          p: $('p'), 
          a: $('a'),
        };
      });
      var nota = 0;
      var media = 0;
      var p = body2.p.length;
      var a = body2.a.length;
      var h1tamanho = body2.h1.length;
      var h2tamanho = body2.h2.length;
      var h3tamanho = body2.h3.length;
      var h4tamanho = body2.h4.length;
      var h5tamanho = body2.h5.length;
      var h6tamanho = body2.h6.length;
  
      
    //const screenshot = await page.screenshot();
    await browser.close(); 

    //res.header({ "Content-Type":  "image/png" });
    //res.end(screenshot, "binary");
    //res.setHeader("Access-Control-Allow-Origin", "*");
      //verifica a tag h1
      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(h1tamanho > 0 || 
        h2tamanho > 0  ||
        h3tamanho > 0 ||
        h4tamanho > 0 ||
        h5tamanho > 0 ||
        h6tamanho > 0 ){
        
        media= media +1 ;
        nota = nota + 10;
        res.write('Voce ACERTOU o uso das tags h1, h2, h3, h4, h5 ou h6<br>')
      }else{
        res.write('voce ERROU utilizou a tag h1, h2, h3, h4, h5 ou h6<br>');
        media= media +1 ;
        nota = nota + 0;
      }
      
    
      if(p == 1){
        res.write('Voce usou apenas uma tag P e a atividade pede duas<br>')
        media= media +1 ;
        nota = nota + 5;
      }
      else if(p == 2){
        res.write('Voce acertou a tag P<br>')
        media= media +1 ;
        nota = nota + 10;
        
      }else{
        res.write('voce nao utilizou a tag P<br>');
        media= media +1 ;
        nota = nota + 0;
      }
    
      
      if(a > 1){
        res.write('voce acertou a tag de link<br>');
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write('voce deve utilizar pelo duas tags para link <br>')
        media= media +1 ;
        nota = nota + 0;
      }
      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade2: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade2: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade2: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

            
    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade3 = functions
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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

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
          //colocar tags
          ul : $('ul'),
          ol: $('ol'),
          tabela: $('table'),
          imagem: $('img'),
          audio: $('audio'),
          video: $('video')
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
  
    await browser.close(); 

      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      
      // colocar verificacoes
      if(body2.ul.length > 0 ){
        res.write('ACERTOU O UL <br>')
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write('** Errou O UL <br>')
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.ol.length > 0 ){
        res.write('ACERTOU O OL <br>')
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write('** Errou O OL <br>')
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.tabela.length > 0 ){
        res.write('ACERTOU O TABELA <br>')
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write('** Errou O TABELA <br>')
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.imagem.length == 1 ){
        res.write('VOCE DEVE COLOCAR MAIS DE UMA IMAGEM EM SUA PAGINA <br>')
        media= media +1 ;
        nota = nota + 10;
      }else if(body2.imagem.length > 1){
        res.write('Acertou a IMAGEM <br>')
        media= media +1 ;
        nota = nota + 5;
      }
      else{
        res.write('** Errou a tag IMAGEM <br>')
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.audio.length > 0 ){
        res.write('ACERTOU O AUDIO <br>')
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write('** Errou a tag AUDIO <br>')
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.video.length > 0 ){
        res.write('ACERTOU O VIDEO <br>')
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write('** Errou a tag VIDEO <br>')
        media= media +1 ;
        nota = nota + 0;
      }
      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade3: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade3: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade3: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });

  exports.atividade4 = functions
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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

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
          //colocar tags
          imagem: $('img'),
          form: $('form')
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
  
    

      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(body2.imagem.length == 1 ){
        res.write('voce adicionou corretamente a imagem como logo da pagina <br>')
        media= media +1 ;
        nota = nota + 10;
      }
      else{
        res.write('** Errou O IMAGEM <br>')
        media= media +1 ;
        nota = nota + 0;
      }
      //fim verificação imagem
      //verifica form 2 unidade
    
      if(body2.form.length == 1 ){
        res.write('VOCE DEVE COLOCAR MAIS DE um form EM SUA PAGINA <br>')
        media= media +1 ;
        nota = nota + 10;
      }else if(body2.form.length > 1){
        res.write('Acertou a form <br>')
        media= media +1 ;
        nota = nota + 5;
      }
      else{
        res.write('** Errou O form <br>')
        media= media +1 ;
        nota = nota + 0;
      }
    
      //fim da verificação do form
    
      const verifica_email = await page.evaluate(( ) => {
        return collection = !!document.querySelector("#email");
      });
      const verifica_senha = await page.evaluate(( ) => {
        return collection = !!document.querySelector("#senha");
      });
      const verifica_submit = await page.evaluate(( ) => {
        return collection = !!document.querySelector("#submit");
      });
    
      if(verifica_email == true){
        const resultado5 = await page.evaluate(( ) => {
          const input = document.querySelector("#email");
          const texto = input.type;
          return collection = texto;
           
        });
        if(resultado5 == "email"){
          res.write('Acertou o input email com type email <br>')
          media= media +1 ;
          nota = nota + 10;
        }else{
          res.write('Voce criou o input email porem nao esta com o type email <br>')
          media= media +1 ;
          nota = nota + 0;
        }
      }else{
        res.write('**Voce deve criar o input email <br>')
        media= media +1 ;
        nota = nota + 0;
      }  
      if(verifica_senha == true){
        const resultado5 = await page.evaluate(( ) => {
          const input = document.querySelector("#senha");
          const texto = input.type;
          return collection = texto;
           
        });
        if(resultado5 == "password"){
          res.write('Acertou o input senha com type password <br>')
          media= media +1 ;
          nota = nota + 10;
        }else{
          res.write('Voce criou o input senha porem nao esta com o type password <br>')
          media= media +1 ;
          nota = nota + 0;
        }
      }else{
        res.write('**Voce deve criar o input password <br>')
        media= media + 1 ;
        nota = nota + 0;
      } 
    
      if(verifica_submit == true){
        const resultado5 = await page.evaluate(( ) => {
          const input = document.querySelector("#submit");
          const texto = input.type;
          return collection = texto;
           
        });
        if(resultado5 == "submit"){
          res.write('Acertou o input submit com type submit <br>')
          media= media +1 ;
          nota = nota + 10;
        }else{
          res.write('Voce criou o input submit porem nao esta com o type submit <br>')
          media= media + 1 ;
          nota = nota + 0;
        }
      }else{
        res.write('**Voce deve criar o input submit <br>')
        media= media + 1 ;
        nota = nota + 0;
      } 
      
      // colocar verificacoes
      await browser.close(); 
      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     var criado = 1;
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade4: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade4: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade4: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });

  exports.atividade5 = functions
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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

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
          //colocar tags
          nav : $('nav'),
          a : $('a'),
          li : $('li'),
          section :   $('section'),  
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
      
    await browser.close(); 

      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(body2.nav.length == 1){
        res.write("voce adicionou a tag nav corretamente <br>")
        media= media +1 ;
        nota = nota + 10;
        if(body2.a.length == 5){
          res.write("voce adicionou os 5 itens corretamente <br>")
          media= media +1 ;
          nota = nota + 10;
        }else{
          res.write("voce deve criar os 5 itens home, about, gallery, sin in, sing out <br>")
          media= media +1 ;
          nota = nota + 0;
        }
      }else{
        res.write("verifique se voce adicionou a tag nav <br>")
        media= media +1 ;
          nota = nota + 0;
      }
    
    
      if(body2.section.length == 3){
        res.write('voce criou corretamente as section <br>')
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write('voce DEVE criar e somente 3 section <br>')
        media= media +1 ;
        nota = nota + 0;
      }
      // colocar verificacoes

      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      

     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade5: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade5: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade5: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade6 = functions
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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

   console.log("HTML")
   console.log(url2)
   console.log("css")
   console.log(css2)

   var url3 = url2;

  const page = await browser.newPage();
 
   // await page.setContent(q);
     await page.goto(url3, {  });
     await page.addStyleTag({url: css2})

     const dimensions = await page.evaluate(() => {
        return {
          //colocar tags
          p: $('p').css('color'),
          teste : $('#teste').css('color'),
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(dimensions.p == "rgb(0, 0, 255)"){
        res.write("Sua tag esta azul PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR A TAG P EM AZUL <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(dimensions.teste == "rgb(255, 0, 0)"){
        res.write("Sua ID TESTE esta vermhla PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR ID TESTE EM VERMELHO <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    await browser.close(); 

     
      
      // colocar verificacoes

      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade6: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade6: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade6: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });

    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade7 = functions
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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

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
          //colocar tags
          fundo: $('body').css('background-color'),
          h1 : $('h1').css('color'),
          p : $('p').css('color'),
          borda : $('#BORDA-TESTE').css('border-style'),
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(body2.fundo == "rgb(0, 0, 255)"){
        res.write("Sua pagina esta com fundo azul PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a pagina com o fundo AZUL <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.h1 == "rgb(0, 128, 0)"){
        res.write("Sua tag H1 esta com a cor verde PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a tag h1 na cor VERDE <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.p == "rgb(0, 0, 255)"){
        res.write("Sua tag p esta com a cor azul PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a tag p na cor AZUL <br>")
        media= media +1 ;
        nota = nota + 0;
      }
     
      if(body2.borda == "solid"){
        res.write("Sua borda esta SOLID PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a borda SOLID <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    await browser.close(); 

     
      
      // colocar verificacoes

      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade7: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade7: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade7: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade8 = functions
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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

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
          //colocar tags
          margem: $('div').css('margin'),
      padding : $('div').css('padding-top'),
      width  : $('div').css('max-width')
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(body2.margem == "23px 11px 12px 111px"){
        res.write("Sua div esta com margem 23px 11px 12px 111px PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a div com margem 23px 11px 12px 111px <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.padding == "30px"){
        res.write("Sua div esta com padding-top 30px PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a div com margem padding-top 30px <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.width == "400px"){
        res.write("Sua div esta com max-width 400px PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a div com max-width 400px <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    
    await browser.close(); 

      
      
      // colocar verificacoes

      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade8: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade8: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade8: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade9 = functions
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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

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
          //colocar tags
          centralizado: $('#p1').css('text-align'),
          direita : $('#p2').css('text-align'),
          maiuscula  : $('#p1').css('text-transform'),
          minuscula  : $('#p2').css('text-transform'),
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(body2.centralizado == "center"){
        res.write("Sua div P1 esta alinhada ao centro PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR Sua div P1 alinhada ao centro <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.direita == "right"){
        res.write("Sua div P2 esta alinhada a direita PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR Sua div P2 esta alinhada a direita <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.maiuscula == "uppercase"){
        res.write("Sua div P1 esta com letra maiuscula PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a div P1 com letra maiuscula <br>")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body2.minuscula == "lowercase"){
        res.write("Sua div esta P2 com letra minuscula PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a div P2 com letra minuscula<br>")
        media= media +1 ;
        nota = nota + 0;
      }
    await browser.close(); 

      
      
      // colocar verificacoes

      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade9: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade9: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade9: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade10 = functions
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
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

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
          //colocar tags
          tabela: $('table, td, th').css('border'),
          direita : $('input[type=text], select').css('display'),
          maiuscula  : $('input[type=text], select').css('padding')
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
  
    await browser.close(); 

      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(body2.tabela == "2px solid rgb(255, 0, 0)"){
        res.write("Sua tabela esta com borda 2px solid e verde PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR a tabela com borda 2px solid e verde <br>")
        media= media +1 ;
        nota = nota + 0;
      }
      if(body2.direita == "inline-block"){
        res.write("Sua input esta com type text e com o display inline-block PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR o input esta com type text e com o display inline-block <br>")
        media= media +1 ;
        nota = nota + 0;
      }

      if(body2.maiuscula == "12px 20px"){
        res.write("Sua input esta com type text e com padding 12px 20px PARABENS <br>")
        media= media +1 ;
        nota = nota + 10;
      }else{
        res.write("** VOCE DEVE DEIXAR o input esta com type text e com padding 12px 20px <br>")
        media= media +1 ;
        nota = nota + 0;
      }
      // colocar verificacoes

      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade10: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade10: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade10: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade11 = functions
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
   var js1 = req.body.js;
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

   console.log("HTML")
   console.log(url2)
   console.log("css")
   console.log(css2)
   console.log("JS")
   console.log(js1)

   var url3 = url2;

  const page = await browser.newPage();
 
   // await page.setContent(q);
     await page.goto(url3, {  });
     await page.addStyleTag({url: css2})
     await page.addScriptTag({
      url: js1
    });
     

     const body2 = await page.evaluate(() => {
        return {
          verifica_variavel1: $('#variavel1').html(),
          verifica_variavel2: $('#variavel2').html(),
          verifica_soma: $('#soma').html(),
          verifica_subtracao1: $('#subtracao').html(),
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
      
    await browser.close(); 

      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(body.verifica_variavel1 == "10"){
        console.log("Sua variavel numero1 esta com o valor 10 PARABENS")
        media= media +1 ;
        nota = nota + 10;
      }else{
        console.log("** VOCE DEVE DEIXAR a variavel numero1 com o valor 10")
        media= media +1 ;
        nota = nota + 0;
      }
      if(body.verifica_variavel2 == "15"){
        console.log("Sua variavel numero2 esta com o valor 15 PARABENS")
        media= media +1 ;
        nota = nota + 10;
      }else{
        console.log("** VOCE DEVE DEIXAR a variavel numero2 com o valor 15")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body.verifica_soma == "25"){
        console.log("Voce acertou a soma das duas variaveis PARABENS")
        media= media +1 ;
        nota = nota + 10;
      }else{
        console.log("** ops, verifique a soma das duas variaveis")
        media= media +1 ;
        nota = nota + 0;
      }
    
      if(body.verifica_subtracao1 == "-5" || body.verifica_subtracao1 == "5"){
        console.log("Voce acertou a subtracao das duas variaveis PARABENS")
        media= media +1 ;
        nota = nota + 10;
      }else{
        console.log("** ops, verifique a subtracao das duas variaveis")
        media= media +1 ;
        nota = nota + 0;
      }
      // colocar verificacoes

      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade11: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade11: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade11: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade12 = functions
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
   var js1 = req.body.js;
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

   console.log("HTML")
   console.log(url2)
   console.log("css")
   console.log(css2)
   console.log("JS")
   console.log(js1)

   var url3 = url2;

  const page = await browser.newPage();
 
   // await page.setContent(q);
     await page.goto(url3, {  });
     await page.addStyleTag({url: css2})
     await page.addScriptTag({
      url: js1
    });
     

     const body2 = await page.evaluate(() => {
        return {
          verifica_parimpar: $('#resultado_verificacao').html(),
          verifica_verifica_mes: $('#verifica_mes').html(),
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
      
    await browser.close(); 

      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(body2.verifica_parimpar == "numero é par" || body2.verifica_parimpar == "numero é impar"){
        console.log("Voce acertou a verificacao do numero PARABENS")
        media= media +1 ;
        nota = nota + 10;
      }else{
        console.log("** Voce deve criar uma verificação e informar se o numero é par ou impar ")
        media= media +1 ;
        nota = nota + 0;
      }
      if(body2.verifica_verifica_mes){
        console.log("Voce acertou a verificacao do mes do ano PARABENS")
        media= media +1 ;
        nota = nota + 10;
      }else{
        console.log("** Voce deve criar uma verificação e informar o mes que o usuario digitou ")
        media= media +1 ;
        nota = nota + 0;
      }
      // colocar verificacoes

      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade12: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade12: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade12: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });


  exports.atividade13 = functions
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
   var js1 = req.body.js;
   var atividade_recebida = req.body.atividade;
   var email_aluno = req.body.email;

   console.log("HTML")
   console.log(url2)
   console.log("css")
   console.log(css2)
   console.log("JS")
   console.log(js1)

   var url3 = url2;

  const page = await browser.newPage();
 
   // await page.setContent(q);
     await page.goto(url3, {  });
     await page.addStyleTag({url: css2})
     await page.addScriptTag({
      url: js1
    });
     

     const body2 = await page.evaluate(() => {
        return {
          verifica_parimpar: $('#resultado_verificacao').html(),
          verifica_verifica_mes: $('#verifica_mes').html(),
        };
      });
      var nota = 0;
      var media = 0;
      //colocar variaveis
      
    await browser.close(); 

      res.write('CORREÇÃO DISPONIVEL <br> <br>')
      if(body2.verifica_parimpar == "numero é par" || body2.verifica_parimpar == "numero é impar"){
        console.log("Voce acertou a verificacao do numero PARABENS")
        media= media +1 ;
        nota = nota + 10;
      }else{
        console.log("** Voce deve criar uma verificação e informar se o numero é par ou impar ")
        media= media +1 ;
        nota = nota + 0;
      }
      if(body2.verifica_verifica_mes){
        console.log("Voce acertou a verificacao do mes do ano PARABENS")
        media= media +1 ;
        nota = nota + 10;
      }else{
        console.log("** Voce deve criar uma verificação e informar o mes que o usuario digitou ")
        media= media +1 ;
        nota = nota + 0;
      }
      // colocar verificacoes

      var nota_final = nota/media;
      res.write('------------ Seu resultado ------------ <br>')
     res.write('Sua porcentagem final na atividade é de = ' + nota_final.toFixed(0) + '0%<br>')
     
     try {
      initializeApp();
     } catch {
      
     }
      
     const db = getFirestore();
     const docRef = db.collection('correcao_web1').doc(email_aluno);

     await docRef.get().then((doc) => {
      if (doc.exists) {
          
          if(!doc.data()){
            console.log("Criando um novo arquivo")
            criado = 1;
            docRef.set({
              nota_atividade12: nota_final.toFixed(0)
            });
          }else{
            console.log("UPDATE NO arquivo")
            criado = 0;
            docRef.update({
              nota_atividade12: nota_final.toFixed(0)
            });
          }
      } else {
        criado = 1;
        console.log("Criando um novo arquivo")
        docRef.set({
          nota_atividade12: nota_final.toFixed(0)
        });
        
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
  });
    res.end();  

    //res.end('<html><body><h1>Hello, World!</h1></body></html>');
    res.send("<h1>Finalizado</h1>");   
    res.status(200).end("ola");
  });