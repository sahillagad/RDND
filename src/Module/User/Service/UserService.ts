import axios from "axios";
import { IUser, IValidate, IcreateUser, IgetAssembly, IgetGalleryImage, IgetGalleryType, IgetLoksabha, IgetOtp, IgetValidate } from "../Model/UserDataType";



export class UserService{


    private static serverUri:string="https://portalserver.ycea.in";
    // http://3.108.196.221:6001/

    public static assemblyService(state:string,lokSabha:string):Promise<{data:IgetAssembly}>{
        let allAssemblyList:string=`${this.serverUri}/rnp/Lsasmapping/getAs/${state}/${lokSabha}`
       return axios.get(allAssemblyList);
     }
    
    public static lokSabhaService(state:string):Promise<{data:IgetLoksabha}>{
        let allLokSabhaList:string=`${this.serverUri}/rnp/Lsasmapping/getLs/${state}`;
        return axios.get(allLokSabhaList);
    }

  


     public static createUserService(user:IUser):Promise<{data:IcreateUser}>{
        let createUserServiceUri:string=`${this.serverUri}/rnp/RozgarMember/createMember`;
        return axios.post(createUserServiceUri,user);
   }

   public static getOTPService(number:string):Promise<{data:IgetOtp}>{
    let   getOTPServiceUri:string=`${this.serverUri}/rnp/RozgarMember/getOTP`;
   return axios.post(getOTPServiceUri,{"number":number})
}



   public static validateOTPService(OTPValidation:IValidate):Promise<{data:IgetValidate}>{
    let   validateOTPUri:string=`${this.serverUri}/rnp/RozgarMember/validateOTP`;
   return axios.post(validateOTPUri,{...OTPValidation})
}


public static uplodepdfService(pdfData:FormData,mobileNumber:string,stateName:string):Promise<{data:IgetValidate}>{
    let   validateOTPUri:string=`${this.serverUri}/rnp/RozgarMember/uplodepdf/84964963228/AP`;
   return axios.post(validateOTPUri,{pdfData})
}


// public static 
// https://portalserver.ycea.in/rnp/RozgarMember/getallcategorys



public static getallcategorysService():Promise<{data:IgetGalleryType[]}>{
    let   getallcategorysUri:string=`${this.serverUri}/rnp/RozgarMember/getallcategorys`;
   return axios.get(getallcategorysUri)
}

public static getallImageService(typeGallery:string):Promise<{data:IgetGalleryImage[]}>{
    let   getallImageUri:string=`${this.serverUri}/rnp/RozgarMember/getImagesFromGallery/${typeGallery}`;
   return axios.get(getallImageUri)
}
}