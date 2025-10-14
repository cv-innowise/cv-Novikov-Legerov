import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { breadcrumbsAction } from "@shared/model"
import { BreadcrumbItem } from "@shared/types"

export const useBreadcrumbs = (
	breadcrumb: BreadcrumbItem | BreadcrumbItem[],
) => {
	const dispatch = useDispatch()

	useEffect(() => {
		if (Array.isArray(breadcrumb)) {
			dispatch(breadcrumbsAction.replaceAllBreadcrumbs(breadcrumb))
		} else {
			dispatch(breadcrumbsAction.updateBreadcrumb(breadcrumb))
		}
	}, [breadcrumb, dispatch])
}
