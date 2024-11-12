import BaseComponent from "./base.component";

class SideMenuComponent extends BaseComponent {
  constructor() {
    super('#plannerSiderBar');
  }
  
  get rootEl() {
    return $('#plannerSiderBar');
  }

  item(param) {
    const selectors = {
      dashboard: "[routerlink='/dashboard']",
      schedule: "[routerlink='/calendar']",
      doctors: "[routerlink='/doctors']"
    };

    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

export default SideMenuComponent;
