import { Component } from '@angular/core';
import { StructuralDirectiveComponent } from '../structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from '../attribute-directive/attribute-directive.component';
import { SignalsComponent } from '../signals/signals.component';

@Component({
  selector: 'app-user',
  imports: [StructuralDirectiveComponent,AttributeDirectiveComponent, SignalsComponent ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

}
