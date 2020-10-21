import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FalconMainComponent } from './falcon-main/falcon-main.component';
import { OutputComponent } from './output/output.component';



const routes: Routes = [
  { path: "Home", component: FalconMainComponent },
  { path: "output", component: OutputComponent },
  { path: "", component: FalconMainComponent },
  { path: "**", component: FalconMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
