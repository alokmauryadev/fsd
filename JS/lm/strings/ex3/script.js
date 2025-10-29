function createUrlSlug(title){
    return title.trim().toLowerCase().split(' ').join('-')
}

console.log(createUrlSlug("  My Favorite JavaScript Tips  "))
