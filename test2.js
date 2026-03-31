import { Builder, By, Browser } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testrun2(){

    await driver.get("https://demoqa.com/");

    await driver.manage().window().maximize();

    await driver.sleep(3000);

    await driver.findElement(By.xpath("//div[@class='card-body']//h5[text()='Forms']")).click();
     await driver.findElement(By.xpath("//span[text()='Practice Form']")).click();
}
testrun2();