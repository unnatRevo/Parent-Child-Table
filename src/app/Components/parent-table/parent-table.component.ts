import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChildEventModel } from 'src/app/Models/child.event.model';
import { ChildModel } from 'src/app/Models/child.model';
import { PaginatedResponse } from 'src/app/Models/paginated-response.model';
import { ParentEditModel } from 'src/app/Models/parent-edit.model';
import { ParentModel } from 'src/app/Models/parent.model';
import { RequestParams } from 'src/app/Models/request-params.model';
import { ChildService } from 'src/app/Services/child.service';
import { ParentService } from '../../Services/parent.service'; // Service to fetch parent data

@Component({
  selector: 'app-parent-table',
  templateUrl: './parent-table.component.html',
  styleUrls: ['./parent-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ParentTableComponent implements OnInit {

  parentRequestParams = new RequestParams();
  childRequestParams = new RequestParams();

  parentDataSource = new MatTableDataSource<ParentModel>();

  _parentDisplayColumns: Array<string> = ['id', 'title', 'account', 'dataType', 'sendType', 'system', 'adm', 'dm'];
  _parentColumnsWithAction: Array<string> = [...this._parentDisplayColumns, 'actions']
  parentDisplayedColumns: string[] = [...this._parentColumnsWithAction, 'expand'];

  childDisplayedColumns: string[] = ['id', 'status', 'dueDate', 'taskType', 'dataManager', 'adm', 'pm', 'actions'];

  expandedElement: any | null = null;
  totalParentCount = 0;

  constructor(
    private parentService: ParentService,
    private childService: ChildService
  ) {
    this.parentRequestParams.pageSize = 1;
    this.childRequestParams.pageSize = 2;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loadParentData(this.parentRequestParams, this.childRequestParams);
  }

  loadParentData(parent: RequestParams, child: RequestParams) {

    const me = this;

    function success(response: PaginatedResponse<ParentModel>) {
      me.parentDataSource.data = response.items;
      me.totalParentCount = response.totalCount;
    }

    function failure(error: any) {
      return console.error(`Error while fetching parent data: ${error}`);
    }

    this.parentService.getParentData(parent, child)
      .subscribe({
        next: success,
        error: failure
      });
  }

  toggleRow(element: any) {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  onParentPageChange(event: any) {
    this.parentRequestParams.pageNumber = event.pageIndex;
    this.parentRequestParams.pageSize = event.pageSize;

    this.loadParentData(this.parentRequestParams, this.childRequestParams);
  }

  isRowExpanded(row: any): boolean {
    return (this.expandedElement != undefined || this.expandedElement != null) && this.expandedElement === row;
  }

  print = (item: any) => {
    return console.log(item);
  };

  onChildPageChange(event: ChildEventModel) {
    this.loadChildData(event.ParentId, event.Request);
  }

  loadChildData(parentId: number, child: RequestParams) {
    const me = this;

    function success(response: PaginatedResponse<ChildModel>) {
      me.parentDataSource.data.forEach((x: ParentModel) => {
        if (x.id == parentId) {
          x.children = response.items;
          x.childrenCount = response.totalCount;
        }
      })
    }

    function failure(error: any) {
      console.error(`Error while fetching child data: ${error}`);
    }

    this.childService.getChildData(parentId, child)
      .subscribe({
        next: success,
        error: failure
      });
  }

  onParentEdit(parent: ParentEditModel) {
    const me = this;

    function success(response: ParentEditModel) {
      me.parentDataSource.data.forEach((x: ParentModel) => {
        debugger
        if (x.id == response.Id) {
          x.title = response.Title;
          x.account = response.Account;
          x.datatype = 'Dummy';
          x.sendtype = 'Dummy';
          x.system = response.System;
          x.adm = response.ADM;
          x.dm = response.DM;
        }
      });
    }

    function failure(error: any) {
      console.error(`Error while updating parent: ${error}`);
    }

    this.parentService.updateParent(parent)
      .subscribe({
        next: success,
        error: failure
      });
  }
}
