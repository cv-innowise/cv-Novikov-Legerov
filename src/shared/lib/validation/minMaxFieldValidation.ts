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
    .required(t('errors.required'))
    .min(minValue, t('errors.minLength', { count: minValue }))
    .max(maxValue, t('errors.maxLength', { count: maxValue }));
}