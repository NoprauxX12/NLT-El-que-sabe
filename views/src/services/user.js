import axios from "axios";
import { BaseUrl } from "../util/apiUrl";

class UserData {
  static async signUp(formValues, cb) {
    try {
      const response = await axios.post(BaseUrl + "/sign-up", formValues);
      cb(response.data);
    } catch (error) {
      cb({ response: false });
    }
  }

  static async fetchFreelancers(params, cb) {
    try {
      const response = await axios.post(BaseUrl + "/getFreelancers", params);
      cb(response.data);
    } catch (error) {
      console.error("Error al obtener freelancers:", error);
    }
  }

  static async verifyForSigunUp(params, cb) {
    try {
      const response = await axios.post(BaseUrl + "/user_exist", params);
      cb(response.data);
    } catch (error) {
      cb({ result: false });
    }
  }

  static async viewProfile(reqView, cb) {
    try {
      const response = await axios.post(BaseUrl + "/view-profile", reqView);
      cb(response.data);
    } catch (error) {
      cb({ response: false });
    }
  }

  static async editProfile(formValues) {
    try {
      await axios.post(BaseUrl + "/edit-profile", formValues);  
    } catch (error) {
      console.error("Error al editar el perfil:", error);
      return { success: false, message: "Error al editar el perfil" };
    }
  }
    static async fetchFreelancerById(id, cb){
        try {
            const  response = await axios.post( "http://localhost:3200/getFreelancerInfo", {id: id});
            console.log(response.data);
            cb(response.data);
        } catch (error) {
            cb({response: false});
        }
    }
    static async logIn(json, cb){
        try{
            const response = await axios.post(`${BaseUrl}/log-in`, json);
            cb(response.data);    
              
        }catch (error){
            cb({response: false});
        }
    }

    static async fetchProfilePhoto(json, cb){
        try{
            const response = await axios.post(`${BaseUrl}/profile-photo`, json);
            cb(response.data);    
        }catch (error){
            cb({response: false});
        }
    }

    static async progressiveProfiling(json, cb){
      try{
        const success = await axios.post(`${BaseUrl}/freelancer-preferences`,json);
        if (success) {
          cb({ response: true });
        } else {
          cb({ response: false });
        }
      } catch (error) {
        console.log(error);
        cb({ response: false });
      }
    }

    static async checkPreferences(id, cb){
      try{
        const response = await axios.post(`${BaseUrl}/check-preferences`,id);  
        cb(response.data);
      }catch(error){
        console.log(error);
      }
    }

    static async addPreviousWork(formValues, cb){
      try{
        const response = await axios.post(`${BaseUrl}/add-previouswork`,formValues);
        
        cb(response.data);
      } catch (error) {
        console.log(error);
      }
    }

}

export default UserData;