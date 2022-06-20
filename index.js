const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/');
  //await page.screenshot({ path: 'example.png' });

  const resultado = await page.evaluate(( ) => {
    const collection = document.getElementsByClassName("example");
    return testData = !!document.getElementById("Anchor Id")
  });

  const resultado1 = await page.evaluate(( ) => {
    return collection = !!document.getElementsByClassName("teste");
     
  });

  const resultado3 = await page.evaluate(( ) => {
    return collection = !!document.querySelector("table");
     
  });
  const resultado4 = await page.evaluate(( ) => {
    return collection = document.getElementById("Anchor Id");
     
  });

  const resultado5 = await page.evaluate(( ) => {
    return collection = !!document.querySelector("title");
     
  });
  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      display: $('#div1').css('display'),
      background: $('.demo').text(),
      deviceScaleFactor: $('p'),
      
    };
  });

  console.log('CSS:', dimensions.deviceScaleFactor.length);
  console.log('CSS:as');
  console.log(resultado)
  console.log(resultado1)
  console.log(resultado3)
  console.log(resultado4)
  console.log("result 5 ", resultado5)
  
  await browser.close();
})();