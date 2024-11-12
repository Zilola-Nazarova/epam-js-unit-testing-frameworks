import BasePage from "./base.page";
import SideMenuComponent from "../components/common/sidemenu.component";

class DashboardPage extends BasePage {
  constructor() {
    super('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenuComponent();
  }

  // async open() {
  //   await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
  // }
};

export default DashboardPage;
