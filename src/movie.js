import axios from 'axios';

const API_KEY = '87df133806d4898c7bc9860692a34426';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
    language: 'it_IT'
  }
});

const getCountryFlagUrl = (language) => {
  const languageCodeMap = {
    'en': 'US', 
    'it': 'IT', 
    'fr': 'FR', 
    'de': 'DE', 
    'es': 'ES', 
    'ja': 'JP',

  };

  const countryCode = languageCodeMap[language] || 'unknown';
  return `/public/image/${countryCode}.gif`;
};

const searchMovies = async (searchQuery) => {
  try {
    const response = await axiosInstance.get('search/movie', {
      params: {
        query: searchQuery,
        include_adult: false
      },
    });

    if (response.data.results.length === 0) {
      return { movies: [], errorMessage: 'Nessun film trovato.' };
    } else {
      return {
        movies: response.data.results.map(movie => ({
          ...movie,
          language: movie.original_language,
          flag: getCountryFlagUrl(movie.original_language),
        })), errorMessage: ''
      };
    }
  } catch (error) {
    console.error('Si è verificato un errore durante la ricerca dei film:', error);
    return { movies: [], errorMessage: 'Si è verificato un errore durante la ricerca dei film. Si prega di riprovare più tardi.' };
  }
};

export { searchMovies };