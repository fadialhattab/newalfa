import React from 'react'
import imageA from "../assets/imgas/A.jpeg"
import imageB from "../assets/imgas/B.jpeg"
import imageT from "../assets/imgas/T.jpeg"
import imageTT from "../assets/imgas/TT.jpeg"
import imageG from "../assets/imgas/G.jpeg"
import imageK from "../assets/imgas/K.jpeg"
import imageD from "../assets/imgas/D.jpeg"
import imageTH from "../assets/imgas/حرف الذال.jpeg"
import imageR from "../assets/imgas/R.jpeg"
import imageZ from "../assets/imgas/حرف الزاي.jpeg"
import imageS from "../assets/imgas/S.jpeg"
import imageSS from "../assets/imgas/حرف الشين.jpeg"
import imageC from "../assets/imgas/C.jpeg"
import imageCC from "../assets/imgas/حرف الضاد.jpeg"
import imageX from "../assets/imgas/حرف الطاء.jpeg"
import imageXX from "../assets/imgas/XX.jpeg"
import imageGG from "../assets/imgas/GG.jpeg"
import imageF from "../assets/imgas/F.jpeg"
import imageKK from "../assets/imgas/KK.jpeg"
import imageL from "../assets/imgas/L.jpeg"
import imageM from "../assets/imgas/M.jpeg"
import imageN from "../assets/imgas/N.jpeg"
import imageHH from "../assets/imgas/HH.jpeg"
import imageW from "../assets/imgas/W.jpeg"
import imageE from "../assets/imgas/E.jpeg"



const AssignmentA = () => {
    const images = [
        { id: 'image1', title: ' حرف الألف', source: imageA, customText: 'ورقة عمل للحرف الألف⭐' },
        { id: 'image2', title: 'حرف الباء ', source: imageB, customText: 'ورقة عمل للحرف الباء ⭐' },
        { id: 'image3', title: 'حرف التاء ', source: imageT, customText: 'ورقة عمل للحرف التاء⭐' },
        { id: 'image4', title: 'حرف الثاء ', source: imageTT, customText: 'ورقة عمل للحرف الثاء⭐' },
        { id: 'image5', title: 'حرف الجيم', source: imageG, customText:'ورقة عمل للحرف الجيمء⭐' },
       // { id: 'image6', title: 'حرف الحاء ', source: imageH, customText: 'ورقة عمل للحرف الحاء' },
        { id: 'image7', title: 'حرف الخاء', source: imageK, customText: 'ورقة عمل للحرف الخاء⭐' },
        { id: 'image8', title: 'حرف الدال', source: imageD, customText: 'ورقة عمل للحرف الدال⭐' },
        { id: 'image9', title: 'حرف الذال', source: imageTH, customText: 'ورقة عمل للحرف الذال⭐' },
        { id: 'image10', title: 'حرف الراء', source: imageR, customText: 'ورقة عمل للحرف الراء⭐' },
        { id: 'image11', title: 'حرف الزاي', source: imageZ, customText: 'ورقة عمل للحرف الزاي⭐' },
        { id: 'image12', title: 'حرف السين', source: imageS, customText: 'ورقة عمل للحرف السين⭐' },
        { id: 'image13', title: 'حرف الشين', source: imageSS, customText: 'ورقة عمل للحرف الشين⭐' },
        { id: 'image14', title: 'حرف الصاد', source: imageC, customText: 'ورقة عمل للحرف الصاد⭐'},
        { id: 'image15', title: 'حرف الضاد', source: imageCC, customText: 'ورقة عمل للحرف الضاد⭐' },
        { id: 'image16', title: 'حرف الطاء', source: imageX, customText: 'ورقة عمل للحرف الطاء⭐' },
        { id: 'image17', title: 'حرف الظاء', source: imageXX, customText: 'ورقة عمل للحرف الظاء⭐' },
        { id: 'image18', title: 'حرف الغين', source: imageGG, customText: 'ورقة عمل للحرف الغين⭐' },
        { id: 'image19', title: 'حرف الفاء', source: imageF, customText: 'ورقة عمل للحرف الفاء⭐' },
        { id: 'image20', title: 'حرف الكاف', source: imageKK, customText: 'ورقة عمل للحرف الكاف⭐' },
        { id: 'image21', title: 'حرف اللام', source: imageL, customText: 'ورقة عمل للحرف اللام⭐'},
        { id: 'image22', title: 'حرف الميم', source: imageM, customText: 'ورقة عمل للحرف الميم⭐' },
        { id: 'image23', title: 'حرف النون', source: imageN, customText: 'ورقة عمل للحرف النون⭐' },
        { id: 'image24', title: 'حرف الهاء', source: imageHH, customText: 'ورقة عمل للحرف الهاء⭐' },
        { id: 'image25', title: 'حرف الواو', source: imageW, customText: 'ورقة عمل للحرف الواو⭐' },
        { id: 'image26', title: 'حرف الياء', source: imageE, customText: 'ورقة عمل للحرف الياء⭐' },
    
    ]

        const handleNextClick = (imageId) => {
            const nextImageElement = document.getElementById(imageId);
            if (nextImageElement) {
              nextImageElement.scrollIntoView({ behavior: 'smooth' });
            }
          };
        
          const handlePrintClick = () => {
            window.print();
          };
        
  return (
    <>
    <br></br><br></br>
    <h4 style={{ color: "black", textAlign: 'center', cursor: 'pointer' }}
             >
      
    ッ مرحبًا يا رِفاق هيا بنا نقوم بحل النشاطات المتعلقة بما تعلمناه سابقًا من أحرف اللغة  العربية فقط قُم بطباعة الصورة عن طريق الضغط على زر"طباعة" هيا بنا
    </h4>
    <h2 style={{color:" #007d93e4"}}>✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰</h2>
    <div className='n1' style={{ display: 'flex',flexWrap: 'wrap', justifyContent: 'space-around' ,}}>
        {images.map((imageItem) => (
          <div key={imageItem.id} className='image-card'  >
            <h2 style={{ fontFamily: 'sans-serif', padding: '20px', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              {imageItem.title}
            </h2>
            <div className='image-container'style={{ textAlign: 'center', width: '100%' }}>
              <img id={imageItem.id} src={imageItem.source} alt={imageItem.title} />
            </div>

            <br />
            <h1
              style={{ color: 'orange', textAlign: 'center', cursor: 'pointer' }}
              onClick={() => handleNextClick(imageItem.id)}
            >
            
            </h1>

            <p style={{ textAlign: 'right', padding: '10px',textShadow:'2px 2px 4px rgba(0, 0, 0, 0.3)',fontSize:"20PX" }}>{imageItem.customText}</p>

            {/* Print button */}
            <button style={{textAlign:"right",backgroundColor:"#007d93e4",fontSize:"20px",margin:"0"}} onClick={handlePrintClick}>طباعة</button>
          </div>
        ))}
      </div>
   
    </>
  )
}

export default AssignmentA