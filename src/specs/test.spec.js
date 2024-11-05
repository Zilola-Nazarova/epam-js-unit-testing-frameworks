/**
 * 1. visit www.epam.com
 * 2. validate the page's title
 */
describe("first e2e test suite", () => {

  it("should open www.epam.com", async () => {
    const expectedTitle = "EPAM | Software Engineering & Product Development Services";

    await browser.url("/");
    await expect(browser).toHaveTitle(expectedTitle);
  });

  it("should open hamburger menu", async () => {
    await browser.url("/");
    await $('.hamburger-menu__button').click();
    await expect($("//div[@class='os-content']")).toBeDisplayed();
  });

  it("should navigate to Services page", async () => {
    await browser.url("/");
    const links = await $$(".top-navigation__item-link");
    // "//a[@class='top-navigation__item-link']"
    await links[0].click();
    await expect(browser).toHaveTitle('Services | EPAM');
  });
});
