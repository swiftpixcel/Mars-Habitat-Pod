  <script>
    function startStorm() {
      document.getElementById("statusText").innerText = "ALERT: CO2 Storm";
      document.getElementById("temp").innerText = "24.5 C";
      document.getElementById("hum").innerText = "48%";
      document.getElementById("soil").innerText = "45%";
      document.getElementById("air").innerText = "18%";
      document.getElementById("fanStatus").innerText = "Carbon Fan: ON";
      document.getElementById("pumpStatus").innerText = "Water Pump: OFF";
      document.getElementById("mistStatus").innerText = "Mist Maker: OFF";
      document.getElementById("logText").innerText = "CO2 spike! Fan turned ON.";
    }
    function startDrought() {
      document.getElementById("statusText").innerText = "ALERT: Soil Dry";
      document.getElementById("temp").innerText = "25.0 C";
      document.getElementById("hum").innerText = "35%";
      document.getElementById("soil").innerText = "12%";
      document.getElementById("air").innerText = "82%";
      document.getElementById("pumpStatus").innerText = "Water Pump: ON";
      document.getElementById("mistStatus").innerText = "Mist Maker: ON";
      document.getElementById("fanStatus").innerText = "Carbon Fan: OFF";
      document.getElementById("logText").innerText = "Low soil moisture! Pump and Mist ON.";
    }
    function resetAll() {
      document.getElementById("statusText").innerText = "System Status: Normal";
      document.getElementById("temp").innerText = "23.5 C";
      document.getElementById("hum").innerText = "52%";
      document.getElementById("soil").innerText = "48%";
      document.getElementById("air").innerText = "85%";
      document.getElementById("pumpStatus").innerText = "Water Pump: OFF";
      document.getElementById("mistStatus").innerText = "Mist Maker: OFF";
      document.getElementById("fanStatus").innerText = "Carbon Fan: OFF";
      document.getElementById("logText").innerText = "All systems normal.";
    }
  </script>
