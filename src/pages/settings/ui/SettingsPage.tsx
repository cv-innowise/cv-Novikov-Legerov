import { Stack } from "@mui/material"

import { LanguageSwitcher } from "@features/languageSwitcher/ui/LanguageSwitcher"
import { ThemeModeSwitcher } from "@features/themeModeSwitcher/ui/ThemeModeSwitcher"

import { styles } from "./SettingsPage.styles"

const SettingsPage = () => {
	return (
		<Stack
			direction="column"
			gap="32px"
			alignItems="center"
			sx={styles.container}
		>
			<ThemeModeSwitcher />
			<LanguageSwitcher />
		</Stack>
	)
}

export default SettingsPage
