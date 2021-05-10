import  Appwrite  from 'appwrite';

const appwrite = new Appwrite();

appwrite
.setEndpoint('https://appwrite.bohio.me/v1') 
.setProject('6098853b0e16f')
;

export default  appwrite