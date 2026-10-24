import { Component,DoCheck,ChangeDetectionStrategy, ChangeDetectorRef, WritableSignal, signal } from '@angular/core';
import { ChangeDetectorChild1Component } from '../change-detector-child1/change-detector-child1.component';
import { ChangeDetectorChild2Component } from '../change-detector-child2/change-detector-child2.component';

@Component({
  selector: 'app-change-detector',
  imports: [ChangeDetectorChild1Component,ChangeDetectorChild2Component],
  templateUrl: './change-detector.component.html',
  styleUrl: './change-detector.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChangeDetectorComponent implements DoCheck {
  constructor(private ref:ChangeDetectorRef){}
  
  ngDoCheck(): void {
    console.log("Do check",Date.now())
  }

  // ! Use of signals
  counter:WritableSignal<number> =signal(0);
  increment() {
  console.log('Button clicked', Date.now());

  setTimeout(() => {
    console.log('Timer callback started', Date.now());

    this.counter.update(v=>v+1);

    console.log('Counter updated', this.counter());
    
  }, 3000);

    // this.ref.markForCheck();
    // this.counter++;
  }
  // ? Signals done




}
