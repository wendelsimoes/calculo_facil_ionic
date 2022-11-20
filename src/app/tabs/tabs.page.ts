import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tabStyle: string = 'tab-theory';

  constructor() {}

  setTabStyle(tabStyle: string) {
    this.tabStyle = tabStyle;
  }

}
