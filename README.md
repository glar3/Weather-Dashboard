# Weather Dashboard App

This is a straightforward weather dashboard application enabling users to effortlessly check current weather conditions for any desired location. The app seamlessly fetches weather data from WeatherAPI and presents it in a user-friendly interface.

## Features

- **Current Weather Display**: The app showcases the current temperature, weather condition, humidity, wind speed, and precipitation for the selected location.
- **Location Selection**: Users have the option to choose from preset locations like Durban, Mossel Bay, London, and Hillcrest or search for a custom location via the search feature. Additionally, an upcoming feature will empower users to manage their predefined locations, including adding, deleting, and editing them as per their preferences.
- **API Key Integration**: Users can conveniently input their WeatherAPI key to access weather data.
- **Responsive Design**: The dashboard is designed to adapt responsively, ensuring an optimal viewing experience across various devices.

## Usage

1. **Input API Key**: Upon launching the app, users should enter their legally obtained API key from [WeatherAPI](https://www.weatherapi.com/) into the provided input field, which appears upon clicking on the text **"Weather Dashboard"**.

2. **Select Location**: Users can either click on one of the preset locations (Durban, Mossel Bay, London, Hillcrest) or utilize the search bar to specify a custom location.

3. **View Weather Details**: Once a location is selected, the app promptly displays comprehensive weather details, encompassing temperature, weather condition, humidity, wind speed, and precipitation.

4. **Toggle Themes**: The app offers two themes - warm and cold, automatically set based on the temperature of the selected location.

5. **Navigate**: Users can seamlessly switch between the main dashboard and the location selection/search screen using the navigation arrows, which are exclusively prompted on smaller screens.

6. **Usability**: Users entering their API key will have it conveniently saved to local storage, streamlining the usage of the weather app.

## Instructions for Developers

- **API Integration**: Developers are required to acquire a valid WeatherAPI key and integrate it into the `secretApiText` input field.
- **Customization**: Developers have the flexibility to personalize the app's appearance and functionality by modifying the HTML, CSS, and JavaScript files.
- **Localization**: While the app presently supports a selection of predefined locations, developers can expand this list by adding additional options in the HTML file and handling the corresponding events in the JavaScript file.

## Credits

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Icons provided by [Font Awesome](https://fontawesome.com/)
