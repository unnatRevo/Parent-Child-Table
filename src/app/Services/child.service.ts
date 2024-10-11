import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildModel } from '../Models/child.model';
import { PaginatedResponse } from '../Models/paginated-response.model';
import { RequestParams } from '../Models/request-params.model';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  private apiUrl = 'https://localhost:7290/api/parents';

  constructor(private http: HttpClient) { }

  getChildData(parentId: number, requstParam: RequestParams):
    Observable<PaginatedResponse<ChildModel>> {
    let params = new HttpParams()
      .set('pageNumber', requstParam.pageNumber)
      .set('pageSize', requstParam.pageSize)
      .set('sortBy', requstParam.sortBy)
      .set('sortDirection', requstParam.sortDirection);

    return this.http.get<PaginatedResponse<ChildModel>>(
      `${this.apiUrl}/${parentId}/children`, { params }
    );
  }

  getChildInfo(parentId: number, childId: number): Observable<ChildModel> {
    const actionName = `${this.apiUrl}/${parentId}/child/${childId}`
    return this.http.get<ChildModel>(actionName);
  }
}
