import { Injectable } from '@angular/core';
import ElementEnum from '../type/ElementEnum';

@Injectable({ providedIn: 'root' })
export class BotService {
  action(): ElementEnum {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return ElementEnum.Paper;
      case 1:
        return ElementEnum.Scissor;
      case 2:
        return ElementEnum.Rock;
      default:
        return ElementEnum.None;
    }
  }
}
