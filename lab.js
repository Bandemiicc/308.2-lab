// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.

const PI = 3.14
const radius = 5;
const area = PI * radius * radius;
const spacePerPlant = 0.8;
const maxPlants = (area / spacePerPlant);
initialPlants = 20

for (let week = 1; week <= 3; week++) {
  let plantCount = initialPlants; 
}
for (let p = 1; p <= week; p++) {
    plantCount = initialPlants * 2;
}

let capacity = (plantCount / maxPlants) * 100;

if (capacity < 80)
    console.log(`week ${week}: Pruned. (${plantCount} plants, ${capacity}% of capacity)`);
     else if (Capacity >= 50) 
    console.log(`week ${week}: Monitored. (${plantCount}plants, ${capacity}% of capacity)`);
else; {
    console.log(`week ${week}: Plant more. (${plantCount}plants,${capacity}% of capacity)`);
}

// part 2

for (let week = 1; week <= 10; week++) {
    let plantCount = initialPlants;
}
for (let p = 1; p <== week; p++) {
    plantCount = initialPlants *2
}

const tenWeekRadius = plantCount * spacePerPlant



