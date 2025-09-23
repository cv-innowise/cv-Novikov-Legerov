import { ReactNode } from 'react'

export type ContextualActionButtonProps<T extends { name: string }> = {
    children: ReactNode;
    item: T;
    disabled: boolean;
    openDialog: () => void;
}