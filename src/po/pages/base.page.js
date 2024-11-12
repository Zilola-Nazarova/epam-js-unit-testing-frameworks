import { Header, SideMenu } from "../components";

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }

  async open() {
    return browser.url(this.url);
  }
};

export default BasePage;
