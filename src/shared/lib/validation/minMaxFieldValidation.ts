import * as yup from 'yup';
import { useTranslations } from "next-intl"

type TFunction = ReturnType<typeof useTranslations>;

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