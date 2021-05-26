import  Appwrite  from 'appwrite';
const appwrite = new Appwrite();

appwrite
.setEndpoint(process.env.VUE_APP_API_ENDPOINT) 
.setProject(process.env.VUE_APP_ID_PROJECT)
;

export default  appwrite