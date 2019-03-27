import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {TypeUtil} from '../util/type.util';
import {ModelType} from '../model/enum/model.type';


@Injectable()
export class ConverterService {

  constructor(private formBuilder: FormBuilder) {
  }

  static printTypeNames<T>(obj: T) {
    const objectKeys = Object.keys(obj) as Array<keyof T>;
    for (const key of objectKeys) {
      console.log('key:' + key);
    }
  }


  private builder<T>(model: T): AbstractControl {
    const modelType: ModelType = TypeUtil.getModelType(model);
    if (ModelType.ARRAY === modelType) {
      return this.formBuilder.array([]);
    } else if (ModelType.STRING === modelType) {
      return this.formBuilder.control('');
    } else if (ModelType.NUMBER === modelType) {
      return this.formBuilder.control(0);
    } else if (ModelType.OBJECT === modelType) {
      return this.formBuilder.group({});
    }
    return null;
  }

  private formArrayBuilder(mainArray: FormArray, formState: any, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormArray {
    const formArray = this.formBuilder.array(formState, validator, asyncValidator);
    mainArray.push(formArray);
    return mainArray;
  }

  private formControlBuilder(mainFormGroup: FormGroup, formState: any, validator?: ValidatorFn | ValidatorFn[] | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormGroup {
    const formControl = this.formBuilder.control(formState, validator, asyncValidator);
    mainFormGroup.addControl('', formControl);
    return mainFormGroup;
  }

  private formGroupBuilder(): FormGroup {
    return null;
  }

  // https://webbjocke.com/javascript-check-data-types/
  // case 1 = Object
  /**
   * 1 - Model Tipinin ne oldugu belirlenmeli
   * 2 - Model Tipine gore Form Builder ile reactive form karsiligina donusturulmeli
   * 3 - Coklu durumlarda (Object, Array) recursive fonksiyon cagirilmali
   */
  generate<T>(model: T): AbstractControl {
    Object.keys(model).map(key => {
      this.builder(model[key]);
    });
    return null;
  }
}
