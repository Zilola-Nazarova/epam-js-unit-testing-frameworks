describe('Doctors page', () => {
  beforeEach(async() => {
    await browser.url('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
  });

  it('Check page title', async () => {
    await $("[routerlink='/doctors']").click();
    await expect(browser).toHaveTitle('Appointment Planner - Syncfusion Angular Components Showcase App');
  });
});