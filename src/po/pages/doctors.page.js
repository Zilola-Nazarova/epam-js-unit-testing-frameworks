import ListHeaderComponent from "../components/doctors/list-header.component";
import AddDoctorComponent from "../components/doctors/add-doctor.component";

class DoctorsPage {
  constructor() {
    this.listHeaderComponent = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }

  async open() {
    return browser.open('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
  }
};

export default DoctorsPage;
