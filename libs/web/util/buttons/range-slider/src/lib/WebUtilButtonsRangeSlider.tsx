import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

import styles from './WebUtilButtonsRangeSlider.module.css';

/* eslint-disable-next-line */
export interface WebUtilButtonsRangeSliderProps {
  setPricingValue: any;
}

function valueLabelFormat(value: number) {
  const units = ['MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

export function calculateValue(value: number) {
  return 2 ** value;
}

export function WebUtilButtonsRangeSlider(
  props: WebUtilButtonsRangeSliderProps
) {
  const { setPricingValue } = props;

  const [value, setValue] = useState<number>(10);

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
      setPricingValue(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        value={value}
        min={5}
        step={1}
        max={25}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
      />
      <Typography
        className="text-base"
        id="non-linear-slider"
        gutterBottom
        align="right"
      >
        Storage: {valueLabelFormat(calculateValue(value))}
      </Typography>
    </Box>
  );
}

export default WebUtilButtonsRangeSlider;
