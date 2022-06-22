const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/atividade4.html');
  
   
  var nota = 0;
  var media = 0;
  //verificando imagem
  const body = await page.evaluate(() => {
    return {
      imagem: $('img'),
      form: $('form')
    };
  });
  
  if(body.imagem.length == 1 ){
    console.log('voce adicionou corretamente a imagem como logo da pagina')
    media= media +1 ;
    nota = nota + 10;
  }
  else{
    console.log('** Errou O IMAGEM')
    media= media +1 ;
    nota = nota + 0;
  }
  //fim verificação imagem
  //verifica form 2 unidade

  if(body.form.length == 1 ){
    console.log('VOCE DEVE COLOCAR MAIS DE um form EM SUA PAGINA')
    media= media +1 ;
    nota = nota + 10;
  }else if(body.form.length > 1){
    console.log('Acertou a form')
    media= media +1 ;
    nota = nota + 5;
  }
  else{
    console.log('** Errou O form')
    media= media +1 ;
    nota = nota + 0;
  }

  //fim da verificação do form

  const verifica_email = await page.evaluate(( ) => {
    return collection = !!document.querySelector("#email");
  });
  const verifica_senha = await page.evaluate(( ) => {
    return collection = !!document.querySelector("#senha");
  });
  const verifica_submit = await page.evaluate(( ) => {
    return collection = !!document.querySelector("#submit");
  });

  if(verifica_email == true){
    const resultado5 = await page.evaluate(( ) => {
      const input = document.querySelector("#email");
      const texto = input.type;
      return collection = texto;
       
    });
    if(resultado5 == "email"){
      console.log('Acertou o input email com type email')
      media= media +1 ;
      nota = nota + 10;
    }else{
      console.log('Voce criou o input email porem nao esta com o type email')
      media= media +1 ;
      nota = nota + 0;
    }
  }else{
    console.log('**Voce deve criar o input email')
  }  
  if(verifica_senha == true){
    const resultado5 = await page.evaluate(( ) => {
      const input = document.querySelector("#senha");
      const texto = input.type;
      return collection = texto;
       
    });
    if(resultado5 == "password"){
      console.log('Acertou o input senha com type password')
      media= media +1 ;
      nota = nota + 10;
    }else{
      console.log('Voce criou o input senha porem nao esta com o type password')
      media= media +1 ;
      nota = nota + 0;
    }
  }else{
    console.log('**Voce deve criar o input email')
  } 

  if(verifica_submit == true){
    const resultado5 = await page.evaluate(( ) => {
      const input = document.querySelector("#submit");
      const texto = input.type;
      return collection = texto;
       
    });
    if(resultado5 == "submit"){
      console.log('Acertou o input submit com type submit')
      media= media +1 ;
      nota = nota + 10;
    }else{
      console.log('Voce criou o input submit porem nao esta com o type submit')
      media= media +1 ;
      nota = nota + 0;
    }
  }else{
    console.log('**Voce deve criar o input submit')
  } 
  
 
  
 
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();

