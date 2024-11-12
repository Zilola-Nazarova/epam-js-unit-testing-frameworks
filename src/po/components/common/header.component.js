import BaseComponent from "./base.component";

class HeaderComponent extends BaseComponent {
  constructor() {
    super('.planner-header');
  }

  get logoutBtn() {
    return this.rootEl.$('.logout-icon-container');
  }
}

export default HeaderComponent;
