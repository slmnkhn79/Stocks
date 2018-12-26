import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-recents',
  templateUrl: './recents.component.html',
  styleUrls: ['./recents.component.css']
})
export class RecentsComponent implements OnInit {
 stockdata: any[] = [];
  public from: Date = new Date('2016/02/05');
  public to: Date = new Date('2018/10/07');

  constructor(public service:ServiceService) { 
    this.getChartData();
  }

  ngOnInit() {
   
    
  }
  getChartData(){
    var json = {
      "symbol":"WLTW"
    }
    this.service.getAllStockspromise(JSON.stringify(json),10,0)
    .then((data)=>{
      data.forEach(function (element) {
        var json = {
          date: new Date(element.date),
          symbol: element.symbol,
          open: element.open,
          close: element.close,
          low: element.low,
          high: element.high,
          volume: element.volume
        }
        console.log(new Date(element.date));
        this.stockdata.push(json);
        //https://www.telerik.com/kendo-angular-ui/components/charts/api/StockChartComponent/
      });
    },(err)=>{
      console.log(err);
    });
  }
  
}
// getData.forEach(function(element){
//   var json = {
// date:new Date(element.date),
// symbol:element.symbol,
// open:element.open,
// close:element.close,
// low:element.low,
// high:element.high,
// volume:element.volume
//   }
//   console.log(new Date(element.date));
//   this.stockdata.push(json);
// });