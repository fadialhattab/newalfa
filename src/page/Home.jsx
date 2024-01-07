import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
<div className='home'>
    <div className='container'>
        <div>
            <h1>ッتعلم بابتسامه</h1>
            <p>المتعه والمرح في التعلم</p>
        </div>
       
       <h3 className='h3'>ماذا نقدم؟</h3>
       <h6 className='h6'>يهدف موقع تعلم بابتسامة إلى تعليم اللغة العربية والتربية الاسلامية للأطفال من عمر 6 - 10 سنوات من خلال اللعب والتسلية دون إشعار الطفل بالعملية التعليمية، حيث يقدم للطفل رحلة مليئة بالمتعة والفائدة بأساليب تعليمية مبتكرة ومميزة ولا تتطلب أي معرفة مسبقة بالقراءة أو الكتابة</h6>
        
    </div>
    <div className='server-section-cards-containar'>
      
      <a className='server-section-cards-containar ' id="icon" href='Grammar'>
      <Link to="/grammar"></Link>
        <div className='server-section-icon ' id='icons'></div>
        <div className='card-title' id='title' style={{fontSize:'20px',color:'#007d93e4'}}>اللغة العربية</div>
      <div className='card-description' id='des' style={{color:'black'}}>
            مجموعة من النصوص التعليمية التي تشمل الاحرف باللغة العربية لتعليم القراءة  جميع الفئات العمرية المستهدفة بأساليب جديدة ومميزة

      </div>
      </a>
      <a className='server-section-cards-containar ' id="islam"href='Islam'>
      <Link to="/eslam"></Link>
        <div className='server-section-icon ' id='islam2'></div>
        <div className='card-title' id='title1'style={{fontSize:'20px',color:'#007d93e4'}}>القرآن الكريم </div>
      <div className='card-description' id='des1' style={{color:'black'}}>
             تعلم وحفظ سور من القرآن الكريم بطريقة بسيطة وممتعة لجميع الفئات العمرية للتقرب الى الله في عمر صغير 
      </div>
      </a>
      <a className='server-section-cards-containar ' id="task"href='Assignment'>
      <Link to="/assignmnt"></Link>
        <div className='server-section-icon ' id='task2'></div>
        <div className='card-title' id='title2' style={{fontSize:'20px',color:'#007d93e4'}}>تمرينات  </div>
      <div className='card-description' id='des2'style={{color:'black'}}>
             مجموعة من التمرينات البسيطة عن ما تعلمته لترسيخ المعلومات للفئة العمرية المستهدفة بشكل بسيط ومسلي 
      </div>
      </a>
    </div>
</div>
  )
}

export default Home