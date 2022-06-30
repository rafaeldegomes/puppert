const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('https://firebasestorage.googleapis.com/v0/b/cryptic-portal-321218.appspot.com/o/atividade1%2Fatividade1?alt=media&token=acacb139-9d02-4db9-8fbf-25c3f3a26323');
  //await page.screenshot({ path: 'example.png' });

  const body = await page.evaluate(() => {
    return {
      margem: $('div').css('margin'),
      padding : $('div').css('padding-top'),
      width  : $('div').css('max-width')
    };
  });
  var nota = 0;
  var media = 0;
  
  if(body.margem == "23px 11px 12px 111px"){
    console.log("Sua div esta com margem 23px 11px 12px 111px PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a div com margem 23px 11px 12px 111px")
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.padding == "30px"){
    console.log("Sua div esta com padding-top 30px PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a div com margem padding-top 30px")
    media= media +1 ;
    nota = nota + 0;
  }

  if(body.width == "400px"){
    console.log("Sua div esta com max-width 400px PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a div com max-width 400px")
    media= media +1 ;
    nota = nota + 0;
  }


  var nota_final = nota/media;
  console.log('------------ SUA NOTA ------------')
  console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();