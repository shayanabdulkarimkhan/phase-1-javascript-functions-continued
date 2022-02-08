// code your solution here

function saturdayFun(activity = `roller-skate`) {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(flair = `*`) {
    const part1 = `You are`;

    return function qualityPerson(adjective = `specials`) {
        return `${part1} ${flair}${adjective}${flair}!`;
    }

}
