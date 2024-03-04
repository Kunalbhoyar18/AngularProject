// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sharedData: any;

  constructor() { }

  // Method to set data
  setData(data: any) {
    this.sharedData = data;
  }

  // Method to get data
  getData() {
    return this.sharedData;
  }
}
