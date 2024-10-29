
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import { useState } from 'react';

const data = [
  { label: 'Overall Need to Improvement', value: 400, color: 'red' },  
  { label: 'Overall Need to Improvement', value: 300, color: 'orange' },
  { label: 'Overall Need to Improvement', value: 300, color: '#faae3c' },
  { label: 'Overall Need to Improvement', value: 200, color: '#faae3c' },
  { label: 'Overall Need to Improvement', value: 200, color: '#73d914' },
  { label: 'Overall Need to Improvement', value: 200, color: '#316104' },
];

export default function Progress() {
  const [isRotated, setIsRotated] = useState(true);

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  return (
    <Stack direction="row" sx={{ position: 'relative' }}>
      <PieChart
        sx={{
          height: "auto", 
          width: "auto",
          mt: "30px",
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
            tooltip: {
              formatter: ({ label, value }) => `${label}: ${value}`,
              sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                borderRadius: '4px',
                padding: '4px 8px',
              },
            },
          },
        ]}
        width={20}
        height={60}
        fontSize={10}
        slotProps={{
          legend: { hidden: true },
        }}
      />
      <Box
       onClick={handleRotate}
        sx={{
          position: 'absolute',
          top: '60%',
          left: '49%',
          transition: 'transform 0.5s ease', 
          transform: isRotated ? 'rotate(45deg)' : 'rotate(0deg)',
          width: '2px',
          height: '10px',
          backgroundColor: 'black',
          borderRadius: '2px',
          zIndex: 1,
        }}
      />
    </Stack>
  );
}

// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { colors } from '@mui/material';

// const data = [
//     { label: 'Overall Ne', value: 400, color: 'red' },  
//     { label: 'Group B', value: 300, color: 'orange' },
//     { label: 'Group C', value: 300, color: '#faae3c' },
//     { label: 'Group D', value: 200, color: '#faae3c' },
//     { label: 'Group D', value: 200, color: '#73d914' },
//     { label: 'Group D', value: 200, color: '#316104' },
// ];

// export default function Progress() {
//   return (
//     <Stack direction="row">
//       <PieChart
      // sx={{ height: "auto", 
      //   width: "auto",mt:"30px",
      //   margin:0,
      //   mb:"0px",
      //   borderBottom:"none",
      //   padding: "1px 1px",

//       }}
//         series={[
//           {
//             startAngle: -90,
//             endAngle: 90,
//             paddingAngle: 0,
//             innerRadius: 20, 
//             outerRadius: 30,
//             data: data.map(d => ({ ...d, color: d.color })), 
//           },
//         ]}
//         margin={{ right: 30 }}
//         width={20}
//         height={60}
//         fontSize={10}
//         paddingAngle={0}
//         padding={0}
//         slotProps={{
//             legend: { hidden: true },
//             tooltip: {
//               content: "Overall need to improve",
//               sx: {
//                 backgroundColor: 'rgba(0, 0, 0, 0.7)',
//                 color: 'white',
//                 borderRadius: '4px',
//                 padding: '4px 8px',
//               },
//             },
//           }}
//       />
//     </Stack>
//   );
// }