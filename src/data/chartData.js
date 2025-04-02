export const sampleGraphData = [
    {
      moisture: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Soil Moisture (%)',
            data: [65, 60, 55, 50, 45, 40, 65],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2,
            tension: 0.3,
          }
        ]
      },
      light: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Light Exposure (lux)',
            data: [7000, 7500, 8000, 7800, 7200, 6800, 7300],
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            borderWidth: 2,
            tension: 0.3,
          }
        ]
      },
      combined: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Soil Moisture (%)',
            data: [65, 60, 55, 50, 45, 40, 65],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            yAxisID: 'y'
          },
          {
            label: 'Light Exposure (lux)',
            data: [7000, 7500, 8000, 7800, 7200, 6800, 7300],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            yAxisID: 'y1'
          }
        ]
      }
    }
  ];
  