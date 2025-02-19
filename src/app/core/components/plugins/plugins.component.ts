import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { CommonService } from 'src/app/common/services/common.service';

@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent {
  country = new FormControl();
  countries!:any;
  constructor(public common:CommonService){}
  filteredOptions!: Observable<string[]>;
  ngOnInit(): void {
    this.getCountries().then(()=>{
      this.filteredOptions = this.country.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    })
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.data.filter((option:any) => option.name.toLowerCase().includes(filterValue)).map((option:any) => option.name);
  }
  async getCountries(){
     if(!this.countries){
      this.common.getAllCountries().then((res)=>{
        console.log(res);
        
        this.countries= res
      })
    }
  }
  fruitCtrl = new FormControl();
  separatorKeysCodes: number[] = [13, 188]; // Enter and comma key codes
  selectedFruits: string[] = [];

  add(event: any): void {
    const input = event.input;
    const value = event.value;

    // Add fruit
    if ((value || '').trim()) {
      this.selectedFruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    // Reset the form control
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.selectedFruits.indexOf(fruit);

    if (index >= 0) {
      this.selectedFruits.splice(index, 1);
    }
  }
}
