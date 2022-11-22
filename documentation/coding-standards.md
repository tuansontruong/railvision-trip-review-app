[Back to README.md](../README.md#coding-standards)

### Naming conventions

Name variables in `camelCase` format.

This:

```JavaScript
const totalDuration = ...; // correct
```

Over this:

```JavaScript
const total_duration = ...; // do not use underscore naming in JS/TS
```

(more..)

### String Literals > String Concatenation

Prefer this:

```JavaScript
const signature = `${tripId} | ${startStationId} - ${endStationId}`; // JS-like syntax
```

Over this:

```JavaScript
const signature = tripId + " | " + startStationId + " - " + endStationId; // not ideal
```

### Prefer Lookup Table over If-Else's

Prefer this:

```JavaScript
const actionMap = {
  LONGEST_DURATION: findLongestDurationTrip,
  SHORTEST_DURATION: findShortestDurationTrip,
  HIGHEST_SPEED: findHighestSpeedTrip,
  LOWEST_SPEED: findLowestSpeedTrip,
  MOST_STOPS: findMostStopsTrip,
  LEAST_STOPS: findLeastStopsTrip
}

actionMap[filter](tripReviewData)
```

Over this:

```JavaScript
if(filter === 'LONGEST_DURATION') {
    findLongestDurationTrip(tripReviewData)
} else if(filter === 'SHORTEST_DURATION') {
    findShortestDurationTrip(tripReviewData)
} else if(filter === 'HIGHEST_SPEED') {
    findHighestSpeedTrip(tripReviewData)
}
//...
```

### Avoid abusing nested ternary operators

This should be avoided:

```JavaScript
const data = condition1 ?
            condition2:
            condition3?
            condition4:
            condition5:
            condition6?
            condition7
```

This is completely unreadable

### Early aborts

This should be avoided:

```JavaScript
if(condition1){
    if(condition2){
        if(condition3){
            // do stuff
        }
    }
}
```

Instead, abort all the bad cases first:

```JavaScript
if(!condition1) return
if(!condition2) return
if(!condition3) return
// do stuff
```

### Constants variables (usually global variables) should be capitalized and underscored

```JavaScript
const TRIP_DATA = // ideal

const tripData = // not ideal
```

### Use code formatter (prettier)

Prettier for consistent formattng

### Use code linter (eslint)

Eslint to highlight potential errors in code

### (and more...)
