import { NgModule } from '@angular/core';

import { J5RabbitmqSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [J5RabbitmqSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [J5RabbitmqSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class J5RabbitmqSharedCommonModule {}
