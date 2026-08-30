import { ChangeDetectionStrategy, Component, computed, DoCheck, effect, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalsComponent{
  counter = signal<number>(0);
  a=signal(10);
  b=20;
  compute = computed(()=> this.a()*this.b);
  compute2= linkedSignal({
    source:this.counter,
    computation:(c,p)=>{
      console.log("Counter",c); // C is source value
      console.log("Previous value",p); // p is previous value object it has {source:c(previous),value:v(previous value)}
      return c*this.b;
    },
    equal:(a,b)=>{
      console.log(a,"First value");
      console.log(b,"Second value");
      return a===b;
    }
  })
  compute3=linkedSignal(()=>this.a()*this.b)
  constructor(){
    this.counter.set(5);
    console.log(this.b,"Before setting the b value")
    setTimeout(()=>{
      // this.b=40;
      this.a.set(100);
      // console.log(this.b,"After time")
    },5000)

    effect(()=>{
      console.log(this.a(),this.counter(),"In the effect1");
    })

    effect(()=>{
      console.log(this.a(),this.counter(),"In effect 2")
    })
  }
  onIncrement(){
    // this.b=this.b+1;
    this.counter.update(v=>v+1)
  }
}
