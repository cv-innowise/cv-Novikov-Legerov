import {
	AuthInput,
	ForgotPasswordInput,
	Skill,
	SkillMasteryInput,
} from "cv-graphql"
import { useTranslations } from "next-intl"
import * as yup from "yup"

import { CVFormInput } from "@features/cvForm/model/CVForm.types"
import { LanguageProficiencyFormInput } from "@features/languageProficiencyForm/model/LanguageProficiencyForm.types"
import { CvProjectFormInput } from "@features/projectForm/model/CvProjectForm.types"
import { SkillMasteryFormInput } from "@features/skillsMasteryForm/model/SkillMasteryForm.types"
import { EMAIL_REGEXP } from "@shared/const/regexp/email"
import { PASSWORD_REGEXP } from "@shared/const/regexp/password"
import { minMaxFieldValidation } from "@shared/lib/validation/minMaxFieldValidation"

import { Mastery } from "../mastery"
import { Proficiency } from "../proficiency"

type TFunction = ReturnType<typeof useTranslations>

function passwordValidation(
	t: TFunction,
	minValue = 5,
	maxValue = 32,
): yup.StringSchema {
	return minMaxFieldValidation(t, minValue, maxValue).matches(
		PASSWORD_REGEXP,
		t("errors.passwordInvalid"),
	)
}

function emailValidation(
	t: TFunction,
	minValue = 5,
	maxValue = 32,
): yup.StringSchema {
	return minMaxFieldValidation(t, minValue, maxValue).matches(
		EMAIL_REGEXP,
		t("errors.emailInvalid"),
	)
}

export function authValidation(t: TFunction): yup.ObjectSchema<AuthInput> {
	return yup
		.object({
			email: emailValidation(t),
			password: passwordValidation(t),
		})
		.defined() as yup.ObjectSchema<AuthInput>
}

export function emailValidationForm(
	t: TFunction,
): yup.ObjectSchema<ForgotPasswordInput> {
	return yup
		.object({
			email: emailValidation(t),
		})
		.defined() as yup.ObjectSchema<ForgotPasswordInput>
}

export function skillFormValidation(
	t: TFunction,
): yup.ObjectSchema<SkillMasteryFormInput> {
	return yup.object({
		skill: yup.mixed<Skill>().required(t("errors.required")),
		mastery: yup
			.mixed<Mastery>()
			.oneOf(Object.values(Mastery))
			.required(t("errors.required")),
	})
}

export function languageFormValidation(
	t: TFunction,
): yup.ObjectSchema<LanguageProficiencyFormInput> {
	return yup.object({
		name: yup.string().required(t("errors.required")),
		proficiency: yup
			.mixed<Proficiency>()
			.oneOf(Object.values(Proficiency))
			.required(t("errors.required")),
	})
}

export function CVFormValidation(t: TFunction): yup.ObjectSchema<CVFormInput> {
	return yup.object({
		name: yup.string().required(t("errors.required")),
		education: yup.string().required(t("errors.required")),
		description: yup.string().required(t("errors.required")),
	})
}

export function CvProjectFormValidation(
	t: TFunction,
): yup.ObjectSchema<CvProjectFormInput> {
	return yup.object({
		project: yup
			.mixed<{
				id: string
				name: string
			}>()
			.required(t("errors.required")),
		start_date: yup.date().required(t("errors.required")),
		end_date: yup.date().nullable().defined(),
		responsibilities: yup.string().required(t("errors.required")),
	})
}
