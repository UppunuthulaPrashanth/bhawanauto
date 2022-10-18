import { toast } from "react-toastify";
export default function Checkerror(error) {
  if (error.response.status === 500) {
    toast.error("Server Error");
  }
  if (error.response.status === 400 || error.response.status === 401 ) {
    if(typeof error.response.data.message === 'object'){
      for(var key in error.response.data.message){
        toast.error(error.response.data.message[key][0])
      }
    }else{
      if(error.response.data.message==='Unauthenticated.'){
        localStorage.clear();
      }else{
        toast.error(error.response.data.message)
      }
      
    }
  }
  return error.response.data;
}
