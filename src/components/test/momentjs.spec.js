import moment from 'moment';
var assert = require('assert');
 
describe('Array', function() {
    
const RealDate = Date;
const startdate1 = '2020-12-18T18:00:00-06:00';
const startdate2 = '2020-12-18T00:00:00.000Z';
const startdateOriginal = '2020-12-18';
beforeEach(() => {

  global.Date.now = jest.fn(() => new Date('2019-04-22T10:20:30Z').getTime());
});

afterEach(() => {
  global.Date = RealDate;
});

   
describe('moment test 2020-12-18T18:00:00-06:00', function() {
    it('should show a formatted date of today 2020-12-18', async () => {
        const FormatOriginalDate = moment(startdateOriginal).format('DD/MM/YYYY');
        const StartDateFormatted = moment(startdate1).format('DD/MM/YYYY'); 
       let day = new Date()
       /*RECEIVED / EXPECTED*/
      assert.equal(FormatOriginalDate, StartDateFormatted );
    })
  });

  describe('moment test 2020-12-18T18:00:00-06:00', function() {
    it('should show a formatted date of today 2020-12-18 00:00', async () => {
        const FormatOriginalDate = moment('2020-12-18').format('MM/DD/YYYY hh:mm:ss a');
        const StartDateFormatted = moment('2020-12-18T00:00:00-06:00').format('MM/DD/YYYY hh:mm:ss a'); 
       let day = new Date()
       /*RECEIVED / EXPECTED*/
      assert.equal(FormatOriginalDate, StartDateFormatted );
    })
  });


     
describe('moment test 2020-12-18T00:00:00.000Z', function() {
  it('should show a formatted date of today 2020-12-18', async () => {
      const FormatOriginalDate = moment(startdateOriginal).format('DD/MM/YYYY');
      const StartDateFormatted = moment(startdate2).utc().format('DD/MM/YYYY'); 
     let day = new Date()
     /*RECEIVED / EXPECTED*/
    assert.equal(FormatOriginalDate, StartDateFormatted );
  })
});

});