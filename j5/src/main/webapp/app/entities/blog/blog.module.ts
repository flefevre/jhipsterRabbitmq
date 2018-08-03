import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { J5RabbitmqSharedModule } from 'app/shared';
import { J5RabbitmqAdminModule } from 'app/admin/admin.module';
import {
    BlogComponent,
    BlogDetailComponent,
    BlogUpdateComponent,
    BlogDeletePopupComponent,
    BlogDeleteDialogComponent,
    blogRoute,
    blogPopupRoute
} from './';

const ENTITY_STATES = [...blogRoute, ...blogPopupRoute];

@NgModule({
    imports: [J5RabbitmqSharedModule, J5RabbitmqAdminModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [BlogComponent, BlogDetailComponent, BlogUpdateComponent, BlogDeleteDialogComponent, BlogDeletePopupComponent],
    entryComponents: [BlogComponent, BlogUpdateComponent, BlogDeleteDialogComponent, BlogDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class J5RabbitmqBlogModule {}
