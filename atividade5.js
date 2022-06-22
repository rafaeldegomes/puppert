const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/atividade5.html');
  //await page.screenshot({ path: 'example.png' });
  /*const resultado5 = await page.evaluate(( ) => {
    const input =  $('a')[1];
    const texto = input.text;
    return collection = texto;
     
  });
  console.log(resultado5)
  //$('a')[1].text*/
  var nota = 0;
  var media = 0;
  const body = await page.evaluate(() => {
    return {
      nav : $('nav'),
      a : $('a'),
      li : $('li'),
      section :   $('section'),   
    };
  });

  if(body.nav.length == 1){
    console.log("voce adicionou a tag nav corretamente")
    media= media +1 ;
    nota = nota + 10;
    if(body.a.length == 5){
      console.log("voce adicionou os 5 itens corretamente")
      media= media +1 ;
      nota = nota + 10;
    }else{
      console.log("voce deve criar os 5 itens home, about, gallery, sin in, sing out")
      media= media +1 ;
      nota = nota + 0;
    }
  }else{
    console.log("verifique se voce adicionou a tag nav")
    media= media +1 ;
      nota = nota + 0;
  }


  if(body.section.length == 3){
    console.log('voce criou corretamente as section')
    media= media +1 ;
    nota = nota + 10;
  }else{
    console.log('voce DEVE criar e somente 3 section')
    media= media +1 ;
    nota = nota + 0;
  }
  var nota_final = nota/media;
  console.log('------------ SUA NOTA ------------')
  console.log('Sua nota final na atividade é de = ', nota_final.toFixed(1))
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();

