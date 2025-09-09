import { Box, Button } from "@mui/material"

import { ContextualActionButtonProps } from "./ContextualActionButton.props"
import { styles } from "./ContextualActionButton.styles"

const ContextualActionButton = <T extends { name: string }>({
	children,
	item,
}: ContextualActionButtonProps<T>) => {
	const handleClick = () => {
		
	}

	return (
		<Button onClick={handleClick} sx={styles.button}>
			{children}
		</Button>
	)
}

export default ContextualActionButton
