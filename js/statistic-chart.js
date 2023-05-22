google.charts.load('current', {'packages':['corechart']});

var options = {
  title: "",
  is3D: true,
  sliceVisibilityThreshold: 0
}

// Draw Grade Level/ Position Chart

google.charts.setOnLoadCallback(draw_question(
  'SELECT C, COUNT(C) GROUP BY C', 'pie', 'question1_chart',
  'Grade level/position in school'
))

// Are you aware of the environmental damage caused by plastic waste?

google.charts.setOnLoadCallback(draw_question(
  'SELECT D, COUNT(D) GROUP BY D', 'pie', 'question2_chart',
  'Are people aware of the environmental damage caused by plastic waste?'
));

// How much plastic waste have you seen in your environment (school campus, parks, ... etc)?

google.charts.setOnLoadCallback(draw_question(
  'SELECT E, COUNT(E) GROUP BY E', 'pie', 'question3_chart',
  'How much plastic waste have people seen in their environment (school campus, parks, ... etc)?'
));

// Where have you seen these plastics littered?

google.charts.setOnLoadCallback(draw_question(
  'SELECT F, COUNT(F) GROUP BY F', 'bar', 'question4_chart',
  'Where have people seen these plastics littered?'
));

// What type of plastic waste have you seen?

google.charts.setOnLoadCallback(draw_question(
  'SELECT G, COUNT(G) GROUP BY G', 'bar', 'question5_chart',
  'What type of plastic waste have people seen?'
));


// How many cups (regular sized) of water do you drink a day?

google.charts.setOnLoadCallback(draw_question(
  'SELECT H, COUNT(H) GROUP BY H', 'pie', 'question6_chart',
  'How many cups (regular sized) of water do people drink a day?'
));

// What types of reusable plastics do you own?

google.charts.setOnLoadCallback(draw_question(
  'SELECT J, COUNT(J) GROUP BY J', 'bar', 'question7_chart',
  'What types of reusable plastics do people own?'
));

// How often do you use reusable plastics?

google.charts.setOnLoadCallback(draw_question(
  'SELECT K, COUNT(K) GROUP BY K', 'pie', 'question8_chart',
  'How often do people use reusable plastics?'
));

// Do you know what micro-plastics are?

google.charts.setOnLoadCallback(draw_question(
  'SELECT L, COUNT(L) GROUP BY L', 'pie', 'question9_chart',
  'Do people know what micro-plastics are?'
));

// Where do you believe micro plastics are present in?

google.charts.setOnLoadCallback(draw_question(
  'SELECT M, COUNT(M) GROUP BY M', 'bar', 'question10_chart',
  'Where do people believe micro plastics are present in?'
));

// What do you think is the most effective way to combat the plastic waste issue?

google.charts.setOnLoadCallback(draw_question(
  'SELECT N, COUNT(N) GROUP BY N', 'bar', 'question11_chart',
  'What do people think is the most effective way to combat the plastic waste issue?'
));

// Can you afford a reusable plastic water bottle that has an average cost of $15?

google.charts.setOnLoadCallback(draw_question(
  'SELECT O, COUNT(O) GROUP BY O', 'pie', 'question12_chart',
  'Can people afford a reusable plastic water bottle that has an average cost of $15?'
));

// Would you consider purchasing a reusable water bottle for potential health benefits?

google.charts.setOnLoadCallback(draw_question(
  'SELECT P, COUNT(P) GROUP BY P', 'pie', 'question13_chart',
  'Would people consider purchasing a reusable water bottle for potential health benefits?'
));

// If you had the option to get a reusable plastic water bottle, how much would you be willing to spend for it?

google.charts.setOnLoadCallback(draw_question(
  'SELECT Q, COUNT(Q) GROUP BY Q', 'pie', 'question14_chart',
  'If people had the option to get a reusable plastic water bottle, how much would you be willing to spend for it?'
));

// ENDING

function draw_question(querySelector, chartType, id, title) {

  const queryString = encodeURIComponent(querySelector)

  const query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/16PCjjSLWwv__gmY98h361xexvXTxaFzN7Npv7GHtCAY' + '/gviz/tq?gid=0&headers=1&tq=' + queryString);

  if(chartType == 'pie'){
    query.send(
      ((response) => {
        const data = response.getDataTable();

        const chart = new google.visualization.PieChart(document.getElementById(id));
        chart.draw(data, { ...options, height: 350, title });
      })
    );
  }
  if(chartType == 'bar'){
    query.send(
      ((response) => {
        const data = response.getDataTable();

        const chart = new google.visualization.BarChart(document.getElementById(id));
        chart.draw(data, { ...options, height: 350, title });
      })
    );
  }
}
