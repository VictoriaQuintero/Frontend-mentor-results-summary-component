import { useEffect, useState } from "react";

export default function Items({item}) {
  return (
    <div
    style={{backgroundColor:item.color[0]}}
      className='flex justify-between p-3 my-3 rounded-lg bg-opacity-10'
    >
      <spam className="flex gap-2">
        <img src={item.icon} alt="icono" />
        <h3 style={{color:item.color[1]}}>{item.category}</h3>
      </spam>
      <spam className='font-bold flex items-center gap-2'>
        <strong>{item.score}</strong>
        <p className="text-black text-opacity-50">  /  100</p>
      </spam>
    </div>
  );
}
