import {Injectable} from '@angular/core';
import {Iing} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  list: Iing [] = [
    {ing: 'Hello', vn: 'Xin chao'},
    {ing: 'Bye', vn: 'Tam biet'},
    {ing: 'Book', vn: 'Sach'}];

  constructor() {
  }

  findAll() {
    return this.list;
  }

  findBy(ing) {
    return this.list.find(ingDetail => ingDetail.ing === ing);
  }
}
