import axios from 'axios';
import config from './apiconfig.json';

export function getPredictions(imageUrl: string) {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['Prediction-Key'] = config.CustomVisionAPI.Key;
    return axios.post(config.CustomVisionAPI.Url, JSON.stringify({imageUrl}));
}

export interface Prediction {
    probability: number;
    tagId: string;
    tagName: string;
}

export interface PredictionsResponse {
    id: string;
    iteration: string;
    created: Date;
    predictions: Prediction[];
}
