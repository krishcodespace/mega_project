import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new this.Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("creatpost error", error);
    }

  }

  async updatePost(slug,{title, content, featuredImage,status}){


    try {
        return await this.databases.updatePost(  config.appwriteDatabaseId,
        config.appwriteCollectionId,
        config.appwriteCollectionId,
        slug,
        {
            title,
            content,
            featuredImage,
            status
        })
      
    } catch (error) {
        console.log('updatePost error:',error)
        
    }
  }
  async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            config.appwriteDatabaseId,
          config.appwriteCollectionId,
          slug

        )
        return true 
    } catch (error) {
        console.log('deletepost', error)
        
    }

   
  }

  async getPost(slug){

      try {
          return await this.databases.getDocument(
              config.appwriteDatabaseId,
              config.appwriteCollectionId,
              slug
              
          )
    } catch (error) {
        console.log('getpost error:', error); 
    }
  }
  
  // if you make indexes in appwrite gui then you mkae query keys 
  async getPosts(queries = [Query.equal("status","active")]){
    try {
        return await this.databases.listDocuments(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            queries
            // [
            //     Query.equal("status","active")
            // ]  or you write siimple queries
        )
    } catch (error) {
        console.log('getpostserror', error);
        return false
    }

  }

  // file upload service
  

}

const service = new Service();

export default service;
