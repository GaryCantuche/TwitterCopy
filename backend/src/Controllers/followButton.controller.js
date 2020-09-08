import User from './../models/user';

export async function isFollowed(followedUser,loggedUser){
    const result = await User.findOne({username:loggedUser});
    const followed = result.followed.filter(item => {
        return item == followedUser
    });

    if(followed.length > 0) {
        return true;
    }else{
        return false;
    }
}
