import BasePage from "./base.page";

import ListHeaderComponent from "../components/doctors/list-header.component";
import AddDoctorComponent from "../components/doctors/add-doctor.component";

class DoctorsPage extends BasePage {
  constructor() {
    super('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
    this.listHeaderComponent = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }

  // async open() {
  //   return browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
  // }
};

export default DoctorsPage;
