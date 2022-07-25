// import { srchPhotos, client_id, url } from './constants';
//
srchPhotos.onclick = function () {
  const query = document.querySelector('#search').value;
  const url = `https://api.unsplash.com/search/photos/?client_id=${client_id}&page=1&query=${query}`;
  fetch(url)
    .then(function (data) {
      console.log(data);
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      data.results.forEach(photo => {
        const result = `<li>
                    <img class="img-search box" alt = "' + photo.alt_description + '" src=" ' + photo.urls.raw +
                    '" alt="" />
                    <div class="photo-info">
                    <p> <svg width="20" viewBox="0 -28 512.00002 512" xmlns="http://www.w3.org/2000/svg"><path d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0" /></svg><span class="likes">' +
                    photo.likes +
                    '</span></p><p><span>' +
                    photo.user.first_name +
                    '</span> <span>' +
                    photo.user.last_name +
                    ' </span></p> <svg class="dwnld-ico" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 16c-.205 0-.401-.084-.542-.232l-5.25-5.5c-.455-.476-.117-1.268.542-1.268h2.75v-5.75c0-.689.561-1.25 1.25-1.25h2.5c.689 0 1.25.561 1.25 1.25v5.75h2.75c.659 0 .997.792.542 1.268l-5.25 5.5c-.141.148-.337.232-.542.232z"/><path d="m22.25 22h-20.5c-.965 0-1.75-.785-1.75-1.75v-.5c0-.965.785-1.75 1.75-1.75h20.5c.965 0 1.75.785 1.75 1.75v.5c0 .965-.785 1.75-1.75 1.75z"/></svg><a href="' +
                    photo.links.download +
                    '" target="_blank">Download</a></div></li>`;
        $('#result').append(result);
      });
    });
};
