import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from '@tumi/legacy-app/modules/profile/pages/profile-page/profile-page.component';
import { PhotoJourneyPageComponent } from '@tumi/legacy-app/modules/profile/pages/photo-journey-page/photo-journey-page.component';
import { NewUserPageComponent } from '@tumi/legacy-app/modules/profile/pages/new-user-page/new-user-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ProfilePageComponent },
  { path: 'journey', component: PhotoJourneyPageComponent },
  { path: 'new', component: NewUserPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
