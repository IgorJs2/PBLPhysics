var options = {
  title: "",
  is3D: true,
  sliceVisibilityThreshold: 0
}

google.charts.load('current', {'packages': ['corechart']}).then(() => {
  // Draw Grade Level/ Position Chart

  google.charts.setOnLoadCallback(draw_question(
    'SELECT C, COUNT(C) GROUP BY C', 'pie', 'question1_chart',
    'Grade level/position in school'
  ))
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {
  // Are you aware of the environmental damage caused by plastic waste?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT D, COUNT(D) GROUP BY D', 'pie', 'question2_chart',
    'Are people aware of the environmental damage caused by plastic waste?'
  ));
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {
  // How much plastic waste have you seen in your environment (school campus, parks, ... etc)?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT E, COUNT(E) GROUP BY E', 'pie', 'question3_chart',
    'How much plastic waste have people seen in their environment (school campus, parks, ... etc)?'
  ));
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {
  // Where have you seen these plastics littered?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT F, COUNT(F) GROUP BY F', 'bar', 'question4_chart',
    'Where have people seen these plastics littered?'
  ));
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {
  // What type of plastic waste have you seen?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT G, COUNT(G) GROUP BY G', 'bar', 'question5_chart',
    'What type of plastic waste have people seen?'
  ));

});

google.charts.load('current', {'packages': ['corechart']}).then(() => {
  // How many cups (regular sized) of water do you drink a day?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT H, COUNT(H) GROUP BY H', 'pie', 'question6_chart',
    'How many cups (regular sized) of water do people drink a day?'
  ));
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {
  // What types of reusable plastics do you own?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT J, COUNT(J) GROUP BY J', 'bar', 'question7_chart',
    'What types of reusable plastics do people own?'
  ));

});

google.charts.load('current', {'packages': ['corechart']}).then(() => {
  // How often do you use reusable plastics?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT K, COUNT(K) GROUP BY K', 'pie', 'question8_chart',
    'How often do people use reusable plastics?'
  ));
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {
  // Do you know what micro-plastics are?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT L, COUNT(L) GROUP BY L', 'pie', 'question9_chart',
    'Do people know what micro-plastics are?'
  ));
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {

// Where do you believe micro plastics are present in?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT M, COUNT(M) GROUP BY M', 'bar', 'question10_chart',
    'Where do people believe micro plastics are present in?'
  ));
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {

// What do you think is the most effective way to combat the plastic waste issue?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT N, COUNT(N) GROUP BY N', 'bar', 'question11_chart',
    'What do people think is the most effective way to combat the plastic waste issue?'
  ));

});


google.charts.load('current', {'packages': ['corechart']}).then(() => {

  // Can you afford a reusable plastic water bottle that has an average cost of $15?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT O, COUNT(O) GROUP BY O', 'pie', 'question12_chart',
    'Can people afford a reusable plastic water bottle that has an average cost of $15?'
  ));
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {

  // Would you consider purchasing a reusable water bottle for potential health benefits?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT P, COUNT(P) GROUP BY P', 'pie', 'question13_chart',
    'Would people consider purchasing a reusable water bottle for potential health benefits?'
  ));
});

google.charts.load('current', {'packages': ['corechart']}).then(() => {

  // If you had the option to get a reusable plastic water bottle, how much would you be willing to spend for it?

  google.charts.setOnLoadCallback(draw_question(
    'SELECT Q, COUNT(Q) GROUP BY Q', 'pie', 'question14_chart',
    'If people had the option to get a reusable plastic water bottle, how much would you be willing to spend for it?'
  ));
});

// ENDING

function draw_question(querySelector, chartType, id, title) {

  const queryString = encodeURIComponent(querySelector)

  const query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1QLRg3Co-j1CztRI3CwZ8uIeHpO6eXM4dHqXSXp2Td10' + '/gviz/tq?gid=0&headers=1&tq=' + queryString);

  if (chartType == 'pie') {
    query.send(
      ((response) => {
        const data = response.getDataTable();

        const chart = new google.visualization.PieChart(document.getElementById(id));
        chart.draw(data, {...options, height: 350, title});
      })
    );
  }
  if (chartType == 'bar') {
    query.send(
      ((response) => {
        const data = response.getDataTable();

        const chart = new google.visualization.BarChart(document.getElementById(id));
        chart.draw(data, {...options, height: 350, title});
      })
    );
  }
}
