export function setSessionDataToLocalStorage(sessionData) {
    localStorage.setItem('sessionData',JSON.stringify(sessionData));
}

export function getSessionDataFromLocalStorage(){
    return JSON.parse(localStorage.getItem('sessionData'));
}

export function removeSessionDataFromLocalStorage(){
    window.localStorage.removeItem('sessionData');
}

export function getSessionCookie() {
  const match = document.cookie.match(new RegExp('(^| )user_sid=([^;]+)'));
  if (match) {
    return true;
  }
  else{
       return false;
  }
}

export function getCurrentUserID() {
  const user = JSON.parse(window.localStorage.getItem('sessionData'));
  if(user.userID){
    return user.userID
  }else{
    return false;
  }
}


export function getCurrentUserName() {
  const user = JSON.parse(window.localStorage.getItem('sessionData'));
  if(user.username){
    return user.username
  }else{
    return false;
  }
}

export function isAuthenticated(username){
    const user = JSON.parse(window.localStorage.getItem('sessionData'));
    if(username === user.username){
      console.log('hola');
      return true;
    }else{
      return false;
    }
}