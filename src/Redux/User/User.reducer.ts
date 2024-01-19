import { Aspiration, IgetGalleryType } from './../../Module/User/Model/UserDataType';
import { SerializedError, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import {IAssembly, ILoksabha, IState, IUser } from "../../Module/User/Model/UserDataType";
import toast from "react-hot-toast";
import { assemblyAction, createUserAction, getOTPAction, getallImageServiceAction, getallcategorysAction, lokSabhaAction, validateOTPAction } from "./User.action";


export const userFeatureKey:string="userFeature";

export interface InitialState{
    loading:boolean;
    errorMassage:SerializedError;
    user:IUser;
    assemblyList:IAssembly[];
    lokSabhaList:ILoksabha[];
    stateList:IState[]
    categoryGallery:string[],
    errorInfo:string,
    successInfo:string,
    createInfo:string,
    imageGallery:string[]
}

/*
  "NAME": "",
		"MOBILE": "",
		"EMAIL": "",
		"AGE": "",
		"GENDER": "",
		"CATEGORY": "",
		"STATE": "",
		"STATE_CODE": "",
		"PARLIAMENT": "",
		"PARLIAMENT_CODE": "",
		"ASSEMBLY": "",
		"ASSEMBLY_CODE": "",
		"HIGHEST_EDUCATIONAL_QUALIFICATION": "",
		"ROZGAAR_NYAY_CODE": "",
		"VOTER_ID": "",
		"VOLUNTEER": false,
*/

export const initialState:InitialState={
    loading:false,
    errorMassage:{} as SerializedError,
    user:{  "NAME": "",
		"MOBILE": "",
		"EMAIL": "",
		"AGE": "",
		"GENDER": "",
		"CATEGORY": "",
		"STATE": "",
		"STATE_CODE": "",
		"PARLIAMENT": "",
		"PARLIAMENT_CODE": "",
		"ASSEMBLY": "",
		"ASSEMBLY_CODE": "",
		"HIGHEST_EDUCATIONAL_QUALIFICATION": "",
		"ROZGAAR_NYAY_CODE": "",
		"VOTER_ID": "",
		"VOLUNTEER": false,},
    errorInfo:"",
    successInfo:"",
    createInfo:"",
    assemblyList:[] as IAssembly[],
    lokSabhaList:[] as ILoksabha[],
    categoryGallery:[] as string[],
    imageGallery:[] as string[],
    stateList:[
        { code: 'AN', name: 'Andaman and Nicobar Islands' },
        { code: 'AP', name: 'Andhra Pradesh' },
        { code: 'AR', name: 'Arunachal Pradesh' },
        { code: 'AS', name: 'Assam' },
        { code: 'BR', name: 'Bihar' },
        { code: 'CG', name: 'Chhattisgarh' },
        { code: 'CH1', name: 'Chandigarh' },
        { code: 'DN', name: 'Dadra and Nagar Haveli' },
        { code: 'DD', name: 'Daman and Diu' },
        { code: 'DL', name: 'Delhi' },
        { code: 'GA', name: 'Goa' },
        { code: 'GJ', name: 'Gujarat' },
        { code: 'HR', name: 'Haryana' },
        { code: 'HP', name: 'Himachal Pradesh' },
        { code: 'JK', name: 'Jammu and Kashmir' },
        { code: 'JH', name: 'Jharkhand' },
        { code: 'KA', name: 'Karnataka' },
        { code: 'KL', name: 'Kerala' },
        { code: 'LD', name: 'Lakshadweep' },
        { code: 'MP', name: 'Madhya Pradesh' },
        { code: 'MH', name: 'Maharashtra' },
        { code: 'MN', name: 'Manipur' },
        { code: 'ML', name: 'Meghalaya' },
        { code: 'MZ', name: 'Mizoram' },
        { code: 'NL', name: 'Nagaland' },
        { code: 'OR', name: 'Odisha' },
        { code: 'PY', name: 'Puducherry' },
        { code: 'PB', name: 'Punjab' },
        { code: 'RJ', name: 'Rajasthan' },
        { code: 'SK', name: 'Sikkim' },
        { code: 'TN', name: 'Tamil Nadu' },
        { code: 'TS', name: 'Telangana' },
        { code: 'TR', name: 'Tripura' },
        { code: 'UP', name: 'Uttar Pradesh' },
        { code: 'UK', name: 'Uttarakhand' },
        { code: 'WB', name: 'West Bengal' },
      ]
}


export const UserSlice=createSlice({
      name:"UserSlice",
      initialState:initialState,
      reducers:{
      handleUserInput:(state,action)=>{
        let event=action.payload.event;
        state.user={
            ...state.user,
            [event.target.name]:event.target.value
        } 
      },
      handleUserAspirationInput:(state,action)=>{
        let event=action.payload.event;
        state.user.ASPIRATION={
            ...state.user.ASPIRATION,
            [event.target.name]:event.target.checked
        } 
      },
      handleEmptyUserInput:(state,action)=>{
        state.user={  
        "NAME": "",
        "MOBILE": "",
        "EMAIL": "",
        "AGE": "",
        "GENDER": "",
        "CATEGORY": "",
        "STATE": "",
        "STATE_CODE": "",
        "PARLIAMENT": "",
        "PARLIAMENT_CODE": "",
        "ASSEMBLY": "",
        "ASSEMBLY_CODE": "",
        "HIGHEST_EDUCATIONAL_QUALIFICATION": "",
        "ROZGAAR_NYAY_CODE": "",
        "VOTER_ID": "",
        "VOLUNTEER": false,};
      },
      handleUserVolunteerInput:(state,action)=>{
        let event=action.payload.event;
        state.user.VOLUNTEER=event.target.checked
      },
      handleEmptyParliamentAssemblyCodeInput:(state,action)=>{
         state.user.PARLIAMENT="";
         state.user.PARLIAMENT_CODE="";
         state.user.ASSEMBLY="";
         state.user.ASSEMBLY_CODE="";
      },
      handleEmptyParliamentCodeInput:(state,action)=>{
        state.user.ASSEMBLY="";
        state.user.ASSEMBLY_CODE="";
     },
       handleSuccessInfoEmpty:(state,action)=>{
        state.successInfo="";
       },
       handleErrorInfoEmpty:(state,action)=>{
       state.errorInfo="";
       },
       handleCreateInfoEmpty:(state,action)=>{
       state.createInfo="";
       }
      },
      extraReducers(builder) {
        
        builder.addCase(assemblyAction.pending,(state,action)=>{
            state.loading=true;   
          }).addCase(assemblyAction.fulfilled,(state,action)=>{
             state.loading=false;
               
             if(action?.payload?.success){        
                state.assemblyList=action?.payload?.success;      
           }
           else{
            toast.error(action?.payload?.message);
           }
         
            }).addCase(assemblyAction.rejected,(state,action)=>{
              state.loading=false;
              if(isRejectedWithValue(action)){
                
                  
              }
          })
        
        
          builder.addCase(lokSabhaAction.pending,(state,action)=>{
            state.loading=true;   
          }).addCase(lokSabhaAction.fulfilled,(state,action)=>{
             state.loading=false;
             

             if(action?.payload?.success){       
            
                state.lokSabhaList=action?.payload?.success;      
           }
           else{
            toast.error(action?.payload?.message);
           }
         
            }).addCase(lokSabhaAction.rejected,(state,action)=>{
              state.loading=false;
              if(isRejectedWithValue(action)){
                
                  
              }
          })


             
          builder.addCase(createUserAction.pending,(state,action)=>{
            state.loading=true;   
          }).addCase(createUserAction.fulfilled,(state,action)=>{
             state.loading=false;
               
             if(action?.payload?.success){        
                state.user=action?.payload?.success;    
                state.createInfo="Rozgar Nyay Patra Submit Successfully";  
           }
           else{
            state.errorInfo=action?.payload?.message;
           }
         
            }).addCase(createUserAction.rejected,(state,action)=>{
              state.loading=false;
              if(isRejectedWithValue(action)){
                
                  
              }
          })




          builder.addCase(getOTPAction.pending,(state,action)=>{
            state.loading=true;   
          }).addCase(getOTPAction.fulfilled,(state,action)=>{
             state.loading=false;
               
             if(action?.payload?.success){        
                state.successInfo=action?.payload?.success;     
           }
           else{
            state.errorInfo=action?.payload?.message;
           }
         
            }).addCase(getOTPAction.rejected,(state,action)=>{
              state.loading=false;
              if(isRejectedWithValue(action)){
                
                  
              }
          })


          
          builder.addCase(validateOTPAction.pending,(state,action)=>{
            state.loading=true;   
          }).addCase(validateOTPAction.fulfilled,(state,action)=>{
             state.loading=false;
               
             if(action?.payload?.success){        
                // toast.success(action?.payload?.success)      
           }
           else{
            state.errorInfo=action?.payload?.message;
           }
         
            }).addCase(validateOTPAction.rejected,(state,action)=>{
              state.loading=false;
              if(isRejectedWithValue(action)){
                
                  
              }
          })

         

          builder.addCase(getallcategorysAction.pending,(state,action)=>{
            state.loading=true;   
          }).addCase(getallcategorysAction.fulfilled,(state,action)=>{
             state.loading=false;
               
             if(action?.payload?.success){        
                state.categoryGallery=action?.payload?.success     
           }
           else{
            toast.error(action?.payload?.message) 
           }
         
            }).addCase(getallcategorysAction.rejected,(state,action)=>{
              state.loading=false;
              if(isRejectedWithValue(action)){
              }
          })
     
      builder.addCase(getallImageServiceAction.pending,(state,action)=>{
        state.loading=true;   
      }).addCase(getallImageServiceAction.fulfilled,(state,action)=>{
         state.loading=false;
           
         if(action?.payload?.success){        
            state.imageGallery=action?.payload?.success     
       }
       else{
        toast.error(action?.payload?.message) 
       }
     
        }).addCase(getallImageServiceAction.rejected,(state,action)=>{
          state.loading=false;
          if(isRejectedWithValue(action)){
          }
      })
      
      
        },



})


export const {handleEmptyUserInput,handleUserAspirationInput,handleUserInput,handleUserVolunteerInput,handleEmptyParliamentAssemblyCodeInput,handleEmptyParliamentCodeInput,handleSuccessInfoEmpty,handleErrorInfoEmpty,handleCreateInfoEmpty}=UserSlice.actions;


