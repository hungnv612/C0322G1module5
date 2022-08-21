import {Injectable} from '@angular/core';
import {Word} from '../word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  list: Word[] = [{
    ing: 'Gold',
    vn: 'vàng'
  },
    {
      ing: 'Diamond',
      vn: 'kim cương'
    }
  ];

  constructor() {
  }

  findById(ing: string): Word {

    return this.list.find(wordObj => wordObj.ing === ing);
  }

  findAll(): Word[] {
    return this.list
  }
}
