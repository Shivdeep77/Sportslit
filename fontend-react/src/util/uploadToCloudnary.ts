export const uploadToCloudinary = async (pics:any) => {

  const cloud_name="dhde5cw4y"
  const upload_preset ="Sportslit"
  
  if (pics) {
    
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    const res = await 
    fetch(`https://api.cloudinary.com/v1_1/duawujwt9/image/upload`, {
      method: "post",
      body: data,
    })
      
      const fileData=await res.json();
      console.log("url : ", fileData);
      return fileData.url

  } else {
    console.log("error");
  }
};