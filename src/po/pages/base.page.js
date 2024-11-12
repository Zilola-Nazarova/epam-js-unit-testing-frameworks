import Header from "../components/common/header.component";

class BasePage {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  async open() {
    return browser.url(this.url);
  }
};

export default BasePage;
