import React, { useState } from 'react';
import imageO from "../assets/imgas/QUF.jpeg";
import imageN from "../assets/imgas/QUN.jpeg";
import imageE from "../assets/imgas/QUE.jpeg";

function AssignmentQ() {
  const [draggedImage, setDraggedImage] = useState(null);

  const images = [
    { id: 'image1', title: '{سورة الفاتحة } ', source: imageO, customText: 'ورقة عمل سورة الفاتحة **' },
    { id: 'image2', title: '{سورة الناس } ', source: imageN, customText: 'ورقة عمل سورة الناس **' },
    { id: 'image3', title: '{سورة الأخلاص } ', source: imageE, customText: 'ورقة عمل سورة الأخلاص **' },
  ];

  const handleDragStart = (event, imageId) => {
    setDraggedImage(imageId);
    event.dataTransfer.setData('text/plain', imageId);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedImageId = event.dataTransfer.getData('text/plain');

    // التأكد من أننا لا نسحب الصورة على نفسها
    if (droppedImageId !== draggedImage) {
      // قم بتغيير ترتيب الصور
      const updatedImages = [...images];
      const draggedImageIndex = updatedImages.findIndex((img) => img.id === draggedImage);
      const droppedImageIndex = updatedImages.findIndex((img) => img.id === droppedImageId);

      [updatedImages[draggedImageIndex], updatedImages[droppedImageIndex]] = [updatedImages[droppedImageIndex], updatedImages[draggedImageIndex]];

      setDraggedImage(null);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handlePrintClick = () => {
    window.print();
  };

  return (
    <>
      <br></br>
      <br></br>
      <h4 style={{ color: "black", textAlign: 'center', cursor: 'pointer' }}>
        ッ مرحبًا يا رِفاق هيا بنا نقوم بحل النشاطات المتعلقة بما حفظناه سابقًا من سور القرآن الكريم ،فقد قُم بطباعة الصورة عن طريق الضغط على زر"طباعة" هيا بنا
      </h4>
      <h1 style={{ color: "green" }}>✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰✰</h1>
      <div
        className='n1'
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {images.map((imageItem) => (
          <div
            key={imageItem.id}
            className='image-card'
            draggable
            onDragStart={(e) => handleDragStart(e, imageItem.id)}
          >
            <h2 style={{ fontFamily: 'sans-serif', padding: '20px', textAlign: 'center', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              {imageItem.title}
            </h2>
            <div className='image-container' style={{ textAlign: 'center', width: '100%' }}>
              <img id={imageItem.id} src={imageItem.source} alt={imageItem.title} />
            </div>
            <p style={{ textAlign: 'right', padding: '10px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', fontSize: "20PX" }}>{imageItem.customText}</p>
            {/* Print button */}
            <button style={{ textAlign: "right", backgroundColor: "mediumseagree", fontSize: "20px", margin: "0", borderRadius: "50%", border: "2px solid green" }} onClick={handlePrintClick}>طباعة</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default AssignmentQ;
