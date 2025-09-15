import { useSuspenseQuery } from "@apollo/client/react"

import { POSITIONS } from "../api/positions"
import { PositionsResult } from "../api/positions.types"

export const usePositions = () => {
	const query = useSuspenseQuery<PositionsResult>(POSITIONS)

	return {
		positions: query.data.positions,
	}
}
