import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reuse',
  imports: [],
  templateUrl: './reuse.component.html',
  styleUrl: './reuse.component.scss'
})
export class ReuseComponent {
  @Input() welcome="Hii welcome";
}
