import React from 'react';

const shades = [90, 80, 70, 60, 50, 35, 20];

const LightnessSlider = ({ color, onChange, ...props }) => {
  const selectedIndex = shades.indexOf(Math.round(color.lightness * 100 / 100));
  return (
    <div className='flex flex--center flex--space-between' { ...props }>
      {shades.map((shade, i) => {
        const bg = color.setLightness(shade).toHex();
        return (
          <div
            key={shade}
            className={`color-swatch ${selectedIndex === i && 'selected'}`}
            onClick={() => onChange(bg)}
            style={{ backgroundColor: bg }}
          />
        );
      })}
    </div>
  );
};
export default LightnessSlider;
