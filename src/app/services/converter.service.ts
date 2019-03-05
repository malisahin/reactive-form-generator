import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Injectable()
export class ConverterService {

  constructor(private formBuilder: FormBuilder) {
  }

  // https://webbjocke.com/javascript-check-data-types/
  // case 1 = Object
  /**
   * 1 - Model Tipinin ne oldugu belirlenmeli
   * 2 - Model Tipine gore Form Builder ile reactive form karsiligina donusturulmeli
   * 3 - Coklu durumlarda (Object, Array) recursive fonksiyon cagirilmali
   */
  generate(model: any) {

  }

  isObject(value: any): boolean {
    return value && typeof  value === 'object' && value.constructor === Object;
  }

  isString(value: any): boolean {
    return typeof  value === 'string' || value instanceof String;
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  isPrimitive(value): boolean {
    return (value !== Object(value));
  }
}
