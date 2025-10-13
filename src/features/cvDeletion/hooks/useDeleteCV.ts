import { useMutation } from "@apollo/client/react"
import DELETE_CV from '../api/deleteCV'
import { DeleteCvInput } from 'cv-graphql'

type  DeleteCvArgs = {
  cv: DeleteCvInput
}

export const useDeleteCV = (cvId: string) => {
  return useMutation<null, DeleteCvArgs>(DELETE_CV,
    {
			variables: {
				cv: {
					cvId: cvId,
				},
			},
			update(cache) {
				const id = cache.identify({ id: cvId, __typename: "Cv" })
				cache.evict({ id })
				cache.gc()
			},
		}
  )
}