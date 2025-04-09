import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-checklist-flags-modal',
  templateUrl: './checklist-flags-modal.component.html',
  styleUrls: ['./checklist-flags-modal.component.scss'],
  standalone: true,
  imports: [
    IonicModule,  
    FormsModule,  
    CommonModule  
  ]
})

export class ChecklistFlagsModalComponent {
  greenSectionFlag: { label: string, checked: boolean }[] = [];
  redSectionFlag: { label: string, checked: boolean }[] = [];

  constructor(private modalController: ModalController) {
    this.greenSectionFlag = [
      { label: 'Green Flag 1', checked: false },
      { label: 'Green Flag 2', checked: false },
    ];
    
    this.redSectionFlag = [
      { label: 'Red Flag 1', checked: false },
      { label: 'Red Flag 2', checked: false },
    ];
  }

  dismiss() {
    // Collect all checked items
    const selectedGreen = this.greenSectionFlag.filter(item => item.checked);
    const selectedRed = this.redSectionFlag.filter(item => item.checked);
    
    this.modalController.dismiss({
      green: selectedGreen,
      red: selectedRed
    });
  }
}