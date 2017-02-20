import { Injectable } from '@angular/core';
import { Parts } from './parts';

@Injectable()
export class PartsService {

  private PARTS_LIST_KEY = 'partsList';

  partsList: Parts[];

  constructor() {
    this.partsList = this.restoreList() || [];
    console.log(this.partsList);
  }

  get list(): Parts[] {
    return this.partsList;
  }

  add(parts: Parts) {
    this.partsList.push(parts);
    this.storeList(this.partsList);
  }

  private setList(list: Parts[]) {
    list.forEach(p => {
      this.partsList.push(p);
    });
  }

  private restoreList(): Parts[] {
    return JSON.parse(localStorage.getItem(this.PARTS_LIST_KEY));
  }

  private storeList(list: Parts[]): void {
    localStorage.setItem(this.PARTS_LIST_KEY, JSON.stringify(list));
  }

  delete(index: number) {
    this.partsList.splice(index, 1);
    this.storeList(this.partsList);
  }
}
