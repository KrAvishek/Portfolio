// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import mywork_data from '../../assets/mywork_data'
// import arrow_icon  from '../../assets/arrow_icon.svg'

// const MyWork = () => {
//   return (
//     <div id='work' className='mywork'>
//       <div className="title-box">
//         <h1>My latest work</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="mywork-container">
//         {/* {mywork_data.map((work,index)=>{
//             return <img key={index} src={work.w_img} alt="" />
//         })}
//       </div> */}
//    {mywork_data.map((work, index) => (
//           <div key={index} className="mywork-item">
//             <a href={work.github_link} target="_blank" rel="noopener noreferrer">
//               <img src={work.w_img} alt={work.description} />
//             </a>
//             <p className="work-description">{work.description}</p>
//           </div>
//         ))}
//       </div>
//       <div className="mywork-showmore">
//         <p>Show More</p>
//         <img src={arrow_icon} alt="" />
//       </div>
//     </div>
//   )
// }

// export default MyWork;


// import React, { useState } from 'react';
// import './MyWork.css';
// import mywork_data from '../../assets/mywork_data';

// const MyWork = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(-1);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(-1);
//   };

//   return (
//     <div id='work' className='mywork'>
//       <div className="title-box">
//         <h1>My Latest Work</h1>
//       </div>
//       <div className="mywork-container">
//         {mywork_data.map((work, index) => (
//           <div
//             key={index}
//             className="mywork-item"
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="work-details">
//               <h2>{work.title}</h2>
//               <p>{work.description}</p>
//             </div>
//             <div className="image-overlay" style={{ opacity: hoveredIndex === index ? 1 : 0 }}>
//               <img src={work.w_img} alt="" />
//               <div className="overlay-links">
//                 <a className="visit-link" href={work.visit_link} target="_blank" rel="noopener noreferrer">Visit</a>
//                 <a className="github-link" href={work.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyWork;

// import React from 'react';
// import './MyWork.css';
// import mywork_data from '../../assets/mywork_data';
// import theme_pattern from '../../assets/theme_pattern.svg';

// const MyWork = () => {
//   return (
//     <div id='work' className='mywork'>
//       <div className="title-box">
//         <h1>My Latest Work</h1>
//         <img src={theme_pattern} alt="" />
//       </div>
//       <div className="mywork-container">
//         {mywork_data.map((work, index) => (
//           <div className="mywork-item" key={index}>
//             <div className="work-details">
//               <h2>{work.title}</h2>
//             </div>
//             <div className="work-description">
//               <p>{work.description}</p>
//             </div>
//             <div className="image-overlay">
//               <img src={work.w_img} alt="" />
//               <div className="overlay-links">
//                 <a className="visit-link" href={work.visit_link} target="_blank" rel="noopener noreferrer">Visit</a>
//                 <a className="github-link" href={work.github_link} target="_blank" rel="noopener noreferrer">GitHub</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyWork;

import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import theme_pattern from '../../assets/theme_pattern.svg';
import arrow_icon  from '../../assets/arrow_icon.svg'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="title-box">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className="container">
        {mywork_data.map((work, index) => (
          <div key={index} className="card">
            <div className="image">
              <img src={work.w_img} alt={work.title} />
            </div>
            <div className="content">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <div className="card-links">
              <a href={work.github_link} target="_blank" rel="noopener noreferrer" className='card-link'>GitHub</a>
              <a href={work.visit_link} target="_blank" rel="noopener noreferrer" className='card-link'>Visit</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/KrAvishek" target="_blank" rel="noopener noreferrer" className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Show More" />
        </a>
        </div>
      
    
  );
};

export default MyWork;
