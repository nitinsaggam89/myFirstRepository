import { State } from './models/state';
import { Country } from './models/country';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CscService {

  constructor() { }

  countries: Country[] = [
    { id: 1, country: 'USA' },
    { id: 2, country: 'India' },
    { id: 3, country: 'Australia' },
  ]

  states: State[] = [
    { id: 1, countryId: 1, state: 'Arizona' },
    { id: 2, countryId: 1, state: 'Alaska' },
    { id: 3, countryId: 1, state: 'Florida' },
    { id: 4, countryId: 1, state: 'Hawaii' },
    { id: 5, countryId: 2, state: 'Gujarat' },
    { id: 6, countryId: 2, state: 'Goa' },
    { id: 7, countryId: 2, state: 'Punjab' },
    { id: 8, countryId: 3, state: 'Queensland' },
    { id: 8, countryId: 3, state: 'South Australia' },
    { id: 8, countryId: 3, state: 'Tasmania' }
  ]

  getCountries(): Country[] {
    return this.countries;
  }

  getStates(): State[] {
    return this.states;
  }
}
