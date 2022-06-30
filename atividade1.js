const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('https://firebasestorage.googleapis.com/v0/b/cryptic-portal-321218.appspot.com/o/atividade1%2Fatividade1?alt=media&token=acacb139-9d02-4db9-8fbf-25c3f3a26323');
  //await page.screenshot({ path: 'example.png' });

 
  const body = await page.evaluate(() => {
    return {
      h1: $('h1'),
      p: $('p'), 
    };
  });

  var nota = 0;
  var media = 0;
  var h1tamanho = body.h1.length;
  var p = body.p.length;

  //verifica a tag h1
  if(h1tamanho == 1){
    console.log('Voce usou apenas uma tag H1 e a atividade pede duas')
    media= media +1 ;
    nota = nota + 5;
  }
  else if(h1tamanho == 2){
    console.log('Voce acertou a tag h1')
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log('voce nao utilizou a tag h1');
    media= media +1 ;
    nota = nota + 0;
  }

  //verifica a tag P 
  if(p == 1){
    console.log('Voce usou apenas uma tag P e a atividade pede duas')
    media= media +1 ;
    nota = nota + 5;
  }
  else if(p == 2){
    console.log('Voce acertou a tag P')
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log('voce nao utilizou a tag P');
    media= media +1 ;
    nota = nota + 0;
  }
  //console.log('H1:', body.h1.length)
 // console.log('P = ', body.p.length)
 //console.log( body)
 var nota_final = nota/media;
 console.log('------------ SUA NOTA ------------')
 console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
 response.send("h1tamanho");  
 await page.screenshot({ path: 'example2.png' });
  await browser.close();
})();