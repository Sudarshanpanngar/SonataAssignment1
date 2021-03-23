import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  constructor(private dataSeerve: DataServiceService) {
    this.dataSeerve.listen().subscribe((m: any) => {
      this.showSearchList();
    })
  }

  dataSource=new MatTableDataSource;
  sData: any[];
  srchToHist: any[]=[];
  objectKeys = Object.keys;
  ngOnInit(): void {
    this.showSearchList();
    
   }

  showSearchList() {
    this.dataSeerve.serachData().subscribe((data) => {
      // this.dataSource = new MatTableDataSource;
      this.dataSource=data;
      this.sData=data;
      this.passHistory(this.dataSource);
      this.applyFilter;
      localStorage.setItem("datas", JSON.stringify(this.dataSource));
      let datal = JSON.parse(localStorage.getItem("datas")); 
      
    })
     this.dataSeerve.filter("register click");   
  }
   
  
   passHistory(data:any){
     this.dataSeerve.sendDataToOtherComponent(this.dataSource);     
   }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
       this.dataSource.filter= filterValue.trim().toLowerCase();
    // console.log((this.sData.find(k => k.login === filterValue)));

  //   if((filterValue.length>2)&&(this.sData.find(k => k.login === filterValue)))
  //   {
  //   let arr = [];  
  //   Object.keys(filterValue).map(function(key){  
  //   arr.push({[key]:filterValue[key]})  
  //   return arr;  
  //   console.log("Resultant arrary after conversion ", arr);});    
  //  }   
  }

  // onSubmit() {
  //   this.dataSeerve.filter("register click");
  //   this.showSearchList();

  // }

}
