import { ReactNode, Dispatch, SetStateAction } from 'react'

export type BulkDeletionProps = {
    children: (props: {
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    selectedIds: string[];
    setSelectedIds: Dispatch<SetStateAction<string[]>>
  }) => ReactNode;
    onDelete: (ids: string[]) => Promise<void>;
    onAdd: () => void;
    loading?: boolean;
}