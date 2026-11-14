import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sib1',
  imports: [],
  templateUrl: './sib1.component.html',
  styleUrl: './sib1.component.scss'
})
export class Sib1Component {
  @Input() inputText="Data from Sib1";
  @Output() sendOutputText = new EventEmitter<string>();
  sendData(){
    this.sendOutputText.emit("Text from Sibling 1");
  }
}
