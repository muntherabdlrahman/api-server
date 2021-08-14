'use strict';

const collection = require('../src/models/lip/collection');
describe('collection ', ()=> {
    it('constructor()', ()=> {
        let item = 'hello munther';
        let customer = new collection(item);
        expect(customer.data).toEqual(item);
        
    }) 
})