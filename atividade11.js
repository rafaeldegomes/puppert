const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('C://Users//rafae//OneDrive//Área de Trabalho//repositorio_git//pupperteer//puppert//indexjs.html');
  //await page.screenshot({ path: 'example.png' });

  const body = await page.evaluate(() => {
    return {
      verifica_variavel1: $('#variavel1').html(),
      verifica_variavel2: $('#variavel2').html(),
      verifica_soma: $('#soma').html(),
      verifica_subtracao1: $('#subtracao').html(),
    };
  });
  var nota = 0;
  var media = 0;

  if(body2.verifica_variavel1 == "10"){
    console.log("Sua variavel numero1 esta com o valor 10 PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a variavel numero1 com o valor 10")
    media= media +1 ;
    nota = nota + 0;
  }
  if(body2.verifica_variavel2 == "15"){
    console.log("Sua variavel numero2 esta com o valor 15 PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** VOCE DEVE DEIXAR a variavel numero2 com o valor 15")
    media= media +1 ;
    nota = nota + 0;
  }

  if(body2.verifica_soma == "25"){
    console.log("Voce acertou a soma das duas variaveis PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** ops, verifique a soma das duas variaveis")
    media= media +1 ;
    nota = nota + 0;
  }

  if(body2.verifica_subtracao1 == "-5" || body2.verifica_subtracao1 == "5"){
    console.log("Voce acertou a subtracao das duas variaveis PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** ops, verifique a subtracao das duas variaveis")
    media= media +1 ;
    nota = nota + 0;
  }
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();