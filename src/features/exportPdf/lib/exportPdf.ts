export const exportPdf = ({
	name,
	base64,
}: {
	name: string
	base64: string
}) => {
	const source = `data:application/pdf;base64,${base64}`
	const link = document.createElement("a")

	link.href = source
	link.download = name + ".pdf"
	link.click()
}
