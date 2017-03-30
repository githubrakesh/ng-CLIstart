import {
  Component, Input,
  OnInit
} from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-departmentdetail',
  templateUrl: './departmentdetail.component.html',
  styleUrls: ['./departmentdetail.component.css']
})
export
  class DepartmentdetailComponent implements OnInit {

  private errorMessage: string = '';
  private isLoading: boolean = true;

  public department: Department;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _deptService: DepartmentService) {
  }

  ngOnInit() {
    this.department = this._activatedRoute.snapshot.data['department'];

    /* this._activatedRoute.params
       .switchMap(
       (params: Params) => this._deptService.getDepartment(+params['departmentId']))
       .subscribe(
       (dept: Department) => this.department = dept);
 */
  }

}
