import { Button } from "@mui/material"
import { useTranslations } from "next-intl"

import { styles } from "./ExportPdfButton.styles"
import { useExportPdf } from "../hooks/useExportPdf"
import { exportPdfProps } from "./ExportPdfButtonProps"
import { prepareHtml } from "../lib/prepareHtml"
import { exportPdf } from "../lib/exportPdf"
import Loader from "@shared/ui/loader"
import { useErrorNotification } from "@shared/hooks/useErrorNotification"

export const ExportPdfButton = ({previewRef, cvName}: exportPdfProps) => {
	const t = useTranslations()
	const [exportPdfQuery, { loading, error }] = useExportPdf()

	const handleExport = () => {
		if (!previewRef.current) {
			return
		}

		exportPdfQuery({
			variables: {
				pdf: {
					html: prepareHtml(previewRef.current),
					margin: {
						top: "15mm",
						bottom: "15mm",
						left: "12mm",
						right: "12mm",
					},
				},
			},
		}).then(({data}) => {
			data && exportPdf({ name: cvName, base64: data.exportPdf })
		})
	}

	useErrorNotification([error])

	return (
		<Button onClick={handleExport} sx={styles.button} variant="outlined">
			{loading ? <Loader /> : t("export pdf")}
		</Button>
	)
}
