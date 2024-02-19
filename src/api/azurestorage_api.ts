import {BlobServiceClient, ContainerClient} from '@azure/storage-blob';
import config from './apiconfig.json';

export const uploadImageToStorage = async (file: File): Promise<string> => {
    if (file == null){
        return '';
    }
    const blobService = new BlobServiceClient(
        `https://${config.AzureStorageApi.StorageAccountName}.blob.net/?${config.AzureStorageApi.SasToken}`
    );
    const containerClient: ContainerClient = blobService.getContainerClient(config.AzureStorageApi.ContainerName);
    const blobClient = containerClient.getBlockBlobClient(file.name);
    const options = {blobHTTPHeaders: {blobContentType: file.type}};
    blobClient.uploadData(file, options);
    return blobClient.url;
}
