/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* Test to make sure that the allFeeds variable
         * has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URLs are defined and not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }            
        });

        /* Test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined and not empty', function() {
             for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* Test suite named "The menu" */
    describe('The Menu', function() {
        /* Test to ensure the menu element is
         * hidden by default. 
         */
        it('hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* Test to ensure the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: the menu display when
          * clicked and it hide when clicked again.
          */
       it('hide or display by click event', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    })

        

    /* Test suite named "Initial Entries" */
    describe('Initial Entries', function() {
         /* Test to ensure when the loadFeed function
         * is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function () {
                done();
            });
        });

        // Feed is loaded by loadFeed
        it('Feed is loaded by loadFeed', function(done) {
            expect($('.feed .entry')).toBeDefined();
            done();
        });

    });

       

    /* Test suite named "New Feed Selection" */
     describe('New Feed Selection', function() {
        // variables to store the feeds value.
        var feedOne, feedTwo;
         /* Test to ensure when a new feed is loaded
         * by the loadFeed function, the content actually changes.
         * loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function () {
                feedOne = $('.feed').find(allFeeds.url)

                loadFeed(1, function () {
                    feedTwo = $('.feed').find(allFeeds.url)
                    done();
                });
            });
             
        });

        // New feed is loaded, so the content gets changed.
        it('new feed is loaded', function(done) {
            expect(feedOne).not.toBe(feedTwo);
            done();
        });

    });
        
}());
