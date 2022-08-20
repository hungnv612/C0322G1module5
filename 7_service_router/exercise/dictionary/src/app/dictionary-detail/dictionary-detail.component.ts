import {Component, OnInit} from '@angular/core';
import {IWord} from "../model/dictionary";
import {DictionaryService} from "../service/dictionary.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  detail: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
  }

  ngOnInit()
    :
    void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const ing = paramMap.get('ing');
      this.detail = this.dictionaryService.findBy(ing);

    })
  }

  back() {
    this.route.navigateByUrl('');
  }
}
