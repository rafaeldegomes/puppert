const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/atividade9.html');
  //await page.screenshot({ path: 'example.png' });

  const body = await page.evaluate(() => {
    return {
      centralizado: $('#p1').css('text-align'),
      direita : $('#p2').css('text-align'),
      maiuscula  : $('#p1').css('text-transform'),
      minuscula  : $('#p2').css('text-transform'),
    };
  });
  var nota = 0;
  var media = 0;
  



  if(body.centralizado == "center"){
    console.log("Sua div P1 esta alinhada ao centro PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR Sua div P1 alinhada ao centro")
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.direita == "right"){
    console.log("Sua div P2 esta alinhada a direita PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR Sua div P2 esta alinhada a direita")
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.maiuscula == "uppercase"){
    console.log("Sua div P1 esta com letra maiuscula PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a div P1 com letra maiuscula")
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.minuscula == "lowercase"){
    console.log("Sua div esta P2 com letra minuscula PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a div P2 com letra minuscula")
    media= media +1 ;
    nota = nota + 0;
  }


  var nota_final = nota/media;
  console.log('------------ SUA NOTA ------------')
  console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();