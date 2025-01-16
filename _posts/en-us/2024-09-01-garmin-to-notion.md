---
layout: distill
title: Garmin-2-Notion Integration ⌚
toc: true
icon: # ti-icon-brand-notion
date: 2024-09-01 11:12:00
description: Seamlessly sync your Garmin fitness activities to Notion using automated workflows
tags: lifestyle productivity
categories: tools
featured: false
thumbnail: assets/img/thumbnails/garmin-run.png
lang: en-us
---

This project connects your Garmin activities and personal records to your Notion database, allowing you to keep track of your performance metrics in one place.

## Features ✨

🔄 Automatically sync Garmin activities to Notion in real-time
📊 Track detailed activity metrics (distance, pace, heart rate)
🎯 Extract and track personal records (fastest 1K, longest ride)
🤖 Zero maintenance after setup
📱 Compatible with all Garmin activities and devices
🔧 Easy setup with clear instructions and minimal coding required

## Prerequisites 🛠️

- A Notion account with API access.
- A Garmin Connect account to pull activity data.
- If you wish to sync your Peloton workouts with Garmin, see [peloton-to-garmin](https://github.com/philosowaffle/peloton-to-garmin)

## Getting Started 🎯

A detailed step-by-step guide is provided on my Notion template [here](https://chloevoyer.notion.site/Set-up-Guide-17915ce7058880559a3ac9f8a0720046).
For more advanced users, follow these steps to set up the integration:

### 1. Fork this GitHub Repository

### 2. Duplicate my [Notion Template](https://www.notion.so/templates/fitness-tracker-738)

* Save your Activities and Personal Records database ID (you will need it for step 4)
  * Optional: Daily Steps database ID
  * Look at the URL: notion.so/username/[string-of-characters]
  * The database ID for this database is everything after your “username/“ and before the “?v”

### 3. Create Notion Token

* Go to [Notion Integrations](https://www.notion.so/profile/integrations).
* [Create](https://developers.notion.com/docs/create-a-notion-integration) a new integration and copy the integration token.
* [Share](https://www.notion.so/help/add-and-manage-connections-with-the-api#enterprise-connection-settings) the integration with the target database in Notion.

### 4. Set Environment Secrets

* Environment secrets to define:
  * GARMIN_EMAIL
  * GARMIN_PASSWORD
  * NOTION_TOKEN
  * NOTION_DB_ID
  * NOTION_PR_DB_ID
  * NOTION_STEPS_DB_ID (optional)

### 5. Run Scripts (if not using automatic workflow)

* Run [garmin-activities.py](https://github.com/chloevoyer/garmin-to-notion/blob/main/garmin-activities.py) to sync your Garmin activities to Notion.  
`python garmin-activities.py`
* Run [person-records.py](https://github.com/chloevoyer/garmin-to-notion/blob/main/personal-records.py) to extract activity records (e.g., fastest run, longest ride).  
`python personal-records.py` 

## Example Configuration 📝

You can customize the scripts to fit your needs by modifying environment variables and Notion database settings.

Here is a screenshot of what my Notion dashboard looks like:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/thumbnails/notion-template.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

My Notion template is available for free and can be duplicated to your Notion [here](https://www.notion.so/templates/fitness-tracker-738)
