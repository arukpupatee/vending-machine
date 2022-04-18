import Joi from 'joi';
import { isExistValue } from './helpers';
import { ValidationError } from '../errors/validation-error';

interface JsonValidationResult {
  isValid: boolean;
  error?: ValidationError;
}

export class JsonValidator<T> {
  constructor(
    private schema: Joi.ObjectSchema<T>,
    private data: T,
    private options: Joi.ValidationOptions = {
      abortEarly: false,
      allowUnknown: true,
    }
  ) {
    this.options = options;
  }

  static create<T>(schema: Joi.ObjectSchema<T>, data: T): JsonValidator<T> {
    return new JsonValidator(schema, data);
  }

  static validate<T>(schema: Joi.ObjectSchema<T>, data: T): JsonValidationResult {
    return JsonValidator.create(schema, data).validate();
  }

  static validateAndThrowError<T>(schema: Joi.ObjectSchema<T>, data: T): JsonValidationResult {
    const validationResult = JsonValidator.validate(schema, data);

    if (!validationResult.isValid && isExistValue(validationResult.error)) throw validationResult.error;

    return validationResult;
  }

  validate(): JsonValidationResult {
    const result = this.schema.validate(this.data, this.options);

    if (isExistValue(result.error)) {
      const errorMessage = result.error.details.map((detail) => detail.message).join(', ');
      const error = ValidationError.create(errorMessage);

      return {
        isValid: false,
        error,
      };
    }

    return {
      isValid: true,
    };
  }
}
