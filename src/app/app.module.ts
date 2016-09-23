import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
import {MdButtonModule} from '@angular2-material/button/button';
import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
import {MdRadioModule} from '@angular2-material/radio/radio';
import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
import {MdSliderModule} from '@angular2-material/slider/slider';
import {MdSidenavModule} from '@angular2-material/sidenav/sidenav';
import {MdListModule} from '@angular2-material/list/list';
import {MdGridListModule} from '@angular2-material/grid-list/grid-list';
import {MdCardModule} from '@angular2-material/card/card';
import {MdIconModule} from '@angular2-material/icon/icon';
import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
import {MdInputModule} from '@angular2-material/input/input';
import {MdTabsModule} from '@angular2-material/tabs/tabs';
import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
import {PortalModule} from '@angular2-material/core/portal/portal-directives';
import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
import {MdMenuModule} from '@angular2-material/menu/menu';
import {RtlModule} from '@angular2-material/core/rtl/dir';

import { removeNgStyles, createNewHosts, createInputTransfer, bootloader } from '@angularclass/hmr';

import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MdButtonModule.forRoot(),
    MdButtonToggleModule.forRoot(),
    MdCardModule.forRoot(),
    MdCheckboxModule.forRoot(),
    MdGridListModule.forRoot(),
    MdIconModule.forRoot(),
    MdInputModule.forRoot(),
    MdListModule.forRoot(),
    MdMenuModule.forRoot(),
    MdProgressBarModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdRadioModule.forRoot(),
    MdRippleModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdSliderModule.forRoot(),
    MdSlideToggleModule.forRoot(),
    MdTabsModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdTooltipModule.forRoot(),
    OverlayModule.forRoot(),
    PortalModule.forRoot(),
    RtlModule.forRoot(),
  ],
  declarations: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule{
   constructor(public appRef: ApplicationRef) {}

   ngDoBootstrap() {
    this.appRef.bootstrap(AppComponent);
   }
  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    console.log('store.state.data:', store.state.data)
    // inject AppStore here and update it
    // this.AppStore.update(store.state)
    if ('restoreInputValues' in store) {
      store.restoreInputValues();
    }
    // change detection
    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }
  hmrOnDestroy(store) {
    var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation)
    // inject your AppStore and grab state then set it on store
    // var appState = this.AppStore.get()
    store.state = {data: 'yolo'};
    // store.state = Object.assign({}, appState)
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts()
    delete store.disposeOldHosts;
    // anything you need done the component is removed
  }
}
