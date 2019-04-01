class Driver{
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear();
  }
}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
   let eastWest = [
    '1st Avenue','2nd Avenue','3rd Avenue',
    'Lexington Avenue','Park','Madison Avenue',
    '5th Avenue'
  ];

  let horizontal = (eastWest.indexOf(this.endingLocation.horizontal) + 1) - (eastWest.indexOf(this.beginningLocation.horizontal) + 1);
  let vertical = this.endingLocation.vertical - this.beginningLocation.vertical;

    return horizontal + vertical;

  }

  estimatedTime(){

  }
}
