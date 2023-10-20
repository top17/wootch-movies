# Wootch Movies

Wootch Movies is a web application that allows you to browse a huge collection of movies fetched from an API. It offers a user-friendly interface with search functionality and pagination, making it easy to discover and explore your favorite movies.

## Installation

To get started with Wootch Movies, follow these steps:

1. Clone the repository to your local machine:
   git clone https://github.com/top17/wootch-movies.git

2. Change into the project directory:
   cd wootch-movies

3. Install the necessary dependencies using npm:
   npm install

4. Obtain the TMDB Movies API Key

   - Go to https://www.themoviedb.org/ and log in.
   - Click on your user profile picture in the navigation bar, and select "Settings".
   - In the settings, select "API" and generate an API key.

5. Create config file in src folder

   - Add BASE_URL = 'https://api.themoviedb.org/3'
   - Add you API_KEY = 'your_api_key'

6. To build the project and start the application, run:
   npm run dev
