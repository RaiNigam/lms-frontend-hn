import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from '../../Helpers/axiosInstance'
import toast from "react-hot-toast"
const initialState={
    isLoggedIn:localStorage.getItem('isLoggedIn')||false,
    role:localStorage.getItem('role')|| '',
    data:localStorage.getItem('data')||{}
}
export const createAccount=createAsyncThunk('/auth/signup',async(data)=>{
    try{
        const res=axiosInstance.post("user/register",data);
        toast.promise(res,{
            loading:"Wait! creating your account",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to create Account"
        })
        return (await res).data;
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
    
})
export const login=createAsyncThunk('auth/login',async(data)=>{
    try{
        const res=axiosInstance.post('user/login',data);
        toast.promise(res,{
            loading:"Authentication on progress",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to login"
        })
        return (await res).data;
    }catch(err){
        toast.error(err?.response?.data?.message);
    }
})
export const logout=createAsyncThunk('auth/logout',async()=>{
    try{
        const res=axiosInstance.get('user/logout');
        toast.promise(res,{
            loading:'Waiting to log out!!!',
            success:(data)=>{
                return data?.data?.message
            },
            error:"Failed to log out"
        })
        return (await res).data;
    }catch(error){
        toast.error(error?.response?.data?.message);
    }
})
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled,(state,action)=>{
            localStorage.clear();
            state.isLoggedIn=true;
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role;
        })
        .addCase(logout.fulfilled,(state,action)=>{
            localStorage.setItem("data","");
            localStorage.setItem("isLoggedIn",false);
            localStorage.setItem("role","");
            state.isLoggedIn=false;
            state.data={};
            state.role="";
        })
    }
})


// export const {}=authSlice.actions;
export default authSlice.reducer