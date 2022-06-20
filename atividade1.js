const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/atividade1.html');
  //await page.screenshot({ path: 'example.png' });

 
  const body = await page.evaluate(() => {
    return {
      h1: $('h1'),
      p: $('p'),
      
    };
  });


  var h1tamanho = body.h1.length;
  var p = body.p.length;
  if(h1tamanho == 1){
    console.log('Voce usou apenas uma tag H1 e a atividade pede duas')
  }
  else if(h1tamanho == 2){
    console.log('Voce acertou a tag h1')
    
  }else{
    console.log('voce nao utilizou a tag h1');
  }
  if(p == 1){
    console.log('Voce usou apenas uma tag P e a atividade pede duas')
  }
  else if(p == 2){
    console.log('Voce acertou a tag P')
    
  }else{
    console.log('voce nao utilizou a tag P');
  }
  //console.log('H1:', body.h1.length)
 // console.log('P = ', body.p.length)
  await browser.close();
})();