import useListFiles from "../google/useListFiles";

export class GoogleUserStorageClient {
    constructor() {

    }
    useListFiles(folderName: string, updateCode: number) {
        const files = useListFiles(folderName, updateCode)
        if (!files) return undefined
        return files.map(f => ({
            id: f.id,
            mimeType: f.mimeType,
            name: f.name
        }))
    }
}