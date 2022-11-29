const display = require("../view/display");
const dataManager = require("../model/dataManager");

const getAllStudents = () => {
    const students = dataManager.readData("data.json");
    display.printData(students, "Students Table:");
}

const hasChosen = () => {
    const userOption = display.getInput("Please enter a number: ");
    if (userOption === "1") {
        getAllStudents();
    } else if (userOption === "2") {
        display.printMessage("'Add student' not implemented yet.", true);
    } else if (userOption === "3") {
        display.printMessage("'Update student' not implemented yet.", true);
    } else if (userOption === "4") {
        display.printMessage("'Delete student' not implemented yet.", true);
    } else if (userOption === "0") {
        return false;
    } else {
        display.printMessage("There is no such option.", true);
    }
    return true;
}

const handleSubmenu = () => {
    const optionsArray = ["Exit submenu", "List students", "Add a new student", "Update student", "Delete student"];
    display.printMenu("Student Classes Submenu", optionsArray);
}

const submenu = () => {
    let isRunning = true;
    while (isRunning) {
        handleSubmenu();
        try {
            isRunning = hasChosen();
        } catch (error) {
            display.printMessage(error, true);
        }
    }
}

module.exports = {submenu};

const hasChosenStatistics = () => {
    const userOption = display.getInput("Please enter a number: ");
    if (userOption === "1") {
        numberOfStudents()
    } else if (userOption === "2") {
        numberOfSchoolClasses()
    } else if (userOption === "3") {
        display.printMessage("'Update student' not implemented yet.", true);
    } else if (userOption === "4") {
        display.printMessage("'Delete student' not implemented yet.", true);
    } else if (userOption === "0") {
        return false;
    } else {
        display.printMessage("There is no such option.", true);
    }
    return true;
}

const handleSubmenuStatistics = () => {
    const optionsArray = ["Exit submenu", "Display total number of students", "Display the number of school classes", "Show how many students are in each class", "Show the average of averages for each school class subject", "Present the general average for each student"];
    display.printMenu("Statistics Submenu", optionsArray);
}

const submenuStatistics = () => {
    let isRunning = true;
    while (isRunning) {
        handleSubmenuStatistics();
        try {
            isRunning = hasChosenStatistics();
        } catch (error) {
            display.printMessage(error, true);
        }
    }
}

module.exports = {submenuStatistics};