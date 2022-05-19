const KEY = 'data';
const fallbackState = {};

export const loadState = () =>{
    try{
        return JSON.parse(localStorage.getItem(KEY)) ?? fallbackState;
    }catch(err){
        console.log('Data fetching failed')
    }
}

export const saveState = (data) =>{
    try{
        return localStorage.setItem(KEY, JSON.stringify(data));
    }catch(err){
        console.log('Data fetching failed')
    }
}