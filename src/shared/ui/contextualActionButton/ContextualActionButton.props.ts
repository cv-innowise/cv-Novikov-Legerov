import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react'

export type ContextualActionButtonProps<T extends { name: string }> = {
    children: ReactNode;
    item: T;
    openDialog: () => void;
} & ButtonProps