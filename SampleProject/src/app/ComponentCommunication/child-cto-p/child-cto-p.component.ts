import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-cto-p',
  imports: [],
  templateUrl: './child-cto-p.component.html',
  styleUrl: './child-cto-p.component.scss'
})
export class ChildCtoPComponent {
  @Output() getMessage=new EventEmitter<string>();

  sendData(){
    this.getMessage.emit("Hi from Child component");
  }
}
