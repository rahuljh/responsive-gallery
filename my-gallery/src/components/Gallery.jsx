import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const getGallery = async() => {
    try {
      let url = `http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0`;
      const res = await fetch(url);
      const data = await res.json();
      setItems(data);
    } catch(error){
      console.log(error);
    } 
  }
useEffect(() => {
  getGallery();
}, [])
const [items, setItems] = useState([]);
const getImg = (imgSrc) => {
  setItems(imgSrc);
}
  return (
    <>
    <div className="gallery">
       {items && items.map((curEle,index) => {
         return (
           <div className="pics" key={index} onClick={() => getImg(items.imgSrc)}>
             <img src={`${curEle.urls.regular}`} alt="rhl" style={{width: '100%'}} />
           </div>
         )
       })}
      </div>
    </>
  )
}

export default Gallery


