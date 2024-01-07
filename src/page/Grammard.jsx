import React , { useRef } from 'react'
import video from "../assets/video/A.mp4"
import videoo from "../assets/video/B.mp4"
import videot from "../assets/video/T.mp4"
import videott from "../assets/video/G.mp4"
import videotg from "../assets/video/Gg.mp4"
import videottg from "../assets/video/Ggg.mp4"
import videottgg from "../assets/video/Gggg.mp4"
import videotd from "../assets/video/D.mp4"
import videotT from "../assets/video/TT.mp4"
import videotR from "../assets/video/R.mp4"
import videotZ from "../assets/video/Z.mp4"
import videots from "../assets/video/S.mp4"
import videotsh from "../assets/video/SH.mp4"
import videotC from "../assets/video/C.mp4"
import videotD from "../assets/video/DY.mp4"
import videotDD from "../assets/video/DD.mp4"
import videotDDD from "../assets/video/DDD.mp4"
import videota from "../assets/video/AA.mp4"
import videotGA from "../assets/video/GA.mp4"
import videotf from "../assets/video/F.mp4"
import videotK from "../assets/video/K.mp4"
import videotKK from "../assets/video/KK.mp4"
import videotL from "../assets/video/L.mp4"
import videotM from "../assets/video/M.mp4"
import videotN from "../assets/video/N.mp4"
import videotH from "../assets/video/H.mp4"
import videotW from "../assets/video/W.mp4"
import videotE from "../assets/video/E.mp4"
function Grammard() {
  const videos = [
    { id: 'videoA', title: 'حرف الألف', source: video },
    { id: 'videoB', title: 'حرف الباء', source: videoo },
    { id: 'videoT1', title: 'حرف التاء', source: videot },
    { id: 'videoT2', title: 'حرف الثاء', source: videott },
    { id: 'videoT3', title: 'حرف الجيم', source: videotg },
    { id: 'videoT4', title: 'حرف الحاء ', source: videottg },
    { id: 'videoT5', title: 'حرف الخاء', source: videottgg },
    { id: 'videoT6', title: 'حرف الدال', source: videotd },
    { id: 'videoT7', title: 'حرف الذال', source: videotT },
    { id: 'videoT8', title: 'حرف الراء', source: videotR },
    { id: 'videoT9', title: 'حرف الزاي', source: videotZ },
    { id: 'videoT10', title: 'حرف السين', source: videots },
    { id: 'videoT11', title: 'حرف الشين', source: videotsh },
    { id: 'videoT12', title: 'حرف الصاد', source: videotC },
    { id: 'videoT13', title: 'حرف الضاد', source: videotD },
    { id: 'videoT14', title: 'حرف الطاء', source: videotDD },
    { id: 'videoT15', title: 'حرف الظاء', source: videotDDD },
    { id: 'videoT16', title: 'حرف العين', source: videota },
    { id: 'videoT17', title: 'حرف الغين', source: videotGA },
    { id: 'videoT18', title: 'حرف الفاء', source: videotf },
    { id: 'videoT19', title: 'حرف القاف', source: videotK },
    { id: 'videoT20', title: 'حرف الكاف', source: videotKK},
    { id: 'videoT21', title: 'حرف اللام', source: videotL },
    { id: 'videoT22', title: 'حرف الميم', source: videotM },
    { id: 'videoT23', title: 'حرف النون', source: videotN },
    { id: 'videoT24', title: 'حرف الهاء', source: videotH},
    { id: 'videoT25', title: 'حرف الواو', source: videotW },
    { id: 'videoT26', title: 'حرف الياء', source: videotE },









    
    
    // يمكنك إضافة المزيد من الفيديوهات هنا
  ];

  const handleNextClick = (videoId) => {
    const nextVideoElement = document.getElementById(videoId);
    if (nextVideoElement) {
      nextVideoElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return(

    <>
     {videos.map((videoItem) => (
        <div key={videoItem.id} style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "sans-serif", padding: "50px", textAlign: 'center' }}>{videoItem.title}</h2>
          <video id={videoItem.id} width="640" height="360" controls>
            <source src={videoItem.source} type="video/mp4" />
            يتعذر تشغيل الفيديو.
          </video>

          <br />
          <h1
            style={{ color: "orange", textAlign: 'center', cursor: 'pointer' }}
            onClick={() => handleNextClick(videoItem.id)}
          >
            ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓الحرف التالي↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
          </h1>
        </div>
      ))}
      </>

      
    
   

  )
};

export default Grammard