import { ObjectSchema } from 'joi';
import { JsonValidator } from './json-validator';

export abstract class RequestBody {
  abstract requestBody: any;
  abstract validationSchema: ObjectSchema<any>;

  validate() {
    return JsonValidator.validate(this.validationSchema, this.requestBody);
  }

  validateAndThrowError() {
    return JsonValidator.validateAndThrowError(this.validationSchema, this.requestBody);
  }
}
