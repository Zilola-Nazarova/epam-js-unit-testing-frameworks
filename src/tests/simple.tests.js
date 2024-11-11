import DashboardPage from "../po/pages/dashboard.page";

const dashboardPage = new DashboardPage();

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
    await $('.specialization-types button.e-control').click();
    await expect($('.new-doctor-dialog')).toBeDisplayed();
  });

  it('Open modal window for adding a new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await $('.specialization-types button.e-control').click();
    await $('.new-doctor-dialog').waitForDisplayed();

    await $("[name='Name']").setValue('John Doe');
    await $('#DoctorMobile').setValue('1111111111');
    await $("[name='Email']").setValue('test@test.com');
    await $("[name='Education']").setValue('Basic');
    await $("[name='Designation']").setValue('Test');

    await $('.e-footer-content button.e-primary').click();

    await expect($('#Specialist_8 .name')).toHaveText('Dr. John Doe');
    await expect($('#Specialist_8 .education')).toHaveText('Basic', { ignoreCase: true });
  });

  it('Open modal window for adding a new doctor', async () => {
    await dashboardPage.sideMenu.item('doctors').click();
    await $('.specialization-types button.e-control').click();
    await $('.new-doctor-dialog').waitForDisplayed();

    await $('.new-doctor-dialog .e-dlg-closeicon-btn').click();
    await expect($('.new-doctor-dialog')).not.toBeDisplayed();
  });
});
