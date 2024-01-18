import { IUser, IValidate, IcreateUser, IgetOtp, IgetValidate } from './../../Module/User/Model/UserDataType';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IgetAssembly, IgetLoksabha } from "../../Module/User/Model/UserDataType";
import { UserService } from "../../Module/User/Service/UserService";
import { log } from 'console';



export const assemblyAction:any=createAsyncThunk("User/assemblyAction",async(payload:{state:string,lokSabha:string},{rejectWithValue}):Promise<IgetAssembly|any>=>{
    try {
         let {state,lokSabha}=payload;
         const response=await UserService.assemblyService(state,lokSabha);  
         return  response.data;
    } catch (error:any) {
         if(!error.response){
            throw error
         }
         return rejectWithValue(error);
    }
})


export const lokSabhaAction:any=createAsyncThunk("User/lokSabhaAction",async(payload:{state:string},{rejectWithValue}):Promise<IgetLoksabha|any>=>{
    try {
         let {state}=payload;
         const response=await UserService.lokSabhaService(state);  
         return   response.data;
    } catch (error:any) {
         if(!error.response){
            throw error
         }
         return rejectWithValue(error);
    }
})



export const createUserAction:any=createAsyncThunk("User/createUserAction",async(payload:{user:IUser},{rejectWithValue}):Promise<IcreateUser|any>=>{
    try {
         let {user}=payload;
         const response=await UserService.createUserService(user);  
         return   response.data;
    } catch (error:any) {
         if(!error.response){
            throw error
         }
         return rejectWithValue(error);
    }
})


export const getOTPAction:any=createAsyncThunk("User/getOTPAction",async(payload:{number:string},{rejectWithValue}):Promise<IgetOtp|any>=>{
    try {
         let {number}=payload;
         const response=await UserService.getOTPService(number);  
         return   response.data;
    } catch (error:any) {
         if(!error.response){
            throw error
         }
         return rejectWithValue(error);
    }
})


export const validateOTPAction:any=createAsyncThunk("User/validateOTPAction",async(payload:{OTPValidation:IValidate},{rejectWithValue}):Promise<IgetValidate|any>=>{
    try {

         let {OTPValidation}=payload;
     
         const response=await UserService.validateOTPService(OTPValidation);  
         return   response.data;
    } catch (error:any) {
         if(!error.response){
            throw error
         }
         return rejectWithValue(error);
    }
})



