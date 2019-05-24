# UDFEND-Arcade-Game

In this project we are given a web-based application that reads RSS feeds. The original developer of this application already included [Jasmine](http://jasmine.github.io/) albeit with an incomplete test suite. 

Tasks to complete:
* Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined _and_ that the URL is not empty
* Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty
* Write a new test suite named `"The menu"`
* Write a test that ensures the menu element is hidden by default
* Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display itself when clicked, and does it hide when clicked again?
* Write a test suite named `"Initial Entries"`
* Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container
* Write a test suite named `"New Feed Selection"`
* Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes

## Getting Started

1. Donwload or clone this repository.

### Prerequisites

* Modern Web Browser (i.e.:Chrome) that supports HTML/CSS and JavaScript.
* Familiarity with Jasmine and jQuery.

## Running the Tests

1. Open `index.html` in you Web Browser and have fun!.

## Evaluation Criteria:

Use this [rubric](https://review.udacity.com/#!/rubrics/18/view) for self-checking your submission.

## Acknowledgments

* Udacity for the starter [code](https://github.com/udacity/frontend-nanodegree-feedreader).
