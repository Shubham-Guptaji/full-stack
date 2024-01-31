function agesfn(ages) {

    console.log('Sorted Array', ages.sort((a, b) => a - b));
    console.log(`Min age : ${ages[0]} and Max age : ${ages[ages.length - 1]}`)

    let median_age = 0;
    if (ages.length % 2 == 0) {
        median_age = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2
    } else {
        median_age = ages[Math.floor(ages.length / 2)]
    }
    console.log(median_age)

    let Average = ages.reduce((a, b) => a + b, 0) / ages.length;
    console.log('Average age : ', Average);

    console.log('Range of the age is : ', (ages[ages.length - 1] - ages[0]));

    console.log('Is comparison same : ', Math.abs(ages[0] - Average) === Math.abs(ages[ages.length - 1] - Average));
}

agesfn([19, 22, 19, 24, 20, 25, 26, 24, 25, 24])