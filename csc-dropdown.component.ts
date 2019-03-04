import { State } from './../models/state';
import { Country } from './../models/country';
import { CscService } from './../csc.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-csc-dropdown',
  templateUrl: './csc-dropdown.component.html',
  styleUrls: ['./csc-dropdown.component.css']
})
export class CscDropdownComponent implements OnInit {
  countryCtrl = new FormControl();
  stateCtrl = new FormControl();
  countries: Country[];
  states: State[];
  filterCountries: Observable<Country[]>;
  filterStates: Observable<State[]>;
  countrySelected: boolean = false;
  constructor(private cscservice: CscService) {
  }

  ngOnInit() {
    this.countries = this.cscservice.getCountries();
    this.states = this.cscservice.getStates();
    this.filterCountries = this.countryCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)
      )
    );
  }

  private _filter(value: string): Country[] {
    if (value == '') {
      this.stateCtrl.setValue('');
      this.countrySelected = false;
    }
    const filterValue = value.toLowerCase();
    return this.countries.filter(option => option.country.toLowerCase().includes(filterValue));
  }

  private _filterstate(value: string, countryid: number): State[] {
    return this.states.filter(option => option.countryId == countryid && option.state.toLowerCase().includes(value.toLowerCase()));
  }

  selectedCountry(_event: any, countryId: number) {
    if (_event.source.selected == true) {
      this.countrySelected = true;
      this.stateCtrl.setValue('');
      this.filterStates = this.stateCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterstate(value, countryId)
        )
      );
    }
  }
}
