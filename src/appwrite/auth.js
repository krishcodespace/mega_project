import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  //here we use promisese but we use async await
  async createAccount({ email, password, name }) {

    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call another methd to create
        // return userAccount;
        return this.login((email, password));
      } else {
        console.log("user account does not exist");
        return userAccount;
      }
    } catch (error) {
      // console.log(error);
      throw error;
    }
    
  }

  async login({ email, password }) {

    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }

  }

  async getcurrnetUser() {

    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;

  }

  async logoutuser() {

    try {
      return await this.account.deleteSessions();
    //   return await this.account.deleteSession(sessionId);
    } catch (error) {
    console.log("logout error:",error);
    }

  }


}


const authService = new AuthService();

export default authService;
