import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HelloComponent} from './hello/hello.component';
import {FormsModule} from '@angular/forms';
import {ProgressBarComponent} from './progress-bar/progress-bar.component';
import {StudentListComponent} from './students/student-list.component';
import {StudentDetailsComponent} from './students/student-detail.component';
import {ToggleChildComponent} from './toggle/toggle-child.component';
import {ToggleParentComponent} from './toggle/toggle-parent.component';
import {ProjectOneComponent} from './project-one/project-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ProgressBarComponent,
    StudentListComponent,
    StudentDetailsComponent,
    ToggleChildComponent,
    ToggleParentComponent,
    ProjectOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
