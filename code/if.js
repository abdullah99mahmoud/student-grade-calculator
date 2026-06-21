var grade = prompt("Enter your grade:");

if (grade >= 50) {
    if (grade >= 65) {
        if (grade >= 75) {
            if (grade >= 85) {
                if (grade >= 95) {
                    console.log("Your grade is A+");
                } else {
                    console.log("Your grade is A");
                }
            } else {
                console.log("Your grade is B");
            }
        } else {
            console.log("Your grade is C");
        }
    } else {
        console.log("Your grade is D");
    }
} else {
    console.log("Your grade is F");
}