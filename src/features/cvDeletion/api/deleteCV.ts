import { gql } from "@apollo/client"

const DELETE_CV = gql`
    mutation DeleteCv($cv: DeleteCvInput!) {
        deleteCv(cv: $cv) {
            affected
        }
    }
`

export default DELETE_CV