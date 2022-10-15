var vg_1 = "Vis1Map.json";
vegaEmbed('#map', vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "Vis2.vega";
vegaEmbed('#bubble_chart', vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "Vis3_Aus_Energy.json";
vegaEmbed('#bar_and_line', vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "Vis4_select_countries_renewables.vega";
vegaEmbed('#line', vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "Vis5_heatmap.vega";
vegaEmbed('#heatmap', vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);