import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../environments/environment';

@Injectable()
export class LanguageService {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang(environment.localLanguage);

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(environment.localLanguage);
  }
}
