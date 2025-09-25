import { useParams } from "next/navigation"
import { getSession } from "@shared/model/authStorage"

export const useUserId = () => {
	if (typeof window === "undefined") return "";
	const session = getSession()
	const params = useParams<{ id: string }>()

	return params?.id ?? session.id
}