import BasePage from "./base.page";
import SideMenuComponent from "../components/common/sidemenu.component";

class DashboardPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/dashboard');
    this.sideMenu = new SideMenuComponent();
  }
};

export default DashboardPage;
