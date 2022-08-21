import { Component, OnInit } from '@angular/core';
import {Word} from '../word';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  list: Word[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.list = this.dictionaryService.findAll();
  }
}
