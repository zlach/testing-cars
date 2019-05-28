var expect = chai.expect;


describe("Testing Test", function(){
    it('1 = 1', () => {
        expect(1).to.eql(1);
    });
});

describe("Car Creation Tests", function(){
    let select_elem;
    // let bod;
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
        select_elem = document.createElement('select');

        // let carCount = 0;

        bod = document.getElementsByTagName('body');
    });

    afterEach(() => {
        sandbox.restore();
    });
    it('should produce a new car and select it', () => {

        //ACT
        newCarAndUpdateUi(select_elem);

        expect(select_elem.selectedIndex).to.eql(0);
    });
    describe("Paint Functions", function(){
        it('should produce a div', () => {
            let result = addCar();
            let elem = document.getElementById(result);
            expect(elem.tagName).to.equal('DIV');
        });
        it("should increment carCount", () => {
            carCount = 7;
            addCar();
            expect(carCount).to.equal(8);
        });
        it("should return an id of c + a number", () => {
            expect(addCar()).to.equal('c9');
        });
        it("should get a random car", () => {
            let result2 = randomCarArtId();
            expect(result2).to.include('car');
        });
    });    
});

describe("Driving Tests", function(){
    let sandbox; //added
    let car;

    beforeEach(function() {
      // create a sandbox
      sandbox = sinon.createSandbox();

      // stub some console methods
      //sandbox.stub(window.console, "log");
      //sandbox.stub(window.console, "error");
        
        car = {};
            car.style = {};
            car.style.top = "";
            car.style.left = "";
            car.className = "";

        //mocing complex objects such as DOM
            //https://codeutopia.net/blog/2016/05/23/sinon-js-quick-tip-how-to-stubmock-complex-objects-such-as-dom-objects/

        //mocking document load
            //https://stackoverflow.com/questions/43083419/karma-mocha-how-to-test-method-that-listens-to-domcontentloaded-event/43474345
    });

    afterEach(function() {
      // restore the environment as it was before
      sandbox.restore();
    });
    describe("calling forward while facing east", function() {
        it("should move car from right to left", function() {

            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car east";

            //ACT
                forward(car);

            //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.style.top).to.equal('0px');
                expect(car.style.left).to.equal('10px');
        });
    });

    describe("calling forward while facing west", function() {
        it("should move car from left to right", function() {
            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car west";

            //ACT
                forward(car);

            //ASSERT
                expect(getDirection(car)).to.equal("WEST");
                expect(car.style.top).to.equal('0px');
                expect(car.style.left).to.equal('-10px');
        });
    });

    describe("calling forward while facing north", function() {
        it("should move car from bottom to top", function() {
            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car north";

            //ACT
                forward(car);

            //ASSERT
                expect(getDirection(car)).to.equal("NORTH");
                expect(car.style.top).to.equal('-10px');
                expect(car.style.left).to.equal('0px');
        });
    });

    describe("calling forward while facing south", function() {
        it("should move car from top to bottom", function() {
            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car south";

            //ACT
                forward(car);

            //ASSERT
                expect(getDirection(car)).to.equal("SOUTH");
                expect(car.style.top).to.equal('10px');
                expect(car.style.left).to.equal('0px');
        });
    });

    describe("calling reverse while facing north", function() {
        it("should move car from top to bottom", function() {
            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car north";

            //ACT
                reverse(car);

            //ASSERT
                expect(getDirection(car)).to.equal("NORTH");
                expect(car.style.top).to.equal('10px');
                expect(car.style.left).to.equal('0px');
        });
    });

    describe("calling reverse while facing south", function() {
        it("should move car from top to bottom", function() {
            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car south";

            //ACT
                reverse(car);

            //ASSERT
                expect(getDirection(car)).to.equal("SOUTH");
                expect(car.style.top).to.equal('-10px');
                expect(car.style.left).to.equal('0px');
        });
    });

    describe("calling reverse while facing east", function() {
        it("should move car from top to bottom", function() {
            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car east";

            //ACT
                reverse(car);

            //ASSERT
                expect(getDirection(car)).to.equal("EAST");
                expect(car.style.top).to.equal('0px');
                expect(car.style.left).to.equal('-10px');
        });
    });

    describe("calling reverse while facing west", function() {
        it("should move car from top to bottom", function() {
            //SETUP
                car.style.top = "0px";
                car.style.left = "0px";
                car.className = "car west";

            //ACT
                reverse(car);

            //ASSERT
                expect(getDirection(car)).to.equal("WEST");
                expect(car.style.top).to.equal('0px');
                expect(car.style.left).to.equal('10px');
        });
    });
    
    describe("move it forward, north", function(){
        it("should decrement top", function(){
            car.style.top = "0px";
            car.style.left = "0px";
            cmd = FORWARD;
            direction = NORTH;

            moveIt(car, direction, cmd);

            expect(car.style.top).to.equal('-10px');
        });
    });
    describe("move it forward, south", function(){
        it("should increment top", function(){
            car.style.top = "0px";
            car.style.left = "0px";
            cmd = FORWARD;
            direction = SOUTH;

            moveIt(car, direction, cmd);

            expect(car.style.top).to.equal('10px');
        });
    });
    describe("move it forward, east", function(){
        it("should increment left", function(){
            car.style.top = "0px";
            car.style.left = "0px";
            cmd = FORWARD;
            direction = EAST;

            moveIt(car, direction, cmd);

            expect(car.style.left).to.equal('10px');
        });
    });
    describe("move it forward, west", function(){
        it("should decrement left", function(){
            car.style.top = "0px";
            car.style.left = "0px";
            cmd = FORWARD;
            direction = WEST;

            moveIt(car, direction, cmd);

            expect(car.style.left).to.equal('-10px');
        });
    });

    describe("move it reverse, facing north", function(){
        it("should increment top", function(){
            car.style.top = "0px";
            car.style.left = "0px";
            cmd = REVERSE;
            direction = NORTH;

            moveIt(car, direction, cmd);

            expect(car.style.top).to.equal('10px');
        });
    });
    describe("move it reverse, facing south", function(){
        it("should decrement top", function(){
            car.style.top = "0px";
            car.style.left = "0px";
            cmd = REVERSE;
            direction = SOUTH;

            moveIt(car, direction, cmd);

            expect(car.style.top).to.equal('-10px');
        });
    });
    describe("move it reverse, facing east", function(){
        it("should decrement left", function(){
            car.style.top = "0px";
            car.style.left = "0px";
            cmd = REVERSE;
            direction = EAST;

            moveIt(car, direction, cmd);

            expect(car.style.left).to.equal('-10px');
        });
    });
    describe("move it reverse, facing west", function(){
        it("should increment left", function(){
            car.style.top = "0px";
            car.style.left = "0px";
            cmd = REVERSE;
            direction = WEST;

            moveIt(car, direction, cmd);

            expect(car.style.left).to.equal('10px');
        });
    });
    // describe('turn it from north, right', function(){
    //     it('should change classes', function(){
    //         car.style.top = "0px";
    //         car.style.left = "0px";
    //         car.className = "car north";
    //         direction = NORTH;
    //         cmd = RIGHT;

    //         console.log(car);

    //         turnIt(car, direction, cmd);

    //         console.log(car.className);
    //         expect(car.className).to.include('car');
    //         expect(car.className).to.include('east');
    //         expect(car.className).to.notInclude('north');
    //     });
    // });
    // describe('turn right, from facing north', function(){
    //     it('should', function(){
    //         car.style.top = "0px";
    //         car.style.left = "0px";
    //         car.className = "car north";

    //     //ACT
    //         turnRight(car);

    //     //ASSERT
    //         expect(getDirection(car)).to.equal("NORTH");
    //         expect(car.className).to.equal('east');
    //     });
    // });
    describe('get direction, north', function(){
        it('should return the direction string in all caps', function(){
            car.className = "car north";
            let result = getDirection(car);
            expect(result).to.equal('NORTH');
        });
    });
    describe('get direction, south', function(){
        it('should return the direction string in all caps', function(){
            car.className = "car south";
            let result = getDirection(car);
            expect(result).to.equal('SOUTH');
        });
    });
    describe('get direction, east', function(){
        it('should return the direction string in all caps', function(){
            car.className = "car east";
            let result = getDirection(car);
            expect(result).to.equal('EAST');
        });
    });
    describe('get direction, west', function(){
        it('should return the direction string in all caps', function(){
            car.className = "car west";
            let result = getDirection(car);
            expect(result).to.equal('WEST');
        });
    });
});







    // let sandbox;
    // let car;
    // beforeEach(function(){
    //     sandbox = sinon.sandbox.create();
    //     car = {};
    //     car.style = {};
    //     car.style.top = "";
    //     car.style.left = "";
    //     car.className = "";
    // });

    // afterEach(function() {
    //     sandbox.restore();
    // });