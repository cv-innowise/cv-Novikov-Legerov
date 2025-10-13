export type CvProjectFormInput = {
    project: {
        id: string
        name: string
    }
    start_date: Date | null
    end_date: Date | null
    responsibilities: string
}