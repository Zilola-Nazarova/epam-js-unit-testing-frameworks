import BasePage from "./base.page";

import { DoctorListHeader, AddDoctorModal } from "../components";

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.listHeaderComponent = new DoctorListHeader();
    this.addDoctorModal = new AddDoctorModal();
  }
};

export default DoctorsPage;
