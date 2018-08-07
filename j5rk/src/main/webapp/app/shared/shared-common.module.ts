import { NgModule } from '@angular/core';

import { J5RkSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [J5RkSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [J5RkSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class J5RkSharedCommonModule {}
