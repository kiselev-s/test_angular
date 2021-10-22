import { Component, OnInit } from '@angular/core';
import {IMoney} from "../../shared/interfaces";
import {HttpService} from "../../shared/http.service";
//import {BehaviorSubject, Subject} from "rxjs";
import {formatDate} from "@angular/common";
import {NotifierService} from "angular-notifier";


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  title = 'Конвертер валют';

  public moneyData: IMoney[] = [];
  private uan: IMoney = {//костыль
    cc: 'UAH',
    exchangedate: formatDate(new Date(), 'dd.MM.yyyy', 'en-US'),
    r030: 0,
    rate: 1,
    txt: 'Українська гривня',
  }

  public valueInput: number = 0; //сумма отдать
  public valueResult: number = 0;//сумма получить

  public moneyInput: any; //объект мани отдать
  public moneyResult: any;////объект мани получить

  // public bSubject: BehaviorSubject<IMoney[]> = new BehaviorSubject<IMoney[]>([]);
  // public $bSubject = this.bSubject.asObservable()
  //
  // public subject: Subject<any> = new Subject<any>();

  constructor(private http: HttpService,
              private notifier: NotifierService) { }

  ngOnInit(): void {
    this.http.getMoney().subscribe((res:IMoney[]) => {
      this.moneyData = res;
      this.moneyData.push(this.uan);
      this.sortMoney();
    })
  }

  getNameMoney(item: IMoney):string {
    if(item)
      return item.txt;
    else
      return 'Ничего не выбрано';
  }

  calculate(input: IMoney, result: IMoney):void {
    if (!input || !result)
      this.notifier.notify('error', 'Неверный выбор!');
    else {
      this.valueResult = +(this.valueInput * this.moneyInput.rate / this.moneyResult.rate).toFixed(2);
      if (this.valueResult < 0.1)
        this.notifier.notify('warning', 'Слишком маленькая сумма!');
    }
  }


  sortMoney() {
    this.moneyData.sort(function (a, b) {
      if (a.cc > b.cc) {
        return 1;
      }
      if (a.cc < b.cc) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
  }

}
