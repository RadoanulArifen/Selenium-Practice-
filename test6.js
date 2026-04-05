import {Builder,By,Key,Browser} from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();

async function testrun6(){
     await driver.get("https://demoqa.com/");
        await driver.manage().window().maximize();
        await driver.findElement(By.xpath("//h5[text()='Alerts, Frame & Windows']")).click();
        await driver.findElement(By.xpath("//span[@class='text' and text()='Alerts']")).click();
        // await driver.findElement(By.xpath("//button[@class='btn btn-primary' and id='alertButton'] ")).click();
        await driver.findElement(By.id("alertButton")).click();
        await alert.accept();

}

testrun6();
