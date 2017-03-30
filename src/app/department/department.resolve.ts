import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { DepartmentService } from './department.service';
import { Department } from './department';

/**
 * DepartmentResolve
 */
@Injectable()
export
    class DepartmentResolve implements Resolve<Department> {
    constructor(private _deptService: DepartmentService) {

    }
    resolve(route: ActivatedRouteSnapshot) {
        return this._deptService.getDepartment(route.params['departmentId']);

    }
}
