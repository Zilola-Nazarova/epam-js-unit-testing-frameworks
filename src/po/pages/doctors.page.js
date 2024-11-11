import ListHeaderComponent from "../components/doctors/list-header.component";

class DoctorsPage {
  constructor() {
    this.listHeaderComponent = new ListHeaderComponent();
  }

  async open() {
    return browser.open('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/doctors');
  }
};

export default DoctorsPage;
