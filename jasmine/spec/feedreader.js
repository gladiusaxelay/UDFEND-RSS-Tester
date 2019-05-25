
$(function () {
    // Test suite for RSS feeeds

    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // First we'll loop through the URLs returned from allFeeds and 
        // check they are neither undefine, empty or contain anything but strings
        it('have URLs defined that are not empty', function () {
            for (let entry of allFeeds) {
                expect(entry.url).toBeDefined();
                expect(entry.url.constructor).toBe(String);
                expect(entry.url.length).not.toBe(0);
            }
        });

        // We'll loop now through each feed Name and 
        // check they are neither undefine, empty or contain anything but strings
        it('have URL names defined that are not empty', function () {
            for (let entry of allFeeds) {
                expect(entry.name).toBeDefined();
                expect(entry.name.constructor).toBe(String);
                expect(entry.name.length).not.toBe(0);
            }
        });
    });


    // Test suite for the site behaviour
    describe('The menu', function () {

        // Here we are evaluating that by default the menu 'body' is hidden
        // by checking if it has the CSS class 'menu-hidden' assigned
        it('must be hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Here we use jQuery to trigger a 'click' event to simulate said
        // user action, so we can test if the CSS class 'menu-hidden' is toggling
        // accordingly 
        it('must show/hide properly when clicked', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true)
        });
    });

    describe('Initial Entries', function () {

        // Here we will test that AFTER loadFeed has completed (hence the beforeEach call),
        // if returned at lest one or more feeds back and these are being populated
        // to the site
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('must be > 0, AKA have something', function () {
            expect($('.feed .entry-link').length).toBeGreaterThan(1);
        });
    });

    describe('New Feed Selection', function () {

        let content;

        // Here we test that when the user selects another feed from the menu,
        // the site changes and shows this new feed. For this we fetch the 
        // current and 'new' feed and compare them together
        beforeEach(function (done) {
            loadFeed(0, function () {
                previousContent = $('.feed').text();
                //console.log(previousContent);
            });
            loadFeed(1, function () {
                done();
            });
        });

        it('should be different than the old feed', function () {
            //console.log($('.feed').text());
            expect($('.feed').text()).not.toBe(previousContent);
        });

    });
}());
