// components/PhotoCard.tsx
import React from 'react';
import { PhotoCardProps } from '../components/PhotoCardProps';

// const PhotoCard: React.FC<PhotoCardProps> = ({ title, imageUrl, onClick }) => {
//   return (
//     <div onClick={onClick} style={{ cursor: 'pointer', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden', width: '300px' }}>
//       <img src={imageUrl} alt={title} style={{ width: '100%', display: 'block' }} />
//       <div style={{ padding: '10px' }}>
//         <h3>{title}</h3>
//       </div>
//     </div>
//   );
// };

const PhotoCard: React.FC<PhotoCardProps> = ({ title, imageUrl, onClick }) => {
    return (
      <div className="med_card mr-[15px] mb-[15px]" onClick={onClick} style={{margin: '0px  20px  10px 0', cursor: 'pointer', overflow: 'hidden', width: '279px', height: '300px'}}>
        <img className='background-image' src={imageUrl} alt={title} style={{width: '100%', height: '100%', display: 'block', borderRadius: '25px'}} />
        <div className='med_content_main'>
            <h3 className='med_content_container H3'>{title} </h3>
        </div>
      </div>
    );
  };

export default PhotoCard;
