import StorageAccess from './StorageAccess';

let DataStorage = {

    MemoryData: null,
    
    getActivities: () => {
        if (!DataStorage.MemoryData) {
            DataStorage.MemoryData = StorageAccess.loadActivities();
        }

        return DataStorage.MemoryData;
    }, 

    addActivity: (activity) => {
        let data = DataStorage.getActivities();
        data.push(activity);
        DataStorage.saveActivities();
    },

    saveActivities: () => {
        StorageAccess.saveActivities(DataStorage.getActivities());
    }
};

export default DataStorage;