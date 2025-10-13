import { useMutation } from "@apollo/client/react"
import { EXPORT_PDF } from "../api/exportPdf"
import { ExportPdfInput } from "cv-graphql"

type ExportPdfResult = {
  exportPdf: string
}

export type ExportPdfArgs = {
  pdf: ExportPdfInput
}

export const useExportPdf = () => {
  return useMutation<ExportPdfResult, ExportPdfArgs>(EXPORT_PDF)
}