import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sib2',
  imports: [],
  templateUrl: './sib2.component.html',
  styleUrl: './sib2.component.scss'
})
export class Sib2Component {
  @Input() inputText="Data from Sib2";
  @Output() sendOutputText = new EventEmitter<string>();
  sendData(){
    this.sendOutputText.emit("Text from Sibling 2");
  }
}
