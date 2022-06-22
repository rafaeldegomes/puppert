const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('http://localhost/teste/atividade10.html');
  //await page.screenshot({ path: 'example.png' });
  const theme = await page.$eval('input[type=text], select', el =>{
    const styleob = getComputedStyle(el);
    const styles = {};
    for(const prop in styleob){
      if(styleob.hasOwnProperty(prop)){
        styles[prop] = styleob[prop];
      }
    }
    return styles;
  })
 console.log(theme.padding);
  await browser.close();
})();