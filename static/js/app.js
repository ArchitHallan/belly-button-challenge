// Assign samples.json URL to a const variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Create function for dropdown menu
function init() {
    // Fetch data from the JSON file
    d3.json(url).then(function(data) {
        // Select dropdown menu
        let selector = d3.select("#selDataset");
        // IDs from samples.json
        let sampleNames = data.names;
        // Append IDs to dropdown menu
        sampleNames.forEach((id) => {
            selector.append("option").text(id).property("value", id);
        });
        // Use first ID to build initial plots
        const firstID = sampleNames[0];
        updatePlots(firstID);
        updateMetadata(firstID);
    });
}


//function to update the metadata

function updateMetadata(sample) {
    d3.json(url).then(function(data) {
        let metadata = data.metadata;
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];
        let panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(result).forEach(([key, value]) => {
            panel.append("h5").text(`${key.toUpperCase()}: ${value}`);
        });
    });
}

//function to update the plots

function updatePlots(sample) {
    d3.json(url).then(function(data) {
        let samples = data.samples;
        let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];
        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        // Build a Bubble Chart
        let bubbleLayout = {
            title: "OTUs",
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30 }
        };
        let bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
            }
        }];
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

        // Build a Bar Chart
        let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let barData = [{
            y: yticks,
            x: sample_values.slice(0, 10).reverse(),
            text: otu_labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
        }];
        let barLayout = {
            title: "Top 10 OTUs",
            margin: { t: 30, l: 150 }
        };
        Plotly.newPlot("bar", barData, barLayout);
    });
}

// Create function for optionChanged
function optionChanged(newSample) {
    updatePlots(newSample);
    updateMetadata(newSample);
}

// Initialize dashboard

init();


