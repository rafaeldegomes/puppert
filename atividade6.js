const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/atividade6.html');
  //await page.screenshot({ path: 'example.png' });

  const dimensions = await page.evaluate(() => {
    return {
      p: $('p').css('color'),
      teste : $('#teste').css('color'),
    };
  });
  var nota = 0;
  var media = 0;
  
  if(dimensions.p == "rgb(0, 0, 255)"){
    console.log("Sua tag esta azul PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR A TAG P EM AZUL")
    media= media +1 ;
    nota = nota + 0;
  }

  if(dimensions.teste == "rgb(255, 0, 0)"){
    console.log("Sua ID TESTE esta vermhla PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR ID TESTE EM VERMELHO")
    media= media +1 ;
    nota = nota + 0;
  }


  var nota_final = nota/media;
  console.log('------------ SUA NOTA ------------')
  console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();