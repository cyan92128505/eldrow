import { Injectable } from '@angular/core';
import { WordleDict } from './wordle.data';

@Injectable({
  providedIn: 'root',
})
export class WordleService {
  constructor() {}

  _seedDate = new Date(2021, 5, 19, 0, 0, 0, 0);
  _mapToAnswerDict(e: Date, a: Date) {
    let s = new Date(e),
      t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
    return Math.round(t / 864e5);
  }

  _prepareWithSeed(e: Date) {
    return this._mapToAnswerDict(this._seedDate, e);
  }

  _getSolveByDate(e: Date) {
    let a,
      s = this._prepareWithSeed(e);
    return (a = s % WordleDict.length), WordleDict[a];
  }

  result() {
    let _result = this._getSolveByDate(new Date());

    return Buffer.from(`${_result}=`, 'base64').toString();
  }
}
