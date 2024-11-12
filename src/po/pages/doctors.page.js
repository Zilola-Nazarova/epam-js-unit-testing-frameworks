const BasePage = require("./base.page");

import { DoctorListHeader, AddDoctorModal, SpecialistCard } from "../components";

class DoctorsPage extends BasePage {
  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.listHeaderComponent = new DoctorListHeader();
    this.addDoctorModal = new AddDoctorModal();
  }

  specialistCard(id) {
    return new SpecialistCard(id);
  }
};

module.exports = DoctorsPage;
