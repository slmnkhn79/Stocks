import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { DataSource } from '@angular/cdk/table';
import {Sort} from '@angular/material';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
import { query } from '@angular/core/src/render3';
export interface StockElement {
  date: Date;
  symbol: string;
  open: number;
  close: number;
  low: number;
  high:number;
  volumen:number
}

@Component({
  selector: 'app-allstocks',
  templateUrl: './allstocks.component.html',
  styleUrls: ['./allstocks.component.css']
})

export class AllstocksComponent implements OnInit {
  displayedColumns: string[] = ['date', 'symbol', 'open', 'close']
  private stocks;
  private checks = [];
  private allChecked = false;
  private page = 0 ;
  private stockPerPage = 10;
  private numPages = 4;
  private query = '{}';
  // private sortDirection = SortDire;
  private sortImage = "";
  constructor(public service:ServiceService) { 
    this.getData(this.query,this.stockPerPage,this.page * this.stockPerPage);
    this.numPages = this.service.getCount();
      
    
  }
  
  ngOnInit() {
   
  }
  handlePrev(){
    this.page--;
    this.getData(this.query,this.stockPerPage,this.page * this.stockPerPage);
  }
  handleNext(){
    this.page++;
    this.getData(this.query,this.stockPerPage,this.page * this.stockPerPage);
  }
   getData(query,limit, skip){
    this.service.getAllStocks(query,limit,skip).subscribe((data)=>{
      this.stocks = data
     },(err)=>{

     });
  }
  handleSelect(newItemCount){
    this.stockPerPage = newItemCount;
    this.getData(this.query,this.stockPerPage,this.page * this.stockPerPage);
  }
  handleSearch(searchValue){
    console.log(searchValue);
    if(searchValue == ''){
      this.query = '{}';
    }else{
    this.query = JSON.stringify({'symbol': searchValue });
    }
    this.page = 0;
    this.getData(this.query,this.stockPerPage,this.page * this.stockPerPage);
  }
  resetView(){
    this.query ='{}';
    this.page = 0;
    this.getData(this.query,this.stockPerPage,this.page * this.stockPerPage);
  }
}
