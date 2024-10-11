import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChildEventModel } from 'src/app/Models/child.event.model';
import { ChildModel } from 'src/app/Models/child.model';
import { RequestParams } from 'src/app/Models/request-params.model';
import { ChildService } from '../../Services/child.service'; // Service to fetch child data

@Component({
  selector: 'app-child-table',
  templateUrl: './child-table.component.html',
  styleUrls: ['./child-table.component.scss']
})
export class ChildTableComponent implements OnInit {
  @Input() parentId!: number;
  @Input() children!: Array<ChildModel>;
  @Input() totalCount !: number;

  @Output() pageChange: EventEmitter<ChildEventModel> = new EventEmitter<ChildEventModel>()

  childRequestParam: RequestParams = new RequestParams();

  datasource: MatTableDataSource<ChildModel> = new MatTableDataSource<ChildModel>();

  _childDisplayedColumns: Array<string> = ['id', 'status', 'dueDate', 'taskType', 'dataManager', 'adm', 'pm'];
  childDisplayedColumns: string[] = [...this._childDisplayedColumns, 'actions'];

  constructor(private childService: ChildService) { }

  ngOnInit() {
    this.childRequestParam.pageNumber = 0;
    this.childRequestParam.pageSize = 2;

    this.datasource.data = this.children;
  }

  onChildPageChange(event: any) {
    this.childRequestParam.pageNumber = event.pageIndex;
    this.childRequestParam.pageSize = event.pageSize;

    this.pageChange.emit(new ChildEventModel(this.parentId, this.childRequestParam));
  }

  onRowClick(row: ChildModel) {
    const me = this;

    function success(response: ChildModel) {
      alert(JSON.stringify(response));
    }

    function failure(error: any) {
      console.error(`Error: ${error}`);
    }

    this.childService.getChildInfo(this.parentId, row.id)
      .subscribe({
        next: success,
        error: failure
      });
  }
}
