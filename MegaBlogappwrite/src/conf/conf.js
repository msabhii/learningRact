const conf = {
  appwriteUrl: String(import.meta.evn.VITE_APPWRITE_URL),
  appwriteProjectID: String(import.meta.evn.VITE_APPWRITE_PROJECT_ID),
  appwriteDataBaseID: String(import.meta.evn.VITE_APPWRITE_DATABASE_ID),
  appwriteBucketID: String(import.meta.evn.VITE_APPWRITE_BUCKET_ID),
  appwriteCollectionID: String(
    import.meta.evn.VITE_APPWRITE_VITE_APPWRITE_COLLECTION_ID
  ),
};
export default conf;
