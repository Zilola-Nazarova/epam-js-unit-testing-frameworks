const DashboardPage = require("../po/pages/dashboard.page");
const DoctorsPage = require("../po/pages/doctors.page");

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

describe('Doctors page', () => {
  beforeEach(async() => {
    await dashboardPage.open();
  });

  it('Check page title', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });

  it('Open modal window for adding a new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorsPage.listHeaderComponent.addNewDoctorBtn.click();
    await expect(doctorsPage.addDoctorModal.rootEl).toBeDisplayed();
  });

  it('Open modal window for adding a new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorsPage.listHeaderComponent.addNewDoctorBtn.click();
    await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();

    await doctorsPage.addDoctorModal.input('name').setValue('John Doe');
    await doctorsPage.addDoctorModal.input('phone').setValue('1111111111');
    await doctorsPage.addDoctorModal.input('email').setValue('test@test.com');
    await doctorsPage.addDoctorModal.input('education').setValue('Basic');
    await doctorsPage.addDoctorModal.input('designation').setValue('Test');

    await doctorsPage.addDoctorModal.saveBtn.click();
    
    await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();

    await expect($('#Specialist_8 .name')).toHaveText('Dr. John Doe');
    await expect($('#Specialist_8 .education')).toHaveText('Basic', { ignoreCase: true });
  });

  it('Open modal window for adding a new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await doctorsPage.listHeaderComponent.addNewDoctorBtn.click();
    await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();

    await doctorsPage.addDoctorModal.closeBtn.click();
    await expect(doctorsPage.addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
