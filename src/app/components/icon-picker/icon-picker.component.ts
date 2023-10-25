import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.css']
})
export class IconPickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedIcon: string | null = null;
  isPickerOpen = false;

  pickerLeft = 0; // Initialize with 0
  pickerTop = 0; // Initialize with 0

  availableIcons: string[] = [
    'fa fa-address-book', 'fa fa-address-book-o', 'fa fa-address-card', 'fa fa-address-card-o', 'fa fa-adjust', 
    'fa fa-american-sign-language-interpreting', 'fa fa-anchor', 'fa fa-archive', 'fa fa-area-chart', 'fa fa-arrows', 
    'fa fa-arrows-h', 'fa fa-arrows-v', 'fa fa-asl-interpreting', 'fa fa-assistive-listening-systems', 'fa fa-asterisk', 
    'fa fa-at', 'fa fa-automobile', 'fa fa-audio-description', 'fa fa-balance-scale', 'fa fa-ban', 'fa fa-bank',
  ];

  openIconPicker(event: MouseEvent) {

    this.pickerLeft = event.clientX - 250;
    this.pickerTop = event.clientY + 50;

    this.isPickerOpen = !this.isPickerOpen;
  }

  setIcon(icon: string) {
      this.selectedIcon = icon;
      this.isPickerOpen = false;
  }

  // importIcon(event: any) {
  //     const file: File = event.target.files[0];

  //     if (file) {
  //         const reader = new FileReader();
  //         reader.onload = (e: any) => {
  //             this.selectedIcon = e.target.result;
  //         };
  //         reader.readAsDataURL(file);
  //     }
  //     this.isPickerOpen = false;
  // }

  toggleIconPicker(event: MouseEvent) {
    event.stopPropagation(); // Prevent the click event from propagating
    this.openIconPicker(event);
  }
  
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    // Check if the click occurred outside the icon picker
    const iconPicker = document.querySelector('.icon-picker');
    if (iconPicker && !iconPicker.contains(event.target as Node)) {
      this.isPickerOpen = false;
    }
  }

}
