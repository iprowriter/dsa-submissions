class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        //For each car, we create an array of that car's position and speed.
        const cars = position.map((pos, i)=>[pos, speed[i]]);
        //We sort cars in descending order to process cars according to their distance to the target
        cars.sort((a,b) =>b[0] - a[0]);

        //We create fleet array to track number of fleets and return it as our output (solution);
        let fleets = 0;

        //We track the time of fleets ahead of each car
        let arrivalTimeOfCarAhead = 0;

        //We use for of loop since we dont care about their indexes anymore
        for(let [pos, spd] of cars){

            //obtain time of arrival
            const time = (target - pos) /spd

            if(time > arrivalTimeOfCarAhead) {
                fleets++;
                arrivalTimeOfCarAhead = time;
            }
        }
        return fleets;

        //my solution below did not solve all the test cases, only some test cases
        //we want to know the exact time each car arrived at the target
        //cars that arrived at the exact time are on the same fleet
        //Hints: all cars are traveling to target that is for example 10 miles away. 
        //A car with bigger position(in miles) is ahead and others are behind because it has traveled the most miles to the target
        //for each car, if it has the same exact number, we push it to an array.
        //We use the same
        // const fleetMap = new Map();

        // for (let i = 0; i<position.length; i++){
        //      let p = position[i];
        //      let s = speed[i]; 
        //      const time = (target - p) / s;
        //      const timeString = `'${time}'`
             
    
        //         if(fleetMap.has(timeString)) {
        //           fleetMap.get(timeString).push(time)
        //         } else {
        //             fleetMap.set(timeString, [time])
        //         }
        // };
        // console.log("fleetMap: ", fleetMap)
        // return fleetMap.size
    } 
}
