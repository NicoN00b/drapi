import { hippo } from './../js/hippo.js';

describe('Hippo', function() {
  let landslide = hippo;

  beforeEach(function() {
    jasmine.clock().install();
    landslide.foodLevel = 10;
    landslide.name = "Landslide";
    landslide.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(landslide.name).toEqual("Landslide");
    expect(landslide.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(landslide.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    landslide.foodLevel = 0;
    expect(landslide.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(landslide.didYouGetEaten()).toEqual(true);
  });

  it('should return that the hippo ate the blueberries and the food level should go up 5', function() {
    expect(landslide.eatSmall("blueberries")).toEqual("The hippo ate the blueberries! Food level goes up 5!");
    expect(landslide.foodLevel).toEqual(15);
  });

  // it('should have a food level of ten if it is fed', function() {
  //   jasmine.clock().tick(9001);
  //   landslide.feed();
  //   expect(landslide.foodLevel).toEqual(10);
  // });
});
