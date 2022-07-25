const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('C://Users//rafae//OneDrive//Área de Trabalho//repositorio_git//pupperteer//puppert//atividade1modulo2.html');
  //await page.screenshot({ path: 'example.png' });

 
  const body = await page.evaluate(() => {
    return { 
      fabricacao :  Carro.fabricacao,
      modelo : Carro.modelo,
      ano  : Carro.ano,
      classe : new Retangulo(5,10),
    };
  });
  var nota = 0;
  var media = 0;

  console.log(body.classe.altura);

  if(body.modelo == "Mustang"  || body.modelo == "mustang"){
    console.log('ACERTOU o modelo do objeto carro, Parabéns')
    media= media + 1 ;
    nota = nota + 10;
  }else{
    console.log('ERROU o modelo do objeto carro')
    media= media + 1 ;
    nota = nota + 0;
  }

  if(body.fabricacao == "Ford"  || body.fabricacao == "ford"){
    console.log('ACERTOU a fabricacao do objeto carro, Parabéns')
    media= media + 1 ;
    nota = nota + 10;
  }else{
    console.log('ERROU a fabricacao do objeto carro')
    media= media + 1 ;
    nota = nota + 0;
  }

  if(body.ano == "2022"  ){
    console.log('ACERTOU o ano do objeto carro, Parabéns')
    media= media + 1 ;
    nota = nota + 10;
  }else{
    console.log('ERROU o ano do objeto carro')
    media= media + 1 ;
    nota = nota + 0;
  }

  var nota_final = nota/media;
  console.log('------------ SUA NOTA ------------')
  console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
  await browser.close();
})();

