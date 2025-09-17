"use client"

import { FieldValues } from "react-hook-form"

import { useTranslations } from "next-intl"

import { useDepartments } from "@entities/departments/hooks/useDepartments"
import { Select } from "@shared/ui/form/Select"
import { SkillsSelectProps } from "./SkillsSelect.props"

export const DepartmentsSelect = <T extends FieldValues>({
    name,
    disabled,
    ...props
}: SkillsSelectProps<T>) => {
    const t = useTranslations()
    const { departments } = useDepartments()

    return (
        <Select
            name={name}
            label={t("skills.label")}
            items={departments}
            {...props}
        />
    )
}
