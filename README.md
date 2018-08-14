# Feed Reader Testing: Udacity Nanodegree Project.

Writing Test Suite for the Feed Reader project using [Jasmine](http://jasmine.github.io/) Testing tool.

## Instructions to run the Project:
	
	Test spec are written in feedreader.js

	Open the index.html file in your browser.

	The test results are appear in the bottom of the index.html page in browser.

	Green color test results indicate Pass, Red color test results indicate Fail.


### Test Cases:

1. Tests to make sure that the allFeeds variable has been defined and that it is not empty.

2. Test the loops through each feed in the allFeeds object and ensures it has a URL defined and the URL is not empty.

3. Test the loops through each feed in the allFeeds object and ensures it has a name defined and the name is not empty.

4. Test to ensure the menu element is hidden by default. 

5. Test to ensure the menu changes visibility when the menu icon is clicked. This test is having two expectations: the menu display when clicked and it gets hide when clicked again.

6. Test that ensures when the loadFeed function is called and completes its work.

7. Test to ensure when a new feed is loaded by the loadFeed function.