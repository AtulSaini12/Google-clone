//API-KEY = AIzaSyDOeWsoW01egTjqTgy7hZShWX6IFM9Jobo

var search = document.getElementById('search');
var form = document.querySelector('.form-search');
var btn = document.getElementById('search-btn');

function searchFun(){
        window.location = 'https://www.google.com/search?q=' + search.value;
        search.value = '';
        return false;
}

form.onsubmit = ()=> {
    window.location = 'https://www.google.com/search?q=' + search.value;
    search.value = '';
    return false;
};

btn.addEventListener('click', searchFun);
