import { Component, OnChanges } from '@angular/core';
import { style } from 'typestyle';
import ElementEnum from 'src/app/type/ElementEnum';
import { BotService } from './service/bot.service';
import { GameService } from './service/game.service';
import ResultEnum from './type/ResultEnum';

@Component({
  selector: '[rps-app]',
  templateUrl: './app.component.html',
})
export class AppComponent {
  ElementEnum = ElementEnum;
  elementSelectedByUser = ElementEnum.None;
  elementSelectedByBot = ElementEnum.None;
  title = 'rock-paper-scissors';
  result = '';
  resultEnum: ResultEnum = ResultEnum.Null;

  svg = style({
    height: '30px',
    width: '30px',
    margin: 'auto',
    padding: '3%',
    borderRadius: '50px',
    $nest: {
      svg: {
        height: '30px',
        width: '30px',
      },
    },
  });

  link = style({
    height: '100%',
    width: '100%',
    display: 'block',
    cursor: 'pointer',
    $nest: {
      ':hover': {
        background: '#dc7c7c',
      },
      ':focus': {
        background: '#dc7c7c',
      },
    },
  });

  text = style({
    textAlign: 'center',
    color: '#443f3f',
  });

  app = style({
    padding: '13% 0',
  });

  constructor(private botService: BotService, private gameService: GameService) {}

  onClick(type: ElementEnum) {
    this.elementSelectedByUser = type;
    this.elementSelectedByBot = this.botService.action();
    this.resultEnum = this.gameService.isUserWin(type, this.elementSelectedByBot);

    this.changeText();
    this.changeColor();
  }

  changeText() {
    this.result = 'Null';
    if (this.resultEnum === ResultEnum.Victory) {
      this.result = 'Victory';
    } else if (this.resultEnum === ResultEnum.Defeat) {
      this.result = 'Defeat';
    }
  }

  changeColor() {
    let color = '#443f3f';
    if (this.resultEnum === ResultEnum.Victory) {
      color = '#097509';
    } else if (this.resultEnum === ResultEnum.Defeat) {
      color = '#d82f2f';
    }

    this.text = style({
      textAlign: 'center',
      color: color,
    });
  }
}
