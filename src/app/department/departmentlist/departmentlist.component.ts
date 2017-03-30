import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MdIconRegistry, MdIcon } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { DepartmentService } from '../department.service';
import { Department } from '../department';


@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export
  class DepartmentlistComponent implements OnInit {
  private errorMessage: string = '';
  private isLoading: boolean = true;
  public departments: Department[];

  constructor(
    private _departmentService: DepartmentService,
    private _router: Router) {
  }

  public ngOnInit() {
    this.getDepartments();
  }

  public addDepartment() {
    // this._router.navigate(['./departments', 'add']);
    this._router.navigate(['./departments', 'add']);
  }
  public showInfo(_dept: Department) {
    this._router.navigate(['./departments', 'detail', _dept.departmentId]);
  }

  private getDepartments() {
    return this._departmentService.getDepartments()
      .subscribe(
      (depts) => this.departments = depts, // success
      (errorMsg) => this.errorMessage = errorMsg, // error
      () => this.isLoading = false); // graceful complete
  }


}
