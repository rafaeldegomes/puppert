const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('C://Users//rafae//OneDrive//Área de Trabalho//repositorio_git//pupperteer//puppert//index.html');
  //await page.screenshot({ path: 'example.png' });

  const body = await page.evaluate(() => {
    return {
      tabela: $('table, td, th').css('border'),
      direita : $('input[type=text], select').css('display'),
      maiuscula  : $('input[type=text], select').css('padding')
    };
  });
  var nota = 0;
  var media = 0;
  console.log(body.tabela)
  console.log(body.direita)
  console.log(body.maiuscula)


  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();