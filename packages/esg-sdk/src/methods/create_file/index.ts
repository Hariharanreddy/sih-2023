import { FileContent } from "../../models/file_content";
import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://asia-south1-esgedu-740d2.cloudfunctions.net/git-api';

/**
 * Creates a file with the specified content at the given path.
 * @param {FileContent} file - The file content parameters.
 * @returns {Promise<boolean>} - A Promise that resolves to a boolean indicating whether the file creation was successful.
 */
export default async function createFile(file: FileContent): Promise<boolean> {
  try {
    const url = `${BASE_URL}/create?type=create&path=${file.path}/${file.name}.mdx`;
    const requestBody = {
      content: file.content
    };

    const response: AxiosResponse<FileContent> = await axios.post(url, requestBody);

    // Assuming the API returns a FileContent-like object
    const createdFile = new FileContent(response.data);

    // Assuming the creation is considered successful if the SHA property is present
    return Boolean(createdFile.sha);
  } catch (error) {
    console.error('Error creating file:', error);
    throw new Error('File creation failed'); // You can customize the error message as needed
  }
}
