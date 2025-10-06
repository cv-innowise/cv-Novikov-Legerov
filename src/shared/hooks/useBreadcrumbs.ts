import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { breadcrumbsAction } from "@shared/model"
import { BreadcrumbItem } from "@shared/types"

export const useBreadcrumbs = (breadcrumb: BreadcrumbItem) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(breadcrumbsAction.updateBreadcrumb(breadcrumb))
	}, [breadcrumb, dispatch])
}
