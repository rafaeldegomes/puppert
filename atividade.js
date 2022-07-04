const puppeteer = require('puppeteer');

    (async () => {
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.goto('http://localhost/dados/index.html');
    //await page.screenshot({ path: 'example.png' });
    await page.evaluate(async () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://firebasestorage.googleapis.com/v0/b/dev-soulcodeacademy.appspot.com/o/atividades%2Fstyle.css?alt=media&token=f6a8a038-ded4-40d6-94e8-a689b1a8a43d';
    const promise = new Promise((resolve, reject) => {
        link.onload = resolve;
        link.onerror = reject;
    });
    document.head.appendChild(link);
    await promise;
    });
  
  const body = await page.evaluate(() => {
    return {
      h1: $('h1'),
      p: $('p'), 
      pcolor: $('body').css('background-color')
    };
  });

  console.log(body.pcolor);
 //response.send("h1tamanho");  
 await page.screenshot({ path: 'example2.png' });
  await browser.close();
})();