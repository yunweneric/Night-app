import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
 { path: 'sidebar', component: SidebarComponent },
 {path: 'header', component: HeaderComponent},
 {path: 'table', component: TableComponent},
 {path: 'footer', component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
