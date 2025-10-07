import { ReactNode } from "react"

import { Box } from "@mui/material"

import { cvTabs } from "@shared/const/tabs.const"
import { BasicTabs } from "@shared/ui/BasicTabs"

interface UserLayoutProps {
    params: Promise<{ id: string }>
    children: ReactNode
}

export default async function CVsLayout({
    children,
    params,
}: UserLayoutProps) {
    const { id } = await params

    return (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <BasicTabs tabs={cvTabs(id)} />
            <Box>{children}</Box>
        </Box>
    )
}
