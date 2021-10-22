import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../shared/http.service";
import {IMoney, IPeople, IPeopleResponse} from "../../shared/interfaces";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public peopleData: IPeople[] = [];

  constructor(private http: HttpService) {
  }

  ngOnInit(): void {
    this.http.getPeople().subscribe((res: IPeopleResponse) => {
      //console.log('start');
      //console.log(res);
      this.peopleData = res.results;
      //console.log('stop');
    });

  }
}
