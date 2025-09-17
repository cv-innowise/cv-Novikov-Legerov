import { ReactNode, Dispatch, SetStateAction } from 'react'

export type BulkDeletionProps = {
    children: ReactNode;
    onDelete: (ids: string[]) => Promise<void>;
    onAdd: () => void;
    loading?: boolean;
    disabled: boolean;
}