import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../Models/paginated-response.model';
import { ParentEditModel } from '../Models/parent-edit.model';
import { ParentModel } from '../Models/parent.model';
import { RequestParams } from '../Models/request-params.model';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private apiUrl = 'https://localhost:7290/api';

  constructor(private http: HttpClient) { }

  getParentData(parent: RequestParams, child: RequestParams): Observable<PaginatedResponse<ParentModel>> {

    const actionName = `${this.apiUrl}/parents`;

    const params = new HttpParams()
      .set('parentPageNumber', parent.pageNumber)
      .set('parentPageSize', parent.pageSize)
      .set('sortParentBy', parent.sortBy)
      .set('sortParentDirection', parent.sortDirection)
      .set('childPageNumber', child.pageNumber)
      .set('childPageSize', child.pageSize)
      .set('sortChildBy', child.sortBy)
      .set('sortChildDirection', child.sortDirection)

    return this.http.get<PaginatedResponse<ParentModel>>(actionName, { params });
  }

  getParentInfo(parentId: number): Observable<ParentModel> {
    const actionName = `${this.apiUrl}/${parentId}/info`;
    return this.http.get<ParentModel>(actionName);
  }

  updateParent(parent: ParentEditModel): Observable<ParentEditModel> {
    const actionName = `${this.apiUrl}/parents/${parent.Id}`;
    debugger
    return this.http.put<ParentEditModel>(actionName, parent, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'json',
      reportProgress: true,
    });
  }
}
