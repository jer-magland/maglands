import { GoogleUserStorageClient } from "./google"

export interface UserStorageFile {
    id: string,
    mimeType: string,
    name: string
}

export interface UserStorageClient {
    useListFiles: (folderName: string, updateCode: number) => UserStorageFile[] | undefined
}

const createUserStorageClient = ({}): UserStorageClient => {
    return new GoogleUserStorageClient()
}

export default createUserStorageClient