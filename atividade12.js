const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('C://Users//rafae//OneDrive//Área de Trabalho//repositorio_git//pupperteer//puppert//indexjs.html');
  //await page.screenshot({ path: 'example.png' });

  const body = await page.evaluate(() => {
    return {
      verifica_parimpar: $('#resultado_verificacao').html(),
      verifica_verifica_mes: $('#verifica_mes').html(),
      
    };
  });
  var nota = 0;
  var media = 0;

  if(body.verifica_parimpar == "numero é par" || body.verifica_parimpar == "numero é impar"){
    console.log("Voce acertou a verificacao do numero PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** Voce deve criar uma verificação e informar se o numero é par ou impar ")
    media= media +1 ;
    nota = nota + 0;
  }
  if(body.verifica_verifica_mes){
    console.log("Voce acertou a verificacao do mes do ano PARABENS")
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log("** Voce deve criar uma verificação e informar o mes que o usuario digitou ")
    media= media +1 ;
    nota = nota + 0;
  }

  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();