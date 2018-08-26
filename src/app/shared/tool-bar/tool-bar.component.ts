import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  @Input() icons;
  @Output() onIconHovered = new EventEmitter();
  constructor() { }
  ngOnInit() {
    this.onActivate(this.icons[0]);
  }
  onActivate(icon) {
    this.onIconHovered.emit(icon);
    this.removeActiveIcon();
    icon.isActive = true;
  }
  removeActiveIcon() {
    this.icons.forEach(icon => {
      if(icon.isActive) {
        icon.isActive = false;
      }
    });
  }
}
