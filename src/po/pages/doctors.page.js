import BasePage from "./base.page";

import ListHeaderComponent from "../components/doctors/list-header.component";
import AddDoctorComponent from "../components/doctors/add-doctor.component";

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.listHeaderComponent = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }
};

export default DoctorsPage;
