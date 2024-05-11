// components/PhotoCard.tsx
import React from 'react';
import { PillsCardProps } from '../components/PillsCardProps';

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

const PillsCard: React.FC<PillsCardProps> = ({ title, imageUrl, onClick }) => {
    return (
      <div onClick={onClick} style={{margin: '20px  20px  10px 0', cursor: 'pointer', overflow: 'hidden', width: '219px'}}>
        <div  style={{paddingBottom: '0px'}}>
            <img src={imageUrl} alt={title} style={{width: '100%', display: 'block', borderRadius: '20px'}} />
            <h3 className='mt-[5px] flex'>{title} </h3>
        </div>
      </div>
    );
  };

export default PillsCard;
