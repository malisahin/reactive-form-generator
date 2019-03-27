import {ModelType} from '../model/enum/model.type';

export class TypeUtil {

  private static isObject(value: any): boolean {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  private static isString(value: any): boolean {
    return typeof value === 'string' || value instanceof String;
  }

  private static isArray(value: any): boolean {
    return Array.isArray(value);
  }

  private static isPrimitive(value): boolean {
    return (value !== Object(value));
  }

  static getModelType(model): ModelType {
    if (TypeUtil.isObject(model)) {
      return ModelType.OBJECT;
    } else if (TypeUtil.isArray(model)) {
      return ModelType.ARRAY;
    } else if (TypeUtil.isString(model)) {
      return ModelType.STRING;
    } else if (TypeUtil.isPrimitive(model)) {
      return ModelType.NUMBER;
    } else {
      // throw new Error('Model Type is not recognized');
    }

  }
}
