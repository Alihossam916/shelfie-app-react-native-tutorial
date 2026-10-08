import "react-native-url-polyfill/auto";
import { Client, Avatars, Account, Databases } from "react-native-appwrite";

export const endpoint = "https://fra.cloud.appwrite.io/v1";
export const projectId = "6a95e93200315bd0232a";

export const client = new Client().setEndpoint(endpoint).setProject(projectId);

export const account = new Account(client);
export const avatar = new Avatars(client);
export const databases = new Databases(client);