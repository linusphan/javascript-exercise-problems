// function processBands(data) {
//   return data.map(function (band) {
//     return {
//       name: band.name.replace(/[.]/g, '').toUpperCase(),
//       country: 'Canada',
//       active: band.active,
//     };
//   });
// }

var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// another solution
// bands.map(function (band) {
//   updateCountry(band);
//   capitalizeBandName(band);
//   removeDotsInBandName(band);

//   return band;
// });

// function updateCountry(band) {
//   band.country = 'Canada';
// }

// function capitalizeBandName(band) {
//   band.name = band.name.toUpperCase();
// }

// function removeDotsInBandName(band) {
//   band.name = band.name.replace(/[.]/g, '');
// }

// another solution
// function processBands(bands) {
//   return bands.map(function (band) {
//     updateCountry(band);
//     capitalizeBandName(band);
//     removeDotsInBandName(band);
//     return band;
//   });
// }

// function updateCountry(band) {
//   band.country = 'Canada';
// }

// function capitalizeBandName(band) {
//   band.name = band.name.split(' ').map(function (word) {
//     return capitalizeString(word);
//   }).join(' ');
// }

// function capitalizeString(string) {
//   var initial = string[0].toUpperCase();
//   var rest = string.slice(1, string.length);
//   return initial + rest;
// }

// function removeDotsInBandName(band) {
//   band.name = band.name.replace(/\./g, '');
// }

// Another solution
function processBands(bands) {
  return bands.map(function (band) {
    var capitalizedName = capitalizePhrase(band.name);
    var newBandName = removeDotsInString(capitalizedName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active,
    }
  });
}

function capitalizePhrase(phrase) {
  var capitalizedPhrase = phrase.split(' ').map(function (word) {
    return capitalizeString(word);
  }).join(' ');

  return capitalizedPhrase;
}

function capitalizeString(string) {
  var initial = string[0].toUpperCase();
  var rest = string.slice(1, string.length);
  return initial + rest;
}

function removeDotsInString(string) {
  return string.replace(/\./g, '');
}

// console.log(processBands(bands));
console.log(processBands(bands));
