import {Component} from '@angular/core';
import {User} from './model/user';
import {ConverterService} from './services/converter.service';
import {TestModel001} from './test.cases/test.model.001';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-form-generator';

  constructor(private converter: ConverterService) {
    this.testCase1();
  }

  testCase1() {
    this.converter.generate(TestModel001.testModel);
  }
}
