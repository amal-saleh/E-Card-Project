import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';        
import { getAuth, provideAuth } from '@angular/fire/auth';        
import { getFirestore, provideFirestore } from '@angular/fire/firestore';        
import { getStorage, provideStorage } from '@angular/fire/storage';        
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),     
    provideFirestore(() => getFirestore()),  
    provideAuth(() => getAuth()),  
    provideStorage(() => getStorage()),  
    provideAnalytics(() => getAnalytics()),  

  ],
  providers: [
    
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
