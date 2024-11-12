import Header from "../components/common/header.component";
import SideMenu from "../components/common/sidemenu.component";

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
