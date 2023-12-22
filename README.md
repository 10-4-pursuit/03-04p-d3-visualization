# D3 Data Visualization Project

## Objective
The objective of this project is to create a web application that allows users to visualize data from their own JSON files using D3.js, a powerful tool for creating complex data visualizations. This project will teach you how to read user-supplied files, manipulate data, and render engaging and interactive visualizations. The bonus component will introduce you to using localStorage to track and revisit previously uploaded data.

## Getting Started

1. **Fork the Repository**: Click the 'Fork' button at the top right of this page to create a copy of this repository in your GitHub account.
2. **Clone Your Forked Repository**: Clone the repository to your local machine using the `git clone` command with your repository's URL.
3. **Navigate to Your Project Folder**: Change your directory to the folder where you cloned the repo.
4. **Install Dependencies**: Run `npm install` to install the necessary dependencies for the project, including D3.js.

## Exercise Instructions

### Set Up the Environment
- Ensure you have D3.js installed in your project by running `npm install d3`.
- Set up a basic HTML structure with an area to display the visualization and a file input element where users can upload their JSON files. Learn more about the `<input type="file">` element [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).

### Creating the File Reader
- Implement a file reader using the HTML input element of type `file`. This should allow users to browse and select a local JSON file from their filesystem.
- Once a file is selected, use the FileReader API to read the file's contents. You can find more information about the FileReader API [here](https://developer.mozilla.org/en-US/docs/Web/API/FileReader).

### Defining the JSON Structure
The application expects a specific structure for the JSON data uploaded by the user. Please format your JSON files according to the structure defined in the `sample.json` file located in the `data` directory.

Refer to the sample file here: [Sample JSON Structure](data/sample.json)

Ensure your JSON follows this structure to ensure compatibility with the visualization application.

### Implementing D3 Visualization
- Once the file is read, parse the JSON and use D3.js to map the data to a visual representation. You might start with simple visualizations like bar charts or pie charts.
- Provide options for different types of visualizations so users can choose how to view their data.
- You can find documentation and tutorials for D3.js [here](https://d3js.org/).

### Using localStorage for History
**Bonus Component**: Implement functionality to save the history of uploaded files' data into localStorage. 
- Every time a user uploads a file, save its data with a unique identifier in localStorage.
- Provide a way for users to see a list of their past uploads and select one to view the saved visualization quickly.
- Learn more about using localStorage in your applications [here](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Styling
- Apply CSS or a styling library of your choice to style the application, making the interface user-friendly and the visualizations appealing.

## Testing
- Write tests to ensure your application correctly reads files, parses data, and renders visualizations.

## Expected Features of the Completed Project
- **File Upload**: Users should be able to upload a JSON file from their filesystem.
- **Data Visualization**: The application should correctly parse the JSON and render a visualization using D3.js.
- **User Interactivity**: Users should be able to interact with the visualization (e.g., hovering to see data values).
- **Responsive Design**: The application should be well-styled and responsive, providing a good user experience on different devices.
- **Error Handling**: The application should handle errors gracefully, such as informing the user when an uploaded file is not in the expected JSON format.

## Bonus Features
- **Visualization History with localStorage**: Implement localStorage to save and quickly revisit previous visualizations.

## ChatGPT Assistance Prompts
If you encounter any challenges, consider asking ChatGPT the following questions to guide your development process:
- "How do I use D3.js to create a bar chart with data from a JSON file?"
- "What are some best practices for reading files using the FileReader API in a web application?"
- "How can I use localStorage to save user data in my web application?"
- "I'm having trouble with [specific issue], what are some potential solutions?"

## Submission Guidelines
- **Commit Regularly**: Make sure to commit your changes regularly to your forked repository.
- **Push Your Changes**: Once you're satisfied with your project, push your changes to your GitHub repository.
- **Open a Pull Request**: Create a pull request from your forked repository to the original assignment repository with a title and brief description of your implementation and any challenges you faced.

This project offers an opportunity to explore the intersection of data handling and visualization, enhancing your skills in creating user-driven data experiences. Good luck!

## Editor's Note

This one's a bit harder.

Data visualization is one of the biggest things that companies want from a front end developer. After all, most businesses run on collecting data and metrics about how they're doing, and the human element isn't great at making connections by staring at numbers (for the most part). That's why we have data visualization, to put raw data into context for analysts and decision makers.

D3 is one of the most popular libraries out there for data visualization. It's got a bit of a learning curve, but if you've got any plans to work in fin-tech (financial tech), you'll want to learn how to use D3. I'm gonna admit right now, I'm not the best with this library, but if you've got any questions on it, I'm more than happy to help troubleshoot bugs with you. Otherwise, as always, AI tools remain your best friend. Prompt whatever you use for suggestions on how to approach the problem, and grill it if there are things that seem off to you.