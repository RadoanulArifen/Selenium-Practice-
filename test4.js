import {Builder, By, Browser, Key} from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testrun4(){
    await driver.get("https://demoqa.com/");
    await driver.manage().window().maximize();
    await driver.findElement(By.xpath("//h5[text()='Alerts, Frame & Windows']")).click();
    await driver.findElement(By.xpath("//span[text()='Browser Windows']")).click();
    await driver.findElement(By.id("windowButton")).click();

}
testrun4();