import { NgModule } from '@angular/core';
import { TimeFormatPipe } from './time-format/time-format';
import { MomentPipe } from './moment/moment';
@NgModule({
	declarations: [TimeFormatPipe,
    MomentPipe],
	imports: [],
	exports: [TimeFormatPipe,
    MomentPipe]
})
export class PipesModule {}
