<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Aktif', 'Tidak Aktif'],
      datasets: [{
        label: 'Jumlah Pegawai',
        data: [100, 20],
        backgroundColor: ['#daae53', '#07213d']
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });
</script>
