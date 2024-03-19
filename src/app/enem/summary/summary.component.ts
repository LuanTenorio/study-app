import { Component, OnInit } from '@angular/core';
import { SummaryService } from './summary.service';
import { SummaryModel } from './interface/summary.interface';
import { Pagination } from 'src/app/interface/pagination.interface';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  //add-state-management

  summarys: SummaryModel[] = [];
  pagination?: Omit<Pagination, "data">

  constructor(
    private readonly summaryService: SummaryService
  ) {
  }
  
  ngOnInit() {
    if(this.summaryService.currentPage !== undefined){
      const { data, ...page } = this.summaryService.currentPage
      this.summarys = data
      this.pagination = page
    }else{
      this.summaryService.findMany().subscribe(({data, ...page}) => {
        this.summarys = data
        this.pagination = page
      })
    }
  }

}
