# Plash-Paper
This is a simply website repo that will be used for the app Plash, I couldn't find some good slideshow with custom widgets and lower resource usage and came across Plash app, so decided to build my own website to use as wallpaper

Plash local website does not take JS in a different file, as long as JS is inside the HTML, it works properly


I have made it in layers so that it will be easy to add stuff in future if needed

First Layer(z-index: 0)
This is the background image layer, in this, I have added a singular div, made it's position fixed with full screen size

In js, we take the current date, convert it into a hash number(to make sure each date gets a unique value) and then use that value modulo wallpapers.length to always get a correct index based on the day

## Raindrops

I have created raindrops as objects and storing their values in an array so that I can animate them later
Each object will have x, y, spd, dx values
- x = Current x-axis position(during creating it's the starting one)
- y = Current y-axis position
- spd = random variable speed between a range
- dx = it's the angle for x axis, it's obtained by the formula ```spd * Math.tan((rainAngle + variation) * (Math.PI / 180))```
it basically means that I am using the raindrop's speed and a tan angle(converted to radian with some variation) to get the slope of the raindrop
