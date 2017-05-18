import MockActivities from '../constants/MockActivities';
import Storage from '../constants/Storage';
import ModelGenerator from './ModelGenerator';

const StorageAccess = {
    loadActivities: () => {
        let storage = window.localStorage;
        let activities = JSON.parse(storage.getItem(Storage.activities));
        if (!activities) {
            activities = MockActivities;
            storage.setItem(Storage.activities, JSON.stringify(activities));
        }

        return activities;
    },

    saveActivities: (activities) => {
        window.localStorage.setItem(Storage.activities, JSON.stringify(activities));
    }
};

export default StorageAccess;