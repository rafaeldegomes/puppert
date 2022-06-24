const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : true});
  const page = await browser.newPage();
  await page.goto('C://Users//rafae//OneDrive//Área de Trabalho//repositorio_git//pupperteer//puppert//index.html');
  //await page.screenshot({ path: 'example.png' });

  const body = await page.evaluate(() => {
    return {
      funcao: pessoa,//
      verifica_idade: vidade(19)
    };
  });

  console.log(body.funcao)
  console.log(body.verifica_idade)

  await page.screenshot({ path: 'example.png' });
  await browser.close();
})();