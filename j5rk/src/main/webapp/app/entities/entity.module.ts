import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { J5RkBlogModule } from './blog/blog.module';
import { J5RkEntryModule } from './entry/entry.module';
import { J5RkTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        J5RkBlogModule,
        J5RkEntryModule,
        J5RkTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class J5RkEntityModule {}
