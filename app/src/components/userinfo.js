

export const userinfo = () =>{
    const userinfoString = localStorage.getItem('userinfo');
     if (userinfoString) {
           const userinfo = JSON.parse(userinfoString);
           return userinfo;
 }
}