import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HistoryComponent } from './components/history/history.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'', redirectTo:'DashBoard',pathMatch:'full'},
  {path:'DashBoard',component:DashBoardComponent},
  {path:'Search', component:SearchComponent},
  {path:'History', component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
