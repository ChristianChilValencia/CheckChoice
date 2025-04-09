import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ChecklistFlagsModalComponent } from '../checklist-flags-modal/checklist-flags-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  candidateName2 = [];

  ngOnInit() {}

  constructor(
    private actionSheetController: ActionSheetController,
    private modalController: ModalController
  ) {}

  async presentActionSheet() {
    const modal = await this.modalController.create({
      component: ChecklistFlagsModalComponent,
      cssClass: 'bottom-sheet-modal',
      breakpoints: [0, 0.5, 0.75],
      initialBreakpoint: 0.5,
      backdropDismiss: true,
      showBackdrop: true
    });

    
    // modal.onDidDismiss().then((result) => {
    //   if (result.data) {
    //     console.log('Selected options:', result.data);
    //   }
    // });
    await modal.present();

      




  }


  



}