export const environment = {
    urlService: '',
  };
  
if (window.location.hostname.includes('localhost') || window.location.hostname.includes('homologacion')) {
  environment.urlService = 'https://localhost:7276/api/';
} else if (window.location.hostname.includes('sigemytrc.com')) {
  environment.urlService = 'https://localhost:7276/api/';
}
    