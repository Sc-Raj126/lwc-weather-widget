import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const API_KEY = 'test_api_key'; // Replace with actual API key

export default class WeatherWidget extends LightningElement {
    @track city = '';
    @track temperature = '';
    @track description = '';
    @track humidity = '';
    @track windSpeed = '';
    @track isLoading = false;
    @track hasError = false;
    
    handleCityChange(event) {
        this.city = event.target.value;
    }
    
    handleSearch() {
        if (!this.city) {
            this.showToast('Error', 'Please enter a city name', 'error');
            return;
        }
        
        this.isLoading = true;
        this.hasError = false;
        
        // Simulate API call
        this.fetchWeatherData();
    }
    
    fetchWeatherData() {
        // Mock weather data
        setTimeout(() => {
            this.temperature = '25°C';
            this.description = 'Partly Cloudy';
            this.humidity = '60%';
            this.windSpeed = '10 km/h';
            this.isLoading = false;
        }, 500);
    }
    
    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
}
