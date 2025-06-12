import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { registerLocaleData } from '@angular/common';
import localeZhCn from '@angular/common/locales/zh-Hans';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

registerLocaleData(localeZhCn, 'zh-cn');
