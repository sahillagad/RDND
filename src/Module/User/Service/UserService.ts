import axios from "axios";
import { IUser, IValidate, IcreateUser, IgetAssembly, IgetLoksabha, IgetOtp, IgetValidate } from "../Model/UserDataType";



export class UserService{


    private static serverUri:string="https://portalserver.ycea.in";


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



}