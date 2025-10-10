import { useMutation } from "@apollo/client/react"
import { Cv, RemoveCvProjectInput } from 'cv-graphql'
import REMOVE_CV_PROJECT from "../api/deleteProject"

type  DeleteCvProjectResult= {
  cv: Cv
}

export type DeleteCvProjectArgs = {
  project: RemoveCvProjectInput
}

export const useDeleteCvProject = (project: RemoveCvProjectInput) => {
  return useMutation<DeleteCvProjectResult, DeleteCvProjectArgs>(REMOVE_CV_PROJECT, {
    variables: {
      project: project
    }
  })
}