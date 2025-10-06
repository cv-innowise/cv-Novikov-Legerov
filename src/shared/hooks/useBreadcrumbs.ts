import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { breadcrumbsAction } from "@shared/model"
import { BreadcrumbItem } from "@shared/types"

export const useBreadcrumbs = (
	path: string,
	replacement: Omit<BreadcrumbItem, "path">,
) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(breadcrumbsAction.updateBreadcrumb({ path, ...replacement }))
	}, [path, replacement, dispatch])
}
