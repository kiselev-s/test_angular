import { Component, OnInit } from '@angular/core';
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  title = 'calc not works!';

  constructor(private notifier: NotifierService) { }

  ngOnInit(): void {
    this.notifier.notify('success', 'Калькулятора еще нет =)');
  }

}
