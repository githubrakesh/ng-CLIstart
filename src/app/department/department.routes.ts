import {
    Routes,
    RouterModule
} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';

import { DepartmentResolve } from './department.resolve';

export
    const routes: Routes = [
        {
            path: '',
            component: DepartmentlistComponent
        },

        {
            path: 'add',
            component: DepartmentdetailComponent
        },
        {
            path: 'detail/:departmentId',
            component: DepartmentdetailComponent,
            resolve: {
                department: DepartmentResolve
            }
        }

    ];
export
    const DepartmentRouting: ModuleWithProviders = RouterModule.forChild(routes);
