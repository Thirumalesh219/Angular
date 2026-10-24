import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-change-detector-child1',
  imports: [],
  templateUrl: './change-detector-child1.component.html',
  styleUrl: './change-detector-child1.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectorChild1Component implements DoCheck {
  ngDoCheck(): void {
    console.log("Do check in Child 1");
  }
  submit(){
    console.log("Clicked button in Child 2");}
}
