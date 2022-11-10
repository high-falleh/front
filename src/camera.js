import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";

// import FormData from "form-data";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////   TeamWork makes the dream Work        //////////////////////////////////////////////////
/////////////////////////////////////////////////        Riadh & Khalil & Tahar          ///////////////////////////////////////////////////
////////////////////////////////////////////////              HighFalleh                ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const pickImage = async () => {
  const [message, setMessage] = useState("");

  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.cancelled) {
    setImage(result.uri);
  }
};
// const pickImage = async () => {
//   ImagePicker.launchImageLibraryAsync({
//     mediaTypes: ImagePicker.MediaTypeOptions.Images,
//     allowsEditing: true,
//     aspect: [1, 1],
//     quality: 0.5,
//   }).then((data) => {
//     if (!data.cancelled) {
//       console.log(data);
//       const newdata = new FormData();
//       newdata.append("file", data);
//       newdata.append("upload_preset", "ehzqyvxt");
//       data.append("cloud_name","brahamtahar")

//       fetch("https://api.cloudinary.com/v1_1/brahamtahar/image/upload", {
//         method: "post",
//         body: newdata,
//       }).then((res) => res.json());
//     }
//   });
// };

// const handleUpload = async () => {
//   let permissionResult = 
//     await ImagePicker.requestMediaLibraryPermissionsAsync();
//     if (permissionResult.grandet === false){
//       alert("camera access is required!");
//       return;
//     }
    
//     let pickerResult = await ImagePicker.launchImageLibraryAsync({
//       allowsEditing:true,
//       aspect:[4, 3],
//       base64:true,
//     });

//     if(pickerResult.cancelled === true) {
//       return;
//     }

//     let base64Image = `data:image/jpg;base64,${pickerResult.base64}`
//     setUploadImage(base64Image);

//     const {data} = await axios.post("/ipload-image", {
//       image: base64Image,
//     });
//     console.log("UPLOADED RESPONSE =>",data);
// }


//   let newfile = {
//     uri:data.uri,
//     type:`test/${data.uri.split(".")[1]}`,
//     name:`test.${data.uri.split(".")[1]}`

// }

// export default pickImage;
export default pickImage;