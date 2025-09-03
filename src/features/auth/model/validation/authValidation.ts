import * as yup from 'yup';
import { useTranslations } from 'next-intl';
import { AuthInput } from 'cv-graphql';
import { minMaxFieldValidation } from '@shared/lib/validation/minMaxFieldValidation';
import { PASSWORD_REGEXP } from '@shared/const/regexp/password';
import { EMAIL_REGEXP } from '@shared/const/regexp/email';

type TFunction = ReturnType<typeof useTranslations>;

function passwordValidation(t: TFunction, minValue = 5, maxValue = 32): yup.StringSchema {
  return minMaxFieldValidation(t, minValue, maxValue).matches(
    PASSWORD_REGEXP,
    t('auth.errors.passwordInvalid'),
  );
}

function emailValidation(t: TFunction, minValue = 5, maxValue = 32): yup.StringSchema {
  return minMaxFieldValidation(t, minValue, maxValue).matches(
    EMAIL_REGEXP,
    t('auth.errors.emailInvalid'),
  );
}

export function authValidation(t: TFunction): yup.ObjectSchema<AuthInput> {
  return yup
    .object({
      email: emailValidation(t),
      password: passwordValidation(t),
    })
    .defined() as yup.ObjectSchema<AuthInput>;
}