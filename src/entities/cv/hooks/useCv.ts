import { useSuspenseQuery } from "@apollo/client/react"
import { Cv } from "cv-graphql"
import { CV } from "../api/cv"

type CvResult = {
    cv: Cv
}

export const useCv = (cvId: string) => {
    const { data, error } = useSuspenseQuery<CvResult>(CV, {
        variables: { cvId },
    })

    return {
        cv: data?.cv,
        error: error,
    }
}