import { ReactNode, Dispatch, SetStateAction } from 'react'

export type BulkDeletionProps = {
    children: ReactNode;
    onDelete: (names: string[]) => Promise<void>;
    isLoading: boolean;
    onAdd: () => void;
    mode: "skills" | "languages";
}