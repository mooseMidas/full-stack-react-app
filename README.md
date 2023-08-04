# Fullstack React App

This application is created using React and Express.

The application interfaces with the iTunes Search API, allowing users to enter a search criteria.

# Application Details:

## Backend

Interfaces with the iTunes Search API

## Frontend

Renders an attractive user interface that allows users to enter a search term,
select the type of media they want to search for and choose a number of results they want to be displayed.

Results are rendered using props to create an attractive display.

Each result is rendered with a Save and Preview button.
Users can save an item to their Favourites List by clicking on the save button.
A Preview button is only rendered for items with a previewUrl key which launches a preview video or preview audio and a Close button.

Favourites Page:
Each saved item is saved in the Favourites page.
Items are rendered with a button to remove the item from favourites, a checkbox allowing user to check a number of items before removing multiple items,
and a Clear button allowing user to clear the favourites list.

# Installation and Setup Instructions

Download or clone the repository.
You will need node and npm installed globally on your machine.

## Installation:

npm install

## To Run Test Suite:

Back end test:
cd backend
npm test

Front end test:
cd frontend
npm test

## To Start Application:

cd backend
npm start

# Deployed Website

https://fullstackreact-b17c3224f720.herokuapp.com/

# API Keys

The code does not use any API keys. The only external API being accessed is the iTunes API, which does not require an API key.

# Security

## contentSecurityPolicy

Prevents cross-site scripting (XSS) attacks by restricting the sources from which various types of content can be loaded.
Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites.

## xssFilter

Enables the Cross-Site Scripting (XSS) filter in the user's web browser.

## noSniff

Prevents browsers from guessing the MIME type of a resource.

## referrerPolicy

Controls the value of the Referer header sent by the user's web browser when navigating to other pages.

## hsts

Enables HTTP Strict Transport Security (HSTS), which forces browsers to use HTTPS for all requests to the site.

## hidePoweredBy

Removes the X-Powered-By header from responses sent by the server.
Hackers can exploit known vulnerabilities if they see that the site is powered by Express

## noCache

Adds various cache-control headers to disable caching of the site's content.

## XContentOptions

Adds the X-Content-Type-Options header to prevent MIME type sniffing.
