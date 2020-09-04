import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  showBudget: Boolean = false;
  showEdit: Boolean = false;
  showList: Boolean = true;
  sortByControl = new FormControl();
  sortVal: String = 'Time';
  sortReverseControl = new FormControl();
  isSortReverse: Boolean = false;
  showBoughtControl = new FormControl();
  isShowBought: Boolean = true;
  showPlannedControl = new FormControl();
  isShowPlanned: Boolean = true;
  showDeletedControl = new FormControl();
  isShowDeleted: Boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.sortByControl.setValue(this.sortVal);
    this.sortReverseControl.setValue(this.isSortReverse);
    this.showBoughtControl.setValue(this.isShowBought);
    this.showPlannedControl.setValue(this.isShowPlanned);
    this.showDeletedControl.setValue(this.isShowDeleted);
  }

  onClick(buttonName: string) {
    switch (buttonName) {
      case 'budget':
        this.showBudget = !this.showBudget;
        break;
      case 'edit':
        this.showEdit = !this.showEdit;
        break;
      case 'list':
        this.showList = !this.showList;
        break;
    }
  }
}
