import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableStickyHeaderExample } from './table-sticky-header-example/table-sticky-header-example.component';
import { MatTableModule } from '@angular/material/table' 
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, TableStickyHeaderExample],
  imports: [MatTableModule, MatSliderModule,BrowserModule, AppRoutingModule, InputTextModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
