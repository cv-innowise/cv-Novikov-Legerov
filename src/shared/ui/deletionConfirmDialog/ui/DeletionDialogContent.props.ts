import { useMutation } from "@apollo/client/react"
import { ReactNode } from "react"

export type DeletionDialogContentProps = {
    content: string | ReactNode
    useDelete: (obj: any) => useMutation.ResultTuple<any, any>
    deletedObjectArgs: any
}