import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './app.pagenotfound.component';

export
    const routes: Routes = [
        { path: '', component: AppComponent },
        { path: 'departments', loadChildren: './department/department.module#DepartmentModule' },
        { path: '**', component: PageNotFoundComponent }

        // { path: 'path/:routeParam', component: MyComponent },
        // { path: 'staticPath', component: ... },
        // { path: '**', component: ... },
        // { path: 'oldPath', redirectTo: '/staticPath' },
        // { path: ..., component: ..., data: { message: 'Custom' }
    ];
