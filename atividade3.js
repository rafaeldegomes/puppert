const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/atividade1.html');
  //await page.screenshot({ path: 'example.png' });

 
  const body = await page.evaluate(() => {
    return {
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


  if(body.ul.length > 0 ){
    console.log('ACERTOU O UL')
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log('** Errou O UL')
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.ol.length > 0 ){
    console.log('ACERTOU O OL')
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log('** Errou O OL')
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.tabela.length > 0 ){
    console.log('ACERTOU O TABELA')
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log('** Errou O TABELA')
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.imagem.length == 1 ){
    console.log('VOCE DEVE COLOCAR MAIS DE UMA IMAGEM EM SUA PAGINA')
    media= media +1 ;
    nota = nota + 10;
  }else if(body.imagem.length > 1){
    console.log('Acertou a IMAGEM')
    media= media +1 ;
    nota = nota + 5;
  }
  else{
    console.log('** Errou O IMAGEM')
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.audio.length > 0 ){
    console.log('ACERTOU O AUDIO')
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log('** Errou O AUDIO')
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.video.length > 0 ){
    console.log('ACERTOU O VIDEO')
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log('** Errou O VIDEO')
    media= media +1 ;
    nota = nota + 0;
  }

  var nota_final = nota/media;
  console.log('------------ SUA NOTA ------------')
  console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
  await browser.close();
})();

