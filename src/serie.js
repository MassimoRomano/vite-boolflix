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

const searchSeries = async (searchQuery) => {
  try {
    const response = await axiosInstance.get('search/tv', {
      params: {
        query: searchQuery,
      },
    });

    if (response.data.results.length === 0) {
      return { series: [], errorMessage: 'Nessuna serie TV trovata.' };
    } else {
      return {
        series: response.data.results.map(series => ({
          ...series,
          language: series.original_language,
          flag: getCountryFlagUrl(series.original_language),
        })), errorMessage: ''
      };
    }
  } catch (error) {
    console.error('Si è verificato un errore durante la ricerca delle serie TV:', error);
    return { series: [], errorMessage: 'Si è verificato un errore durante la ricerca delle serie TV. Si prega di riprovare più tardi.' };
  }
};

export { searchSeries };