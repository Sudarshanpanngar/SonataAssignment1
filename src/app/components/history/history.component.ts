import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  rcvdHist:any;

  constructor(private dataHistServe:DataServiceService) { 
 
  }

  ngOnInit(): void {
    this.dataHistServe.shareDataSubject.subscribe((rData)=>{      
      this.rcvdHist=rData;      
     } )
     this.dataHistServe.filter("register click"); 
  }

}
