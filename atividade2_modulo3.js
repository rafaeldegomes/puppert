const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('C://Users//rafae//OneDrive//Área de Trabalho//repositorio_git//pupperteer//puppert//atividade2modulo3.html');
  //await page.screenshot({ path: 'example.png' });

 
  const body = await page.evaluate(() => {
    return { 
     
      alert : document.getElementsByClassName('alert alert-primary').length,
      nav : $('nav').length,
      container : document.getElementsByClassName('container').length,
      COLSM8 : document.getElementsByClassName('col-lg-4').length,
      text : document.querySelector("#email")
    };
  });
  var nota = 0;
  var media = 0;

  const verifica_nome = await page.evaluate(( ) => {
    return collection = !!document.querySelector("#nome");
  });
 
  if(verifica_nome == true){
    const resultado5 = await page.evaluate(( ) => {
      const input = document.querySelector("#nome");
      const texto = input.type;
      return collection = texto;
       console.log(resultado5);
    });
    console.log(resultado5);
    console.log("Tem o input nome aqui")
  }else{
    console.log("NÃOOOOOO Tem o input nome aqui")
  }

  

 /* if(body.modelo == "Mustang"  || body.modelo == "mustang"){
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
*/
  var nota_final = nota/media;
  console.log('------------ SUA NOTA ------------')
  console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
  await browser.close();
})();

