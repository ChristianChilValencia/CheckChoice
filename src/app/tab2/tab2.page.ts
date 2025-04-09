import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ChecklistFlagsModalComponent } from '../checklist-flags-modal/checklist-flags-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  canidateName: string = '';

  constructor() {}

}
