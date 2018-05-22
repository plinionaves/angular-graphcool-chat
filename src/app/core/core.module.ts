import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatListModule } from '@angular/material';

import { ApolloConfigModule } from './../apollo-config.module';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    ApolloConfigModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }

}
