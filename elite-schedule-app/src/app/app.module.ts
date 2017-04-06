﻿import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { MyTeamsPage, GamePage, TeamDetailPage, TournamentsPage, TeamsPage, StandingsPage, TeamHomePage } from '../pages/pages';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
    declarations: [
        MyApp,
        MyTeamsPage,
        GamePage,
        TeamDetailPage,
        TournamentsPage,
        TeamsPage,
        StandingsPage,
        TeamHomePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MyTeamsPage,
        GamePage,
        TeamDetailPage,
        TournamentsPage,
        TeamsPage,
        StandingsPage,
        TeamHomePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule {
}