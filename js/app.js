// Simulated data (can be replaced with real API calls)
const rankingsData = {
    "2024-10-10": {
      global: [
        { team: "Team A", batstats: 250, country: "Country 1" },
        { team: "Team B", batstats: 240, country: "Country 2" },
        { team: "Team C", batstats: 230, country: "Country 1" },
      ],
      country1: [
        { team: "Team A", batstats: 250, country: "Country 1" },
        { team: "Team C", batstats: 230, country: "Country 1" },
      ],
    },
  };
  
  const teamHistoryData = {
    team1: [
      { date: "2024-09-10", batstats: 200 },
      { date: "2024-10-10", batstats: 250 },
    ],
  };
  
  // Fetch and display rankings
  function fetchRankings() {
    const type = document.getElementById("type-select").value;
    const country = document.getElementById("country-select").value;
    const date = document.getElementById("date-select").value;
  
    const rankings = rankingsData[date]?.[country] || [];
    const rankingTable = document.getElementById("ranking-table");
    rankingTable.innerHTML = "";
  
    rankings.forEach((ranking, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${ranking.team}</td>
        <td>${ranking.batstats}</td>
        <td>${ranking.country}</td>
      `;
      rankingTable.appendChild(row);
    });
  }
  
  // Fetch and display team history
  function fetchTeamHistory() {
    const team = document.getElementById("team-select").value;
    const type = document.getElementById("type-select-history").value;
  
    const history = teamHistoryData[team] || [];
    const historyTable = document.getElementById("history-table");
    historyTable.innerHTML = "";
  
    const dates = [];
    const stats = [];
  
    history.forEach((entry) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.date}</td>
        <td>${entry.batstats}</td>
      `;
      historyTable.appendChild(row);
      dates.push(entry.date);
      stats.push(entry.batstats);
    });
  
    // Update the chart
    updateHistoryGraph(dates, stats);
  }
  