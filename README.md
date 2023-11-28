# belly-button-challenge
Overview
This repository contains my work for the 14th challenge of the UofT SCS edX Data Bootcamp. The challenge involved building an interactive dashboard to explore the Belly Button Biodiversity dataset, cataloging the microbes that colonize human navels.

Background
The goal of the challenge was to create a dashboard revealing insights from the dataset. It highlights that a small group of microbial species, termed operational taxonomic units (OTUs), were present in over 70% of people, while others were relatively rare.

The deployed interactive dashboard can be accessed [here](https://archithallan.github.io/belly-button-challenge/)
.

Features
The interactive dashboard includes:

Bar Chart: Displaying the top 10 OTUs by sample ID.
Bubble Chart: Showing all samples for the selected sample ID.
Sample Metadata Panel: Providing demographic information for each individual.
Usage
To explore the dashboard:

Visit the deployed app [here](https://archithallan.github.io/belly-button-challenge/).
Use the drop-down menu to select a sample ID.
Observe the dynamically updating charts and metadata panel.
How it Works
Initialization function to set up default charts and populate the drop-down menu.
Update metadata function to refresh demographic information based on user selection.
Update charts function to dynamically change charts according to the selected sample ID.
