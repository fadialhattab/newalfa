import React from 'react'
import { Link } from 'react-router-dom'
function Assignment() {
  return (
    <>
<div className='server-section-cards-containar'>
      
      <a className='server-section-cards-containar ' id="icon" href='AssignmentA'>
      <Link to="/assignmenta"></Link>
        <div className='server-section-icon ' id='icons'></div>
        <div className='card-title' id='title' style={{fontSize:'20px',color:'#007d93e4'}}> تمارين اللغة العربية</div>
      <div className='card-description' id='des' style={{color:'black'}}>
            مجموعة من التمارين التعليمية التي تشمل الاحرف باللغة العربية لما تعلمناه سابقًا

      </div>
      </a>
      <a className='server-section-cards-containar ' id="islam"href='AssignmentQ'>
      <Link to="/assignmentq"></Link>
        <div className='server-section-icon ' id='islam2'></div>
        <div className='card-title' id='title1'style={{fontSize:'20px',color:'#007d93e4'}}>تمارين القرآن الكريم   </div>
      <div className='card-description' id='des1' style={{color:'black'}}>
             مجموعة من التمارين البسيطة  التي تشمل ما حفظناه من سور القرآن الكريم سابقًا
      </div>
      </a>
      
    </div>

    </>
  )
}

export default Assignment