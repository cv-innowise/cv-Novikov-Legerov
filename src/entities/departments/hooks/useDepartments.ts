import { useSuspenseQuery } from "@apollo/client/react"

import { DEPARTMENTS } from "../api/departments"
import { DepartmentsResult } from "../api/departments.types"

export const useDepartments = () => {
	const query = useSuspenseQuery<DepartmentsResult>(DEPARTMENTS)

	return {
		departments: query.data.departments,
	}
}
