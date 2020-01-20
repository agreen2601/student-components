const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const h1 = (text) => {
    return `<h1>${text}</h1>`
};
const section = (word) => {
    return `<section>${word}</section>`
};
const aside = (words) => {
    return `<aside>${words}</aside>`
}

const createStudentComponent = (students) => {
    if (students.score < 60) {
        return `
        <div class="student failing">
            ${h1(students.name)}
            ${section(students.subject)}
            ${aside(students.info)}
        </div>`;
    } else {
        return `
        <div class="student">
            ${h1(students.name)}
            ${section(students.subject)}
            ${aside(students.info)}
        </div>`;
    }
}

const studentContainer = document.querySelector("#container")

for (let i = 0; i < students.length; i++) {
    studentContainer.innerHTML += createStudentComponent(students[i]);
}