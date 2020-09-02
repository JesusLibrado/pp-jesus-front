import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 120;
  min = 1;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  vertical = false;
  tickInterval = 1;

  name: string = "";
  genre: string = "FEMALE";
  age: Number = 10;

  constructor() { }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  ngOnInit(): void {

  }

  submit(){
    let object: any = new Object();
    if(this.name != "") object.name = name;
    object.age = this.age;
    object.genre = this.genre;
    this.filter.emit(object);
  }

}
