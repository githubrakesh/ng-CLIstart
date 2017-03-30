import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MdInputModule,
  MdButtonModule,
  MdListModule, MdIconModule,
  MdIconRegistry

} from '@angular/material';
import { DepartmentdetailComponent } from './departmentdetail/departmentdetail.component';
import { DepartmentlistComponent } from './departmentlist/departmentlist.component';
import { DepartmentService } from './department.service';
import { DepartmentRouting } from './department.routes';
import { DepartmentResolve } from './department.resolve';

import { FabModule } from '../fab/fab.module';

import { FabitemComponent } from '../fab/fabitem/fabitem.component';
import { FabtoggleComponent } from '../fab/fabtoggle/fabtoggle.component';
import { FabComponent } from '../fab/fab/fab.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdInputModule, MdButtonModule, MdListModule, MdIconModule,
    FabModule,
    DepartmentRouting
  ],
  declarations: [
    DepartmentdetailComponent,
    DepartmentlistComponent,
    FabitemComponent, FabtoggleComponent, FabComponent

  ],
  providers: [
    MdIconRegistry,
    DepartmentService,
    DepartmentResolve
  ]
})
export
  class DepartmentModule {

}
