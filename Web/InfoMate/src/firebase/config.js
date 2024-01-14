
import { initializeApp } from "firebase/app";
import {getStorage,ref,uploadBytes,getDownloadURL} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBrIAlAZONaZg4bgONh8z0wngGeFeBWMLI",
  authDomain: "infomateimg.firebaseapp.com",
  projectId: "infomateimg",
  storageBucket: "infomateimg.appspot.com",
  messagingSenderId: "943147423371",
  appId: "1:943147423371:web:c12dd38862019ddb68e68e"
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export async function uploadFileImg(file,name){
    const storageRef = ref(storage,"Imagenes/"+name)
    await uploadBytes(storageRef,file)
    const url = await getDownloadURL(storageRef)
    return url
}

export async function uploadFilePDF(file,name){
    const storageRef = ref(storage,"Pdfs/"+name)
    await uploadBytes(storageRef,file)
    const url = await getDownloadURL(storageRef)
    return url
}

