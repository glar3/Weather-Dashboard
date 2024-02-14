# Weather Dashboard App

This is a simple weather dashboard application that allows users to check the current weather conditions for various locations. The app retrieves weather data from the WeatherAPI and displays it in a user-friendly interface.

## Features

- **Current Weather Display**: The app shows the current temperature, weather condition, humidity, wind speed, and precipitation for the selected location.
- **Location Selection**: Users can select predefined locations such as Durban, Mossel Bay, London, and Hillcrest or search for a custom location using the search feature.
- **API Key Integration**: Users can input their WeatherAPI key to access the weather data.
- **Responsive Design**: The dashboard is designed to be responsive, ensuring optimal viewing experience across different devices.

## Usage

1. **Input API Key**: Upon opening the app, users should use the API key they legally obtained from the [WeatherAPI](https://www.weatherapi.com/) by entering it into the input field which will appear once the user clicks the text **"Weather Dashboard"**.

2. **Select Location**: Users can either click on one of the predefined locations (Durban, Mossel Bay, London, Hillcrest) or use the search bar to enter a custom location.

3. **View Weather Details**: After selecting a location, the app displays the current weather details including temperature, weather condition, humidity, wind speed, and precipitation.

4. **Toggle Themes**: The app offers two themes - warm and cold. The theme is automatically set based on the temperature of the selected location.

5. **Navigate**: Users can navigate between the main dashboard and the location selection/search screen using the navigation arrows which are only prompted on small enough screens.

6. **Usability**: Users who enter there API key will have it saved to local storage which will allow the user a once off entering of their API key, this is to ensure the user has the best usage of the weather app

## Instructions for Developers

- **API Integration**: Developers need to obtain a valid WeatherAPI key and input it into the `secretApiText` input field.
- **Customization**: Developers can customize the app's appearance and functionality by modifying the HTML, CSS, and JavaScript files.
- **Localization**: The app currently supports a few predefined locations. Developers can expand the list of locations by adding more options in the HTML file and handling the corresponding events in the JavaScript file.

## Credits

- Weather data provided by [WeatherAPI](https://www.weatherapi.com/)
- Icons provided by [Font Awesome](https://fontawesome.com/)
