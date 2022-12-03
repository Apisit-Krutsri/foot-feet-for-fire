import React ,{useEffect,useState} from 'react'
import './uploadAvatar.css'
import Avatar from 'react-avatar-edit'
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from '@mui/material';
 

function UploadAvatar() {


    // ---ไม่ได้ใช้จ้า ลองทำดู ---
    const [src, setSrc] = useState(null)
    const [preview, setPreview] = useState(false)

    const [image, setImage] = useState("")
    const [cropImg , setCropImg] = useState("")

    const onClose = () =>{
        setPreview(null);
    }

    const onCrop = view =>{
        setPreview(view);
    }

    const saveCropImage = () =>{
        setImage([...image,{preview}]);
        setCropImg();
    }

    // useEffect(() => {
    //   console.log(preview)
    // }, [preview])
    
    


  return (
    <div>

    <div>
        <div>

            <img 
                style={{
                    width: 200,
                    height: 200,
                    borderRadius: "10px",
                    objectFit: "cover",
                    border: "4px solid black"
                }}
                // src={}
            />

            <Dialog
            visible = {cropImg}
            header = {() => (
                <p>Update Profile</p>
            )}
            onHide={()=> setCropImg(false)}
            />
                
           

            <Avatar 
        width={200} 
        height={200} 
        onCrop={onCrop}
        onClose={onClose}
        src={src}
         />


                    <div>
                        <div>
                            <Button 
                            onClick={saveCropImage}
                            label="Save"
                            />
                        </div>
                    </div>
            

            <InputText 
            type='file' 
            accept='image/'
            style={{display: "none"}}
            onChange={(event)=>{
                const file = event.target.files[0];
                if(file && file.type.substring(0,5)==="image"){
                    setImage(file)
                }else{
                    setImage(null)
                }
            }}
            />

        </div>
    </div>

















        {/* --ไม่ได้ใช้ ลองทำดู-- */}
        {/* <Avatar 
        width={200} 
        height={200} 
        onCrop={onCrop}
        onClose={onClose}
        src={src}
         />
         {preview && <img src={preview} />} */}
    </div>
  )
}

export default UploadAvatar