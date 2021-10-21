import Cleave from 'cleave.js'

new Cleave('#phone', {
    phone: true,
    phoneRegionCode: 'BE'
});

new Cleave('#date', {
    date: true,
    datePattern: ['d', 'm', 'Y']
});