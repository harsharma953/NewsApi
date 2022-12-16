import React from 'react'
import { getStorage, ref } from "firebase/storage";


const Page = () => {
    //     const storage = getStorage();
    // const pathReference = ref(storage, 'images/stars.jpg');
    // const gsReference = ref(storage, 'gs://bucket/images/stars.jpg');
    // const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg'); 
    return (
        <div>
            <center><h1>Read and Download E-Newspaper from Highlighted NewsBrands</h1></center>
            <a href='https://firebasestorage.googleapis.com/v0/b/news-afaf0.appspot.com/o/pdf%2Fdelhi-english-edition-2022-12-13.pdf?alt=media&token=f2d0e96a-8006-456b-b7e6-54f8fa996404' target="_blank"><button type='button' style={{
                border: "2px,solid,black", borderRadius: "30px", backgroundColor: "#71dae8",
                color: "#0b0b0b",
                margin: "40px",
                width: "18%",
                padding: "9px"
            }}>Hindustan Times</button></a>
            <a href='https://firebasestorage.googleapis.com/v0/b/news-afaf0.appspot.com/o/pdf%2FTribune%20Delhi%2013.12.202.pdf?alt=media&token=21fa6b5f-90e0-43c2-99ac-73f31248f2eb' target="_blank"><button type='button' style={{
                border: "2px,solid,black", borderRadius: "30px", backgroundColor: "#71dae8",
                color: "#0b0b0b",
                margin: "40px",
                width: "18%",
                padding: "9px"
            }}>The Hindu</button></a>
            <a href='https://firebasestorage.googleapis.com/v0/b/news-afaf0.appspot.com/o/pdf%2FTribune%20Chandigarh%20Supplement%2013.12.202.pdf?alt=media&token=40844ce3-5533-479a-918c-ce66b4e69c3d' target="_blank"><button type='button' style={{
                border: "2px,solid,black", borderRadius: "30px", backgroundColor: "#71dae8",
                color: "#0b0b0b",
                margin: "40px",
                width: "18%",
                padding: "9px"
            }}>The Indian Express</button></a>
            <a href='https://firebasestorage.googleapis.com/v0/b/news-afaf0.appspot.com/o/pdf%2FDeccan%20Chronicle_Coimbatore_2022-12-13.pdf?alt=media&token=8328fa83-023f-445f-8d95-6ea6419a5884' target="_blank"><button type='button' style={{
                border: "2px,solid,black", borderRadius: "30px", backgroundColor: "#71dae8",
                color: "#0b0b0b",
                margin: "40px",
                width: "18%",
                padding: "9px"
            }}>The Times of India</button></a>
        </div>
    )
}

export default Page
