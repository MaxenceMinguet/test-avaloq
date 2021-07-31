import { Injectable } from '@angular/core';
import ElementEnum from '../type/ElementEnum';
import ResultEnum from '../type/ResultEnum';

@Injectable({ providedIn: 'root' })
export class GameService {
  isUserWin(user: ElementEnum, bot: ElementEnum): ResultEnum {
    if (user === ElementEnum.Paper && bot === ElementEnum.Paper) {
      return ResultEnum.Null;
    } else if (user === ElementEnum.Paper && bot === ElementEnum.Scissor) {
      return ResultEnum.Defeat;
    } else if (user === ElementEnum.Paper && bot === ElementEnum.Rock) {
      return ResultEnum.Victory;
    } else if (user === ElementEnum.Scissor && bot === ElementEnum.Scissor) {
      return ResultEnum.Null;
    } else if (user === ElementEnum.Scissor && bot === ElementEnum.Rock) {
      return ResultEnum.Defeat;
    } else if (user === ElementEnum.Scissor && bot === ElementEnum.Paper) {
      return ResultEnum.Victory;
    } else if (user === ElementEnum.Rock && bot === ElementEnum.Rock) {
      return ResultEnum.Null;
    } else if (user === ElementEnum.Rock && bot === ElementEnum.Paper) {
      return ResultEnum.Defeat;
    } else if (user === ElementEnum.Rock && bot === ElementEnum.Scissor) {
      return ResultEnum.Victory;
    }
    return ResultEnum.None;
  }
}
