import { Client, Account, Databases, Storage, Query, ID } from "appwrite";
import conf from "../conf/conf";
export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  //* Method to Add Posts
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDataBaseID,
        conf.appwriteCollectionID,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("AppWrite Service :: CreatePost::", error);
    }
  }

  //* Method to update Posts
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      await this.databases.updateDocument(
        conf.appwriteDataBaseID,
        conf.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("AppWrite Service :: CreatePost::", error);
    }
  }

  //* Method to delete Posts
  async deletePost({ slug }) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDataBaseID,
        conf.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("AppWrite Service :: CreatePost::", error);
      return false;
    }
  }

  //* Method to get single Post
  async getPost({ slug }) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDataBaseID,
        conf.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("AppWrite Service :: CreatePost::", error);
      return false;
    }
  }

  //* Method to get all Posts
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDataBaseID,
        conf.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("AppWrite Service :: CreatePost::", error);
      return false;
    }
  }

  //! File upload sevice
  //* Upload file method
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("AppWrite Service :: CreatePost::", error);
    }
  }

  //* Delete file method
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketID, fileId);
      return true;
    } catch (error) {
      console.log("AppWrite Service :: CreatePost::", error);
      return false;
    }
  }

  //* To get preview for the file
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketID, fileId);
  }
}
const service = new Service();

export default service;
