import { Builder, By, Browser } from "selenium-webdriver";

const driver = new Builder().forBrowser(Browser.CHROME).build();
const gender = "Male";
const date = "10";
const subject = "Computer";

async function testrun2(){

    await driver.get("https://demoqa.com/");

    await driver.manage().window().maximize();

    await driver.sleep(1000);

    await driver.findElement(By.xpath("//div[@class='card-body']//h5[text()='Forms']")).click();
    await driver.findElement(By.xpath("//span[text()='Practice Form']")).click();
    await driver.findElement(By.id('firstName')).sendKeys("Radoanul");
    await driver.findElement(By.id('lastName')).sendKeys("Arifen");
    await driver.findElement(By.id('userEmail')).sendKeys("radoanularifen@gmail.com");
    await driver.findElement(By.xpath(`//input[@id='gender-radio-1' and @value='${gender}']`)).click();
    await driver.findElement(By.id("userNumber")).sendKeys("0168954754");
    await driver.findElement(By.id("dateOfBirthInput")).click();
    await driver.findElement(By.className("react-datepicker__year-select")).click();
    await driver.findElement(By.xpath("//option[@value='2010']")).click();
    await driver.findElement(By.className( `react-datepicker__day react-datepicker__day--0${date}`)).click();
    await driver.findElement(By.id("subjectsInput")).sendKeys(subject);
    await driver.findElement(By.xpath(`//div[@role='option' and contains(text(),'${subject}')]`)).click();
    await driver.findElement(By.xpath("//input[@id='hobbies-checkbox-1']/following-sibling::label[contains(text(),'Sports')]")).click();
    await driver.findElement(By.xpath())



}
testrun2();