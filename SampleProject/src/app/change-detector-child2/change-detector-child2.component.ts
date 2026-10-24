import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-change-detector-child2',
  imports: [],
  templateUrl: './change-detector-child2.component.html',
  styleUrl: './change-detector-child2.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectorChild2Component implements DoCheck {
  ngDoCheck(): void {
    console.log("Do check in Child 2");
  }
  submit(){
    console.log("Clicked button in Child 2");
  }
}
