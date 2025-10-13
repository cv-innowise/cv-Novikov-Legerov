"use client"

import { Locale } from "@app/i18n/config"
import { setUserLocale } from "@app/i18n/services/locale"
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"

export const LanguageSwitcher = () => {
    const t = useTranslations()
    const [pending, startTransition] = useTransition()


    const onChangeHandler = (event: SelectChangeEvent<Locale>) => {
        const value = event.target.value
        startTransition(() => {
            setUserLocale(value)
        })
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="language-select">{t("Language")}</InputLabel>
            <Select<Locale>
                disabled={pending}
                labelId="language-select"
                label={t("Language")}
                value={useLocale() as Locale}
                onChange={onChangeHandler}
            >
                <MenuItem value="en">{t("english")}</MenuItem>
                <MenuItem value="ru">{t("russian")}</MenuItem>
            </Select>
        </FormControl>
    )
}
