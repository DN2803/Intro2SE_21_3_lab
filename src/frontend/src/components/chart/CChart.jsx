import React from "react";
import Donut from 'react-donut';

const CChart = () => {
    return (
    <>
    <Donut
        chartData={[
          { name: 'Nhân viên', data: 30 },
          { name: 'Thiết bị y tế', data: 50 },
          { name: 'Thuốc', data: 20 },
        ]}
        chartWidth={400}
        chartHeight={400}
        title=""
        chartThemeConfig={{
          series: {
            colors: ['#ffe0bd', '#670303', '#6cbfce'],
            
          },
          chartExportMenu: {
            color: '#ffff'
          } 
        }}
      />
    </>)
}
export default CChart