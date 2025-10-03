'use client'

import { CVsTable } from "@widgets/cvsTable"
import { useAuthUserId } from "@entities/user"
import { useUser } from "@entities/user"
const CVsPage = () => {
    const userId = useAuthUserId()
    const { user } = useUser(userId)

    return (
        <>
            <CVsTable cvs={user.cvs || []} />
        </>
    )
}

export default CVsPage