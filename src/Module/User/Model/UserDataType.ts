export interface IUser {
    NAME: string
    AGE: string
    GENDER: string
    CATEGORY: string
    STATE: string
    STATE_CODE: string
    PARLIAMENT: string
    PARLIAMENT_CODE: string
    ASSEMBLY: string
    ASSEMBLY_CODE: string
    HIGHEST_EDUCATIONAL_QUALIFICATION: string
    ASPIRATION?: Aspiration
    MOBILE: string
    EMAIL: string
    ROZGAAR_NYAY_CODE: string
    VOTER_ID: string
    VOLUNTEER: boolean
    IP_ADDRESS?: string
    LATITUDE?: number
    LONGITUDE?: number
  }
  
  export interface Aspiration {
    Armed_Services?: boolean
    Civil_Services?: boolean
    Teaching?: boolean
    Police_officer?: boolean
    Railway_Bank?: boolean
    Lekhpal_Patwari_Tehsildar?: boolean
    Nurse_Asha_Anganwadi?: boolean
    Doctor_Engineer_Lawyer?: boolean
    Accountant_Marketing_Data_Entry?: boolean
    Start_up_business?: boolean
    Others?:boolean
  }



  export interface IValidate {
    number: string
    otp: string
  }
  


  export interface IcreateUser{
    success?: IUser
    message?:string
  }


export interface  IgetOtp{
	success?: string
    message?:string
}


export interface  IgetValidate{
	success?: string
    message?:string
}


export interface IState{
    code:string,
    name:string,
  }



export interface  IgetAssembly{
	success?: IAssembly[]
    message?:string
}
  
  export interface IAssembly {
    AS_CODE: string
    AS_NAME: string
  }
  


  export interface IgetLoksabha{
    success?: ILoksabha[]
    message?:string
  }
  
  export interface ILoksabha {
    LS_CODE: string
    LS_NAME: string
  }
  

  export interface IgetGalleryType{
    success?: string[]
    message?:string
  }

  export interface IgetGalleryImage{
    success?: string[]
    message?:string
  }