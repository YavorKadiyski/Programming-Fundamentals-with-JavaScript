function foreignLanguages(countryName) {

    switch (countryName) {
        case 'England':
        case 'USA':
            console.log('English');
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log('Spanish');
            break;
        default:
            console.log('unknown');
            break;
    }
}
foreignLanguages('Mico');


//English is spoken in England and USA;
//Spanish is spoken in Spain, Argentina, and Mexico;
//For the others, we should print "unknown";
