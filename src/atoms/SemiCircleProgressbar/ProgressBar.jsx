import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import { colors } from '@mui/material';

const data = [
    { label: 'Group A', value: 400, color: 'red' },  
    { label: 'Group B', value: 300, color: 'orange' },
    { label: 'Group C', value: 300, color: '#faae3c' },
    { label: 'Group D', value: 200, color: '#faae3c' },
    { label: 'Group D', value: 200, color: '#73d914' },
    { label: 'Group D', value: 200, color: '#316104' },
];

export default function Progress() {
  return (
    <Stack direction="row">
      <PieChart
      sx={{ height: "auto", 
        width: "auto",mt:"30px",
        margin:0,
        mb:"0px",
        borderBottom:"none",
        padding: "1px 1px",

      }}
        series={[
          {
            startAngle: -90,
            endAngle: 90,
            paddingAngle: 0,
            innerRadius: 20, 
            outerRadius: 30,
            data: data.map(d => ({ ...d, color: d.color })), 
          },
        ]}
        margin={{ right: 30 }}
        width={20}
        height={60}
        fontSize={10}
        paddingAngle={0}
        padding={0}
        slotProps={{
            legend: { hidden: true },
            tooltip: {
              content: "Overall need to improve",
              sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                borderRadius: '4px',
                padding: '4px 8px',
              },
            },
          }}
      />
    </Stack>
  );
}