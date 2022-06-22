const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/atividade7.html');
  //await page.screenshot({ path: 'example.png' });

  const body = await page.evaluate(() => {
    return {
      fundo: $('body').css('background-color'),
      h1 : $('h1').css('color'),
      p : $('p').css('color'),
      borda : $('#BORDA-TESTE').css('border-style'),
    };
  });
  var nota = 0;
  var media = 0;

  if(body.fundo == "rgb(0, 0, 255)"){
    console.log("Sua pagina esta com fundo azul PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a pagina com o fundo AZUL")
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.h1 == "rgb(0, 128, 0)"){
    console.log("Sua tag H1 esta com a cor verde PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a tag h1 na cor VERDE")
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.p == "rgb(0, 0, 255)"){
    console.log("Sua tag p esta com a cor azul PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a tag p na cor AZUL")
    media= media +1 ;
    nota = nota + 0;
  }
 
  if(body.borda == "solid"){
    console.log("Sua borda esta SOLID PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a borda SOLID")
    media= media +1 ;
    nota = nota + 0;
  }


  var nota_final = nota/media;
  console.log('------------ SUA NOTA ------------')
  console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();