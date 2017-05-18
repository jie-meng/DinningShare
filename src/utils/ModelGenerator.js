export default {
    generateMember: (name, gender, tel, avatar) => {
        return {
            "name": name,
            "gender": gender,
            "tel": tel,
            "avatar": avatar
        }
    },

    generateActivity: (title, host, description, images, limitation, location, time, guests) => {
        return {
            "title": title,
            "host": host, //Object: member
            "description": description,
            "images": images,
            "limitation": limitation,
            "location": location, //Object: location
            "time": time, //Object: time
            "guests": guests //Objects: member
        }
    }
};