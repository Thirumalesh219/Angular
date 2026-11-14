import { Component } from '@angular/core';
import { ChildCtoPComponent } from '../child-cto-p/child-cto-p.component';

@Component({
  selector: 'app-parent-cto-p',
  imports: [ChildCtoPComponent],
  templateUrl: './parent-cto-p.component.html',
  styleUrl: './parent-cto-p.component.scss'
})
export class ParentCtoPComponent {
  message="Hii from parent component";
  getMessage(message:string){
    this.message=message;
  }
}
