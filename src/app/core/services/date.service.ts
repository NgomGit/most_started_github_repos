import { Injectable } from '@angular/core';
import {UNIT_SECOND_IN_MILLISECONDS,
  UNIT_HOUR_IN_SECONDS,
  UNIT_DAY_IN_HOURS,
  UNIT_MONTH_IN_DAYS,
  UNIT_YEAR_IN_MONTHS,
  UNIT_YEAR_IN_DAYS
} from 'src/app/shared'

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  reformatDateTimeInterval(dateFormat){
    let output = ""
    let date1 = this.getDateFromDateFormat(dateFormat)
      let num_months , num_years
      let num_days = this.getTimeInterval(date1)
      if(num_days >  UNIT_YEAR_IN_DAYS){
        num_years = Math.floor(num_days/UNIT_YEAR_IN_DAYS)
        num_days = Math.floor( (num_days / UNIT_YEAR_IN_DAYS - num_years ) * UNIT_YEAR_IN_DAYS)
      }

      if(num_days> UNIT_MONTH_IN_DAYS){
          num_months =  Math.floor(num_days / UNIT_MONTH_IN_DAYS)
          num_days =  Math.floor((num_days / UNIT_MONTH_IN_DAYS - num_months ) * UNIT_MONTH_IN_DAYS)
      }

      if(num_years){
        output += num_years > 1? num_years +" years ": num_years +" year "
      }
        
      if(num_months){
        output += num_months > 1? num_months +" months ": num_months +" month "
      }
        
      if(num_days > 0){
        output += num_days > 1? num_days +" days ": num_days +" day "
      }
        
      return output
  }

  getDateFromDateFormat(dateFormat){
    let dateString = dateFormat.split("T")[0]
    return new Date(dateString)
  }

  getTimeInterval(date1, date2 = new Date()){
    let timeInterval = date2.getTime() - date1.getTime(); 
    let dayInterval =  timeInterval / (UNIT_SECOND_IN_MILLISECONDS * UNIT_HOUR_IN_SECONDS * UNIT_DAY_IN_HOURS); 
    return Math.round(dayInterval)
  }


}
