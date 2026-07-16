var categorieCountries = {};
for (var u of data) {
    if (!categorieCountries[u.city]) {
        categorieCountries[u.city] = [];
    }
    categorieCountries[u.city].push(u);
}
console.log(categorieCountries);