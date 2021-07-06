const puppeteer = require('puppeteer');

let finalObj = { quotes: [] }
let finalObjJson
let obj

async function scrapeQuotes(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url)

  const [el] = await page.$x('//*[@id="mw-content-text"]');
  const txt = await el.getProperty('textContent');
  const rawTxt = await txt.jsonValue();


  obj = {
    id: i + 1,
    quoteText: quote,
    persons: persons
  }

  console.log(rawTxt);

  browser.close();
}

scrapeQuotes('https://en.wikiquote.org/wiki/Twin_Peaks');