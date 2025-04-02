export const sampleGraphData = [
    {
      moisture: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Moisture %',
            data: [65, 60, 55, 50, 45, 40, 65],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
          }
        ]
      },
      light: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Light (lux)',
            data: [7000, 7500, 8000, 7800, 7200, 6800, 7300],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
          }
        ]
      },
      combined: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Moisture %',
            data: [65, 60, 55, 50, 45, 40, 65],
            borderColor: 'rgba(54, 162, 235, 1)',
            yAxisID: 'y1'
          },
          {
            label: 'Light (lux)',
            data: [7000, 7500, 8000, 7800, 7200, 6800, 7300],
            borderColor: 'rgba(255, 206, 86, 1)',
            yAxisID: 'y2'
          }
        ]
      }
    },
    {
      moisture: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Moisture %',
            data: [78, 72, 65, 78, 73, 68, 78],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
          }
        ]
      },
      light: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Light (lux)',
            data: [5200, 5500, 5800, 5300, 5100, 5400, 5600],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
          }
        ]
      },
      combined: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            label: 'Moisture %',
            data: [78, 72, 65, 78, 73, 68, 78],
            borderColor: 'rgba(54, 162, 235, 1)',
            yAxisID: 'y1'
          },
          {
            label: 'Light (lux)',
            data: [5200, 5500, 5800, 5300, 5100, 5400, 5600],
            borderColor: 'rgba(255, 206, 86, 1)',
            yAxisID: 'y2'
          }
        ]
      }
    }
  ];