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
    return collection = !!document.querySelector("p");
     
  });
  const resultado4 = await page.evaluate(( ) => {
    return collection = document.getElementById("Anchor Id");
     
  });
  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      display: $('#div1').css('display'),
      background: $('#div1').css('background-color'),
      //deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log('CSS:', dimensions);
  console.log(resultado)
  console.log(resultado1)
  console.log(resultado3)
  console.log(resultado4)
  await browser.close();
})();