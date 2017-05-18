import MockActivities from '../constants/MockActivities';
import Storage from '../constants/Storage';
import ModelGenerator from './ModelGenerator';

const DataStorage = {
    getActivities: () => {
        let storage = window.localStorage;
        let activities = JSON.parse(storage.getItem(Storage.activities));
        if (!activities) {
            activities = MockActivities;
            storage.setItem(Storage.activities, JSON.stringify(activities));
        }

        return activities;
    },

    addActivity: (title, host, description, images, limitation, location, time, guests) => {
        let activities = DataStorage.getActivities();
        activities.push(ModelGenerator.generateActivity(title, host, description, images, limitation, location, time, guests));
        window.localStorage.setItem(Storage.activities, JSON.stringify(activities));
    }
};

export default DataStorage;