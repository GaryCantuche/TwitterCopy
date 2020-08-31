import User from './../models/user';
import {imageController} from './../Controllers/image.controller';

export async function addUserPropertiesToFleet(fleets) {
    const parsedFleets = JSON.parse(JSON.stringify(fleets));
    const data = Promise.all(await parsedFleets.map(async (fleet) => {
        return addPropertiesToFleet(fleet)
    }));

    return data;
}

export async function addUserPropertiesToUserFleet(fleets,profileImagePath){
    const data = await fleets.map(item => {
        const parsedData = JSON.parse(JSON.stringify(item));
        parsedData.profileImage = profileImagePath;
        return parsedData;
    });
    
    return data;
}

async function addPropertiesToFleet(fleet){
    const user = await User.findOne({username:fleet.username});
        if(user){
            fleet.verified = user.verified;
            fleet.profileImage = imageController(user.profileImagePath);
            return fleet;
        }
}