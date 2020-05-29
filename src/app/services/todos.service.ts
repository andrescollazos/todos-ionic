import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  lists: List[];

  constructor() {
    this.lists = [];
    console.log('Initialized service');
  }
}
