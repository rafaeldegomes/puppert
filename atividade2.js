const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/atividade1.html');
  //await page.screenshot({ path: 'example.png' });

 
  const body = await page.evaluate(() => {
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

  var p = body.p.length;
  var a = body.a.length;
  var h1tamanho = body.h1.length;
  var h2tamanho = body.h2.length;
  var h3tamanho = body.h3.length;
  var h4tamanho = body.h4.length;
  var h5tamanho = body.h5.length;
  var h6tamanho = body.h6.length;
  if(h1tamanho > 0 || 
    h2tamanho > 0  ||
    h3tamanho > 0 ||
    h4tamanho > 0 ||
    h5tamanho > 0 ||
    h6tamanho > 0 ){
    
    media= media +1 ;
    nota = nota + 10;
    console.log('Voce acertou')
  }else{
    console.log('voce nao utilizou a tag h1, h2, h3, h4, h5 ou h6');
    media= media +1 ;
    nota = nota + 0;
  }
  

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

  
  if(a > 1){
    console.log('voce acertou a tag de link');
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log('voce deve utilizar pelo duas tags para link ')
    media= media +1 ;
    nota = nota + 0;
  }
  //console.log('H1:', body.h1.length)
 // console.log('P = ', body.p.length)
 var nota_final = nota/media;
 console.log('------------ SUA NOTA ------------')
 console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
  await browser.close();
})();