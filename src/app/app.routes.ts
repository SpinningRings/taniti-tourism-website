import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { TransportationComponent } from './transportation/transportation.component';
import { DiningComponent } from './dining/dining.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LodgingComponent } from './lodging/lodging.component';
import { SightseeingComponent } from './sightseeing/sightseeing.component';
import { ArticleComponent } from './article/article.component';

export const routes: Routes = [{ path: '', component: HomePageComponent },
                               { path: 'transportation', component: TransportationComponent },
                               { path: 'dining', component: DiningComponent },
                               { path: 'entertainment', component: EntertainmentComponent },
                               { path: 'contactUs', component: ContactUsComponent },
                               { path: 'lodging', component: LodgingComponent },
                               { path: 'sightseeing', component: SightseeingComponent },
                               { path: 'article', component: ArticleComponent }
];
