import { Browser, Builder, By, Key } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testRun() {
    await driver.get("https://demo.evershop.io/");

    await driver.manage().window().maximize();

    await driver.sleep(3000);

    await driver.findElement(By.xpath("//a[contains(@class,'search')]")).click();

    await driver.sleep(5000);

    await driver.findElement(By.xpath("//input[@placeholder='Search']"))
        .sendKeys("Stainless Steel Thermos", Key.ENTER);

    await driver.sleep(5000);

    await driver.quit();
}

testRun();