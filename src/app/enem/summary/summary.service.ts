import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pagination } from 'src/app/interface/pagination.interface';
import { environment } from 'src/environment/environment';
import { SummaryModel } from './interface/summary.interface';
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  currentPage?: Pagination<SummaryModel>;

  constructor(
    private readonly http: HttpClient
  ) { }

  findMany(){
    return this.http.get<Pagination<SummaryModel>>(`${environment.apiUrl}/summary`)
  }

}
