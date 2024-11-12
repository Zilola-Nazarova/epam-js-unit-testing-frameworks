const BaseComponent = require("../common/base.component");

class AddDoctorComponent extends BaseComponent {
  constructor() {
    super('.new-doctor-dialog');
  }

  get saveBtn() {
    return this.rootEl.$('button.e-primary');
  }

  get closeBtn() {
    return this.rootEl.$('.e-dlg-closeicon-btn');
  }

  /**
   * 
   * @param {'name' | 'phone' | 'email' | 'education' | 'designation' | } name 
   * @returns {*}
   */

  input(name) {
    const selectors = {
      name: "[name='Name']",
      phone: '#DoctorMobile',
      email: "[name='Email']",
      education: "[name='Education']",
      designation: "[name='Designation']"
    };
    return this.rootEl.$(selectors[name.toLowerCase()]);
  }
};

module.exports = AddDoctorComponent;
