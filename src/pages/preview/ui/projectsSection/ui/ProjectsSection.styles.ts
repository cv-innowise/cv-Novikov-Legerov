import { styled } from "@mui/material"

export const List = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingLeft: 20,

  '& > li::marker': {
    color: theme.palette.primary.main
  }
}))
