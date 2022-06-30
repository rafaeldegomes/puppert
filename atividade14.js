const functions = require("firebase-functions");


const puppeteer = require('puppeteer');
/**
 * Function to explore the links of a webpage
 * It returns 'Done'! as response
 */
/**
 * Function to explore the links of a webpage
 * It returns 'Done'! as response
 */
 exports.exploreLinks10 = functions.https.onRequest(async (request, response) => {
    
    // Remember that in Firebase you need to launch Puppeteer in headless mode and without sandbox
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    console.log(2);
    // Opening new page
    const page = await browser.newPage();
    console.log(3);
    // Going to a website and waiting until it's completely loaded (works for React pages too)
    await page.goto('https://www.google.com/', {  });
    console.log(4);
    // Getting all the links on the webpage
    //let pageLinks = await page.$$eval('a', links => links.map(link => link.href));
    const body = await page.evaluate(() => {
        return {
          h1: $('h1'),
          p: $('p'), 
        };
      });
      console.log(5);
      var h1tamanho = body.h1.length;
      console.log(h1tamanho); 
      let message = request.query.message || request.body.message || 'Hello World!';
    // Closing the browser
    response.status(200).send(message)
    await browser.close();
    
    // Sending responsse
    response.send("h1tamanho");    
    
});

 exports.helloWorld6 = functions.https.onRequest(async (request, response) => {
    
    
        console.log(2);
      
        const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
        console.log(3); 
      
        const page = await browser.newPage();
        console.log(4);
        
        let message = req.query.message || req.body.message || 'Hello World!';
        res.status(200).send(message);
      
    response.send("h1tamanho");    
    
});