import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { J5RabbitmqBlogModule } from './blog/blog.module';
import { J5RabbitmqEntryModule } from './entry/entry.module';
import { J5RabbitmqTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        J5RabbitmqBlogModule,
        J5RabbitmqEntryModule,
        J5RabbitmqTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class J5RabbitmqEntityModule {}
