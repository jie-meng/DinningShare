export default {
    generateMember: (name, gender, age, tel) => {
        return {
            "name": name,
            "gender": gender,
            "age": age,
            "tel": tel
        }
    },

    generateLocation: (province, city, street, house, room) => {
        return {
            "province": province,
            "city": city,
            "street": street,
            "house": house,
            "room": room
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