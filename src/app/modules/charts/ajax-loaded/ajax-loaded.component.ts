import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ajax-loaded',
  templateUrl: './ajax-loaded.component.html',
  styleUrls: ['./ajax-loaded.component.css']
})
export class AjaxLoadedComponent implements OnInit {
  Highcharts = Highcharts;

  charsOptions = {
    chart: {
      scrollablePlotArea: {
        minWidth: 700
      }
    },

    data: {
      csvURL: 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/analytics.csv',
      beforeParse: function (csv) {
        return csv.replace(/\n\n/g, '\n');
      }
    },

    title: {
      text: 'Daily sessions at www.highcharts.com'
    },

    subtitle: {
      text: 'Source: Google Analytics'
    },

    xAxis: {
      tickInterval: 7 * 24 * 3600 * 1000, // one week
      tickWidth: 0,
      gridLineWidth: 1,
      labels: {
        align: 'left',
        x: 3,
        y: -3
      }
    },

    yAxis: [{ // left y axis
      title: {
        text: null
      },
      labels: {
        align: 'left',
        x: 3,
        y: 16,
        format: '{value:.,0f}'
      },
      showFirstLabel: false
    }, { // right y axis
      linkedTo: 0,
      gridLineWidth: 0,
      opposite: true,
      title: {
        text: null
      },
      labels: {
        align: 'right',
        x: -3,
        y: 16,
        format: '{value:.,0f}'
      },
      showFirstLabel: false
    }],

    legend: {
      align: 'left',
      verticalAlign: 'top',
      borderWidth: 0
    },

    tooltip: {
      shared: true,
      crosshairs: true
    },

    plotOptions: {
      series: {
        cursor: 'pointer',
        point: {
          events: {
            click: function (e) {
              hs.htmlExpand(null, {
                pageOrigin: {
                  x: e.pageX || e.clientX,
                  y: e.pageY || e.clientY
                },
                headingText: this.series.name,
                maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                  this.y + ' sessions',
                width: 200
              });
            }
          }
        },
        marker: {
          lineWidth: 1
        }
      }
    },

    series: [
      {
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }, {
        // name: 'All sessions',
        // data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        lineWidth: 4,
        marker: {
          radius: 4
        }
      }, {
        name: 'New users'
      }]
  }
  constructor() { }

  ngOnInit() {
  }

}
