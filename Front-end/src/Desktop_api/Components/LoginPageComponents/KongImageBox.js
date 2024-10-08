import React from 'react';

const importAll = (r) => {
  return r.keys().map(r);
};

// Dynamically import images from the specified folder
const images = importAll(require.context('../../../Pictures/loginPage', false, /\.(png|jpe?g|svg)$/));

function KongImageBox() {
  // You can choose a specific image or randomize it
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Array of background colors
  const colors = ['bg-red-300', 'bg-orange-300', 'bg-teal-500', 'bg-blue-300', 'bg-amber-300', 'bg-lime-300', 'bg-lime-400', 'bg-emerald-400', 'bg-indigo-300', 'bg-rose-300', 'bg-neutral-400'];
  // Randomly select a color
  const randomBgColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className={` box-border  flex justify-center w-full h-[100%] `} style={{ height: `calc(100% - 14rem)` }}>
      <div className={`p-4 max-h-full max-w-full ${randomBgColor}`}>
        <img className={` max-h-full max-w-full  aspect-square `} src={randomImage} alt="Kong" />
      </div>

    </div>
  );
}

export default KongImageBox;
