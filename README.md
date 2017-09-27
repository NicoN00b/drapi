# The Doctor Connection

#### A quick search for doctors in Portland, 9.26.17

#### By Nico.N00b

## Description

This is a simple API call and response to find Doctors in the Portland Area by Name or Speciality

![A Screen Shot of an example search for Cancer Doctors](/img/Screen.png "Oncology")

## Setup/Installation Requirements

* Fork and clone the Repo from Github
* In the project directory, run:
  * npm install (this should take about 45 seconds to a minute)
  * Next run:
  * bower install (his should be very quick)
  * Now that these are added, you should be able to run:
  * gulp build  
  * If there are any errors, the terminal should direct you to missing dependencies.
* You will need to register for your own Api Key at developer.betterdoctor.com
  * Once you have your key, create a .env file in the top directory and add this code:
  * exports.apiKey = "your3key0here3032"
  * Don't forget to put .env in your .gitignore
* run gulp build
* and then run gulp serve

You are now ready to use the program.

## Known Bugs

It is possible that you may receive a 429 error ( Too many requests from the API), but it shouldn't happen too often.  The other issue is that the fields in the form do not reset, but it doesn't affect the results list.  

## Support and contact details

Any suggestions are welcome... nicholas.raethke@gmail.com

## Technologies Used

This program relies on JQuery to connect to the Better Doctor API.  It also uses a long list of node and bower dependencies. that can be viewed in the package.json file.  I created the project in Atom with a lot of help from JSHint.  A special shout out to CSS-Tricks, I just learned about this incredible resource.

### License

Copyright (c)2017 Creative Commons. Open Source. Do what thou wilt.
Except for the Better Doctor API... please visit their address to learn about restrictions and usage.
