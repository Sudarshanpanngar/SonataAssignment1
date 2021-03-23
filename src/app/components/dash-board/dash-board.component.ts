import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private dataServe:DataServiceService) { }

  fData:any[];

  ngOnInit(){
    // this.getApiData();
  }
  // getApiData(){
  //   this.dataServe.getData().subscribe((data)=>{
  //     this.fData=data;
  //   })
  // }
}
