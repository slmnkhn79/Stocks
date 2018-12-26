
export interface Stock{
    _id?: string,
    date:string,
    symbol:string,
    open:number,
    close:number,
    low:number,
    high:number,
    volume:number
}
export interface ChartData{
    month:String,
    value:number
  }