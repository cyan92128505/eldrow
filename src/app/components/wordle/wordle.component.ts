import { Component, OnInit } from '@angular/core';
import { WordleService } from 'src/app/services/wordle.service';
@Component({
  selector: 'wordle-component',
  templateUrl: './wordle.component.html',
  styleUrls: ['./wordle.component.scss'],
})
export class WordleComponent implements OnInit {
  wordleResult = 'START';

  constructor(private wordleService: WordleService) {}

  ngOnInit(): void {}

  click() {
    this.wordleResult = this.wordleService.result();
  }
}
