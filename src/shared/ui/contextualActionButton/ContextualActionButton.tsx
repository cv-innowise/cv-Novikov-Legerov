import { useContext } from "react"
import { Button } from "@mui/material"
import { BulkDeletionContext } from "@shared/ui/bulk-deletion/BulkDeletion"
import { ContextualActionButtonProps } from "./ContextualActionButton.props"
import { styles } from "./ContextualActionButton.styles"

const ContextualActionButton = <T extends { name: string }>({
	children,
	item,
	openDialog,
	sx,
	...props
}: ContextualActionButtonProps<T>) => {
	const { isDeletion, setSelectedItems, disabled } = useContext(BulkDeletionContext)

	const handleClick = () => {
		if (isDeletion) {
			setSelectedItems((prev) => {
				if (prev.includes(item.name)) {
					return prev.filter((name) => name !== item.name)
				}
				return [...prev, item.name]
			})
		} else {
			openDialog()
		}
	}
	return (
		<Button onClick={handleClick} disabled={disabled} sx={{...styles.button, ...sx}} {...props}>
			{children}
		</Button>
	)
}

export default ContextualActionButton
