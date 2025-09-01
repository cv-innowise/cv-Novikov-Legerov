import * as yup from 'yup';
import type { TFunction } from 'i18next';

export function minMaxFieldValidation(
  t: TFunction,
  minValue: number,
  maxValue: number,
): yup.StringSchema {
  return yup
    .string()
    .required(t('auth.errors.required'))
    .min(minValue, t('auth.errors.minLength', { count: minValue }))
    .max(maxValue, t('auth.errors.maxLength', { count: maxValue }));
}