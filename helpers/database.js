var sqlite3 = require('sqlite-async')// require('sqlite3').verbose()
var md5 = require('md5')

const path = require('path')
const constants = require('../constants')
const log = require('electron-log');
const FileStore = require('../Store');
const filestore = new FileStore({
    configName: 'system-settings',
    defaults: constants.default_config
});
const moment = require('moment')
const Sequelize = require('sequelize')
const Umzug = require('umzug')

// creates a basic sqlite database
const sequelize = require("./sequelize")



class Db {
    connection;



    prep_data(data, fields, not_string_fields) {
        var returner = {};

        for (var i = 0; i < fields.length; i++) {
            var key = fields[i];
            if (data[key] != undefined) {
                //its not a string
                if (not_string_fields.indexOf(key) !== -1) {
                    returner[key] = data[key];
                }
                else {
                    //its a string
                    if(data[key] != 'null'){
                        returner[key] = `"${data[key]}"`;
                    }
                    

                }

            }

        }

        return returner;
    }

    getToday(type = '', date = '') {
        var today = new Date();
        if (date != '') {
            today = new Date(date);
        }

        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        var dd_string
        if (dd < 10) {
            dd_string = '0' + dd;
        }
        else {
            dd_string = dd.toString()
        }



        var mm_string
        if (mm < 10) {
            mm_string = '0' + mm;
        }
        else {
            mm_string = mm.toString()
        }

        switch (type) {
            case "timestamp":
                var hrs = today.getHours();
                var mins = today.getMinutes();
                var secs = today.getSeconds();
                return yyyy + '-' + mm_string + '-' + dd_string + ' ' + hrs + ':' + mins + ':' + secs;

            case "timestamp_string":
                var hrs = today.getHours();
                var mins = today.getMinutes();
                var secs = today.getSeconds();
                return yyyy + '' + mm_string + '' + dd_string + '' + hrs + '' + mins + '' + secs;

            case "month":
                return mm_string;
            default:
                return yyyy + '-' + mm_string + '-' + dd_string;
        }



        // mm_string+'/'+dd_string+'/'+yyyy;
    }

    padZero(m){
        let str= m.toString();
        return str.padStart(2,"0");
        
    }

    getMonthName(m) {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[m - 1];
    }

    getDayName(d) {
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return days[d]
    }

    getMonths() {
        return ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ]
    }

    getDays() {
        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }



    nth(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    getDatesBetween(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'))
            currentDate = moment(currentDate).add(1, 'days');
        }
        return dateArray;
    }

    getMonthsObjects() {
        var months = []
        months.push({ id: "01", name: 'January' });
        months.push({ id: "02", name: 'February' });
        months.push({ id: "03", name: 'March' });
        months.push({ id: "04", name: 'April' });
        months.push({ id: "05", name: 'May' });
        months.push({ id: "06", name: 'June' });
        months.push({ id: "07", name: 'July' });
        months.push({ id: "08", name: 'August' });
        months.push({ id: "09", name: 'September' });
        months.push({ id: "10", name: 'October' });
        months.push({ id: "11", name: 'November' });
        months.push({ id: "12", name: 'December' });

        return months;
    }

    getMonthEndDate(month) {
        switch (month) {
            case "02":
                return 28

            case "09":
            case "04":
            case "06":
            case "11":
                return 30;

            default:
                return 31;
        }
    }


    //remove the 0's from the month ids
    getMonthsNoPad() {
        var months = []
        months.push({ id: "1", name: 'January' });
        months.push({ id: "2", name: 'February' });
        months.push({ id: "3", name: 'March' });
        months.push({ id: "4", name: 'April' });
        months.push({ id: "5", name: 'May' });
        months.push({ id: "6", name: 'June' });
        months.push({ id: "7", name: 'July' });
        months.push({ id: "8", name: 'August' });
        months.push({ id: "9", name: 'September' });
        months.push({ id: "10", name: 'October' });
        months.push({ id: "11", name: 'November' });
        months.push({ id: "12", name: 'December' });

        return months;
    }

    getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    getLastDayOfMonth(month) {
        var thirty_days = [9, 4, 6, 11];
        if (month == 2) {

            return 28;
        }
        else if (thirty_days.indexOf(month) != -1) {
            return 30;
        }
        else {
            return 31;
        }
    }




    getThisYear() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();

        return yyyy;
    }

    //get the date of the first day of a given week.

    getFirstDayOfWeek(weekNum, year) {
        var sunday = new Date(year, 0, (1 + (weekNum - 1) * 7));
        while (sunday.getDay() !== 0) {
            sunday.setDate(sunday.getDate() - 1);
        }
        return sunday;
    }

    dateDifference(date1, date2 = '') {
        var d1 = Date.parse(date1);
        var d2 = Date.now();
        if (date2 != '') {
            d2 = Date.parse(date2);
        }

        if (d1 < d2) {
            return 'before';
        }
        else if (d1 > d2) {
            return 'after'
        }
        else {
            return 'same'
        }
    }

    // sort an array of objects by a specified key. default order is asc (1)
    sortObjects(objects, key, order = 1) {
        return objects.sort((leftSide, rightSide) => {
            if (leftSide[key] < rightSide[key]) return -1 * order;
            if (leftSide[key] > rightSide[key]) return 1 * order;
            return 0;
        });
    }

    formatDate(today, type = '') {

        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!

        var yyyy = today.getFullYear();
        var dd_string
        if (dd < 10) {
            dd_string = '0' + dd;
        }
        else {
            dd_string = dd.toString()
        }



        var mm_string
        if (mm < 10) {
            mm_string = '0' + mm;
        }
        else {
            mm_string = mm.toString()
        }

        if (type == "timestamp") {
            var hrs = today.getHours();
            var mins = today.getMinutes();
            var secs = today.getSeconds();
            return yyyy + '-' + mm_string + '-' + dd_string + ' ' + hrs + ':' + mins + ':' + secs;
        }

        //put it all together like a code
        if (type == "timestamp_string") {
            var hrs = today.getHours();
            var mins = today.getMinutes();
            var secs = today.getSeconds();
            return yyyy + '' + mm_string + '' + dd_string + '' + hrs + '' + mins + '' + secs;
        }
        return yyyy + '-' + mm_string + '-' + dd_string;
    }

    getYesterday(date){
        let start_date = this.formatDate(new Date(date));
      return  this.formatDate(this.addDaystoDate(-1, start_date));
    }

    addDaystoDate(days, date) {
        var dat = new Date(date);
        dat.setDate(dat.getDate() + days);
        return dat;
      }

      getWeekNumber(date) {
        let myMoment = moment(date);
        return myMoment.week()
      }

    /**
     *   get the start and end dates
     * @param {String} quick_option 
     * @returns {Object} {start_date, end_date}
     */
    setDates(quick_option) {
    var this_week_number = this.getWeekNumber(this.getToday());
    var this_year = this.getThisYear();
    var last_year = this_year - 1;
    var this_month = this.getToday("month");
    var last_month = this_month == "1" ? 12 : parseInt(this_month) - 1;
    var next_month = this_month == "12" ? 1 : parseInt(this_month) + 1;
    var start_date;
    var end_date;
    switch (quick_option) {
      case "all":
        start_date = this.formatDate(new Date("2015-" + "01-01"));
        end_date = this.getToday();
        break;
      case "today":
        start_date = this.getToday();
        end_date = this.getToday();
        break;
      case "yesterday":
        start_date = this.formatDate(this.addDaystoDate(-1, this.getToday()));
        end_date = this.formatDate(this.addDaystoDate(-1, this.getToday()));
        break;
      case "this_week":
        start_date = this.formatDate(this.getFirstDayOfWeek(this_week_number, this_year));
        end_date = this.formatDate(this.addDaystoDate(6, start_date));
        break;
      case "last_week":
        start_date = this.formatDate(this.getFirstDayOfWeek(this_week_number - 1, this_year));
        end_date = this.formatDate(this.addDaystoDate(6, start_date));
        break;
        case "next_week":
        start_date = this.formatDate(this.getFirstDayOfWeek(this_week_number + 1, this_year));
        end_date = this.formatDate(this.addDaystoDate(6, start_date));
        break;
      case "this_month":
        var last_day = this.getLastDayOfMonth(this_month);
        start_date = this.formatDate(new Date(this_year + "-" + this_month + "-01"));
        end_date = this.formatDate(new Date(this_year + "-" + this_month + "-" + last_day));
        break;
      case "last_month":
        var last_day = this.getLastDayOfMonth(last_month);
        start_date = this.formatDate(new Date(last_month == 12 ? last_year : this_year + "-" + last_month + "-01"));
        end_date = this.formatDate(new Date(last_month == 12 ? last_year : this_year + "-" + last_month + "-" + last_day));
        break;
        case "next_month":
        var last_day = this.getLastDayOfMonth(next_month);
        var year = this_month == "12" ? this_year +1 : this_year
        start_date = this.formatDate(new Date(year + "-" + next_month + "-01"));
        end_date = this.formatDate(new Date(year + "-" + next_month + "-" + last_day));
        break;
      case "first_quarter":
        start_date = this.formatDate(new Date(this_year + "-" + "01-01"));
        end_date = this.formatDate(new Date(this_year + "-" + "03-31"));
        break;
      case "second_quarter":
        start_date = this.formatDate(new Date(this_year + "-" + "04-01"));
        end_date = this.formatDate(new Date(this_year + "-" + "06-30"));
        break;
      case "third_quarter":
        start_date = this.formatDate(new Date(this_year + "-" + "07-01"));
        end_date = this.formatDate(new Date(this_year + "-" + "09-30"));
        break;
      case "last_quarter":
        start_date = this.formatDate(new Date(this_year + "-" + "10-01"));
        end_date = this.formatDate(new Date(this_year + "-" + "12-31"));
        break;
      case "this_year":
        start_date = this.formatDate(new Date(this_year + "-" + "01-01"));
        end_date = this.formatDate(new Date(this_year + "-" + "12-31"));
        break;
      case "last_year":
        start_date = this.formatDate(new Date(last_year + "-" + "01-01"));
        end_date = this.formatDate(new Date(last_year + "-" + "12-31"));
        break;
      case "today":
      default:

        start_date = this.getToday();
        end_date = this.getToday();
        break;
    }

    return { "start_date": start_date, "end_date": end_date };

        // var this_week_number = this.getWeekNumber(this.getToday());
        // var this_year = this.getThisYear();
        // var last_year = this_year - 1;
        // var this_month = this.getToday("month");
        // var last_month = parseInt(this_month) - 1;
        // var next_month = parseInt(this_month) + 1;
        // var start_date;
        // var end_date;
        // switch (quick_option) {
        //     case "all":
        //         start_date = this.formatDate(new Date("1900-" + "01-01"));
        //         end_date = this.getToday();
        //         break;
        //     case "today":
        //         start_date = this.getToday();
        //         end_date = this.getToday();
        //         break;
        //     case "yesterday":
        //         start_date = this.formatDate(this.addDaystoDate(-1, this.getToday()));
        //         end_date = this.formatDate(this.addDaystoDate(-1, this.getToday()));
        //         break;
        //     case "this_week":
        //         start_date = this.formatDate(this.getFirstDayOfWeek(this_week_number, this_year));
        //         end_date = this.formatDate(this.addDaystoDate(6, start_date));
        //         break;
        //     case "last_week":
        //         start_date = this.formatDate(this.getFirstDayOfWeek(this_week_number - 1, this_year));
        //         end_date = this.formatDate(this.addDaystoDate(6, start_date));
        //         break;
        //     case "next_week":
        //         start_date = this.formatDate(this.getFirstDayOfWeek(this_week_number + 1, this_year));
        //         end_date = this.formatDate(this.addDaystoDate(6, start_date));
        //         break;
        //     case "this_month":
        //         var last_day = this.getLastDayOfMonth(this_month);
        //         start_date = this.formatDate(new Date(this_year + "-" + this_month + "-01"));
        //         end_date = this.formatDate(new Date(this_year + "-" + this_month + "-" + last_day));
        //         break;
        //     case "last_month":
        //         var last_day = this.getLastDayOfMonth(last_month);
        //         start_date = this.formatDate(new Date(this_year + "-" + last_month + "-01"));
        //         end_date = this.formatDate(new Date(this_year + "-" + last_month + "-" + last_day));
        //         break;
        //     case "next_month":
        //         var last_day = this.getLastDayOfMonth(next_month);
        //         start_date = this.formatDate(new Date(this_year + "-" + next_month + "-01"));
        //         end_date = this.formatDate(new Date(this_year + "-" + next_month + "-" + last_day));
        //         break;
        //     case "first_quarter":
        //         start_date = this.formatDate(new Date(this_year + "-" + "01-01"));
        //         end_date = this.formatDate(new Date(this_year + "-" + "03-31"));
        //         break;
        //     case "second_quarter":
        //         start_date = this.formatDate(new Date(this_year + "-" + "04-01"));
        //         end_date = this.formatDate(new Date(this_year + "-" + "06-30"));
        //         break;
        //     case "third_quarter":
        //         start_date = this.formatDate(new Date(this_year + "-" + "07-01"));
        //         end_date = this.formatDate(new Date(this_year + "-" + "09-30"));
        //         break;
        //     case "last_quarter":
        //         start_date = this.formatDate(new Date(this_year + "-" + "10-01"));
        //         end_date = this.formatDate(new Date(this_year + "-" + "12-31"));
        //         break;
        //     case "this_year":
        //         start_date = this.formatDate(new Date(this_year + "-" + "01-01"));
        //         end_date = this.formatDate(new Date(this_year + "-" + "12-31"));
        //         break;
        //     case "last_year":
        //         start_date = this.formatDate(new Date(last_year + "-" + "01-01"));
        //         end_date = this.formatDate(new Date(last_year + "-" + "12-31"));
        //         break;
        //     case "today":
        //     default:

        //         start_date = this.getToday();
        //         end_date = this.getToday();
        //         break;
        // }

        // return { "start_date": start_date, "end_date": end_date };

    }

    addMonthsToDate(m){
        return this.formatDate(new Date(
            new Date().getFullYear(),
            new Date().getMonth() + m, 
            new Date().getDate())
        );
    }

    async getConnection() {
        //path to save to. the remote.app comes in if we call the api from render
        // const userDataPath = constants.settings_location;
        const dbpath = constants.db_path;
        // log.error(dbpath)
        try {
            if (this.connection == null) {
                this.connection = await sqlite3.open(dbpath);
                this.connection.exec("PRAGMA foreign_keys=ON");
                // log.error('connected to db')
            }

            else {
                // console.log('already connected')
            }

        } catch (error) {
            log.error(error)
            console.error(error)
        }
    }

    /**
     * insert a row into the database table
     * @param {Object} data 
     * @param {String} table 
     * @returns {Number} the last id
     */
    async insert(data, table) {
        //data is expected as an object with the keys being column names
        let cols = [];
        let vals = [];
        for (let key in data) {
            cols.push(key);
            vals.push(`${data[key]}`);
        }
        let query = `insert into ${table} (${cols.join(',')}) values (${vals.join(',')})`;

        try {
            await this.getConnection();
            let res = await this.connection.run(query);


            return res.lastID;
        } catch (err) {
            // console.log(query)
            // log.error(err);
            log.error(query);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)

        }

    }
    /**
    * generate the sql query for insert
    * @param {Object} data 
    * @param {String} table 
    * @returns {String} the query
    */
    generateInsertQuery(data, table) {
        //data is expected as an object with the keys being column names
        let cols = [];
        let vals = [];
        for (let key in data) {
            cols.push(key);
            vals.push(`${data[key]}`);
        }
        let query = `insert into ${table} (${cols.join(',')}) values (${vals.join(',')});`;
        return query;

    }

    async closeConnection() {
        try {
            await this.connection.close().then(succ => { this.connection = null; }, err => { })
            await this.getConnection();
        } catch (error) {
            log.error(error)
        }

    }

    async delete(condition, table) {

        let query = `delete from ${table} where ${condition}`;
        try {
            await this.getConnection();
            let res = await this.connection.run(query);


            //this.connection.close().then(succ => { }, err => { })

        } catch (err) {
            log.error(query);
            console.log(query)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }

    }


    generateDeleteQuery(condition, table) {

       
        try {
            let query = `delete from ${table} where ${condition};`;
        return query;

        } catch (err) {
            
            throw new Error(err)
        }
    }


    async insertMany(fields, data, table) {
        //data is expected as array of objects with the keys being column names
        let vals = [];

        //get data
        data.map(d => {
            let values = [];
            for (var i = 0; i < fields.length; i++) {
                values.push(d[fields[i]])
            }
            vals.push(`(${values.join(',')})`)
        })
        let query = `insert into ${table} (${fields.join(',')}) values ${vals.join(',')}`;
        // console.log(query)
        try {
            await this.getConnection();
            await this.connection.run(query);
            //this.connection.close().then(succ => { }, err => { })
            return true;
        } catch (err) {
            log.error(query);
            // console.log(query)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }

    }

    /**
     * generate the sql insert string using provided objects and fields
     * @param {Array} fields 
     * @param {Array} data 
     * @param {String} table 
     * @returns {String} the query
     */
    generateInsertManyQuery(fields, data, table) {
        //data is expected as array of objects with the keys being column names
        let vals = [];

        //get data
        data.map(d => {
            let values = [];
            for (var i = 0; i < fields.length; i++) {
                values.push(d[fields[i]])
            }
            vals.push(`(${values.join(',')})`)
        })
        let query = `insert into ${table} (${fields.join(',')}) values ${vals.join(',')};`;
        return query;
    } 

    /**
     * Update a field or fields in a table based on the conditions
     * @param {Object} data 
     * @param {string} conditions 
     * @param {string} table
     * @returns boolean 
     */
    async update(data, conditions, table) {
        //data is expected as an objects with the keys being column names
        let vals = [];
        for (let key in data) {
            vals.push(`${key} = ${data[key]}`);
        }
        let query = `update  ${table} set ${vals.join(',')} where ${conditions}  `;
        // log.error(query)
        try {
            await this.getConnection();
            let res = await this.connection.run(query);
            //this.connection.close().then(succ => { }, err => { })
            return true;

        } catch (err) {
            log.error(query);
            // console.log(err)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }

    }

    /**
     * Update a field or fields in a table based on the conditions
     * @param {Object} data 
     * @param {string} conditions 
     * @param {string} table
     * @returns {String} the query 
     */
    generateUpdateQuery(data, conditions, table) {
        let vals = [];
        for (let key in data) {
            vals.push(`${key} = ${data[key]}`);
        }
        let query = `update  ${table} set ${vals.join(',')} where ${conditions};  `;
        return query;
    }

    /**
     * Update a field or fields in a table based on the conditions
     * @param {String} field
     * @param {String} value
     * @param {string} conditions 
     * @param {string} table
     * @returns boolean 
     */
    async updateField(field, value, conditions, table) {

        let query = `update  ${table} set ${field} = ${value} where ${conditions}  `;
        // log.error(query)
        try {
            await this.getConnection();
            let res = await this.connection.run(query);
            //this.connection.close().then(succ => { }, err => { })
            return true;

        } catch (err) {
            console.log(query)
            log.error(query);
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }

    } 

    /**
    * generate the sql query to update a field or fields in a table based on the conditions
    * @param {String} field
    * @param {String} value
    * @param {string} conditions 
    * @param {string} table
    * @returns {String} the query 
    */
    generateUpdateFieldQuery(field, value, conditions, table) {

        let query = `update  ${table} set ${field} = ${value} where ${conditions};  `;
        // log.error(query)
        return query;


    }

    /**
     * get a single row
     * @param {string} conditions 
     * @param {string} table 
     */
    async getItem(conditions, table) {

        //use placeholders for the variables
        let sql = `select * from ${table} where ${conditions}`;
        try {
            await this.getConnection();
            let query = await this.connection.get(sql);
            return query;//may be undefined or an object
        } catch (err) {
            log.error(sql);
            console.log(sql)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }

    }

    /**
     * 
     * @param {string} conditions 
     * @param {string} table 
     * @param {Number} limit 
     * @param {Number} offset
     * @returns {Array}
     */
    async getMany(conditions, table, limit = null, offset = 0) {
        //use placeholders for the variables
        let sql = `select * from ${table} where ${conditions}`;
        if (limit != null) {
            sql += ` limit ${limit} offset ${offset}`
        }
        try {
            await this.getConnection();
            let query = await this.connection.all(sql);

            return query;//an array of objects
        } catch (err) {
            log.error(sql);
            console.log(sql)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }

    }

    /**
     * 
      
     * @param {string} table 
     * @param {Number} limit 
     * @param {Number} offset
     * @returns {Array}
     */
    async getAll(table, limit = null, offset = 0) {
        //use placeholders for the variables
        let sql = `select * from ${table}`;
        if (limit != null) {
            sql += ` limit ${limit} offset ${offset}`
        }
        try {
            await this.getConnection();
            let query = await this.connection.all(sql);

            return query;//an array of objects
        } catch (err) {
            log.error(sql);
            console.log(sql)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }



    }

    /**
     * 
        @param {string} fields a comma-separated set of field names to be selected
     * @param {string} table the table name
     * @param {Number} limit 
     * @param {Number} offset
     * @returns {Array}
     */
    async getAllFields(fields,table, limit = null, offset = 0) {
        //use placeholders for the variables
        let sql = `select ${fields} from ${table}`;
        if (limit != null) {
            sql += ` limit ${limit} offset ${offset}`
        }
        try {
            await this.getConnection();
            let query = await this.connection.all(sql);

            return query;//an array of objects
        } catch (err) {
            log.error(sql);
            console.log(sql)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }

    }

    /**
     * get the number of rows returned by a condition
     * @param {string} conditions 
     * @param {string} table 
     */
    async countBy(conditions, table) {
        try {
            let q = await this.getMany(conditions, table);
            return q.length;
        } catch (error) {
            throw new Error(err)
        }


    }

    /**
     * get the number of rows returned by a condition
     * @param {String} field
     * @param {string} conditions 
     * @param {string} table 
     * @returns {Number} 
     */
    async count(field = 'id', table, conditions = '') {
        let sql = `select count(${field}) as total from ${table}`;
        if (conditions != '') {
            sql += ` where ${conditions} `
        }
        try {
            await this.getConnection();
            let query = await this.connection.get(sql);

            return query == undefined ? 0 : query.total;//a number
        } catch (err) {
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }




    }


    /**
     * get a list of distinct fields from a table
     * @param {string} field 
     * @param {string} table 
     * @returns {Array}
     */
    async getDistinct(field, table, conditions = '') {
        try {
            let sql = `select distinct ${field}  from ${table}`;
            if (conditions != '') {
                sql += ` where ${conditions} `
            }
            await this.getConnection();
            let query = await this.connection.all(sql);
            return query;//an array of objects
        } catch (error) {
            log.error(sql);
            console.log(sql)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }
    }


    /**
     * run a raw query on a table
     * @param {string} query 
     * @param {string} table 
     * @returns {Array}
     */
    async runQuery(sql) {
        try {
            
            await this.getConnection();
            let query = await this.connection.all(sql);
            return query;//an array of objects
        } catch (error) {
            log.error(sql);
            console.log(sql)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }
    }

    async getField(field, table, conditions = '') {
        //use placeholders for the variables
        let sql = `select ${field} from ${table} `;
        if (conditions != '') {
            sql += ` where ${conditions} `
        }
        try {
            await this.getConnection();
            let query = await this.connection.get(sql);
            return query;//may be undefined or an object
        } catch (err) {
            log.error(sql);
            console.log(sql)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }
    }

    async getManyFieldGroup(fields,conditions, group_by, table, limit = null, offset = 0) {
        //use placeholders for the variables
        let sql = `select ${fields} from ${table} where ${conditions}`;
        if (limit != null) {
            sql += ` limit ${limit} offset ${offset}`
        }
        sql += ` group by ${group_by} offset ${offset}`
        try {
            await this.getConnection();
            let query = await this.connection.all(sql);

            return query;//an array of objects
        } catch (err) {
            log.error(sql);
            console.log(sql)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }

    }

    /**
     * get the numbers of a certain value in the given field. uses group by
     * @param {String} field 
     * @param {String} table 
     * @param {String} conditions 
     */
    async getCountsByField(field, table, conditions = '') {
        //use placeholders for the variables
        let sql = `select ${field},  count(id) as count from ${table} `;
        if (conditions != '') {
            sql += ` where ${conditions} `
        }
        sql += ` group by ${field} `
        try {
            await this.getConnection();
            let query = await this.connection.all(sql);
            return query;//may be undefined or an object
        } catch (err) {
            log.error(sql);
            console.log(sql)
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }
    }
    

    async runMigrations() {
        await this.getConnection();
        //run the migrations

        let dbversion = filestore.get('dbversion');
        console.log("dbversion: " + dbversion);
        let has_error = false;
        for (var i = 0; i < constants.migrations.length; i++) {
            let curr = constants.migrations[i];
            let query = curr.query;
            let version = curr.version;
            //if its an empty query, just set the version and move on. some 
            //of these are intentional
            if (version > dbversion) {
                if (query.trim().length < 1) {
                    filestore.set('dbversion', version);
                }
                else {
                    try {
                        await this.connection.exec(query);
                        //successful
                        filestore.set('dbversion', version);
                    } catch (error) {
                        has_error = true;
                        log.error(`error at # ${version}`)
                        log.error(error)
                        console.log(`error at # ${version}` + error)
                        break;
                    }
                }
            }

        }

        if(!has_error){
            
///////////////RUN SEQUELIZE MIGRATIONS IF THERE WAS NO ERROR///////////



const umzug = new Umzug({
    migrations: {
        // indicates the folder containing the migration .js files
        path: path.join(__dirname, '../migrations'),
        // inject sequelize's QueryInterface in the migrations
        params: [
            sequelize.getQueryInterface()
        ]
    },
    // indicates that the migration data should be store in the database
    // itself through sequelize. The default configuration creates a table
    // named `SequelizeMeta`.
    storage: 'sequelize',
    storageOptions: {
        sequelize: sequelize
    }
})

    ; (async () => {
        // checks migrations and run them if they are not already applied
        try {
            await umzug.up()
            console.log('All migrations performed successfully')

        } catch (error) {
            console.log(error)
        }
    })()
        }

        //this.connection.close().then(succ => { }, err => { })
    }

    /**
     * search a table for a string
     * @param {string} param 
     * @param {Array} fields
     * @param {int} limit 
     * @param {int} offset 
     * @param {boolean} strpos a flag to order by the position of the parameter in the strpos_field
     * @param {String} strpos_field the field to use with the strpos
     * 
     */
    async search(param, fields, table, limit = null, offset = 0, strpos = false, strpos_field = null) {
        let words_array = param.split(",");
        let combined_where = [];
        let first_words = words_array[0].split(' ');
        let first_word = first_words[0];
        words_array.forEach(word => {
            let trim_word = word.trim();
            if (trim_word !== null && trim_word.length > 0) {
                let processed_word = "(";
                processed_word += this.processSearch(word, fields);
                processed_word += ")";
                combined_where.push(processed_word);
            }
        });

        let final_where = combined_where.join(" or ");

        let sql = `select * from ${table} where ${final_where} `;
        // console.log(sql)
        if(strpos){
            sql = `select *, INSTR(lower(${strpos_field}), lower("${first_word}")) as pos  from ${table} where ${final_where} `;
            sql += ` order by pos asc `

        }
        if (limit != null) {
            sql += ` limit ${limit} offset ${offset} `
        }
        // console.log(sql)
        try {
        await this.getConnection();
            let query = await this.connection.all(sql);

            return query;//an array of objects
        } catch (err) {
            log.error(err);
            //this.connection.close().then(succ => { }, err => { })
            throw new Error(err)
        }

    }

    /**
     * split a word in a searc param to generate the sql query
     * @param {string} word 
     * @param {Array} fields 
     * @returns string
     */
    processSearch(word, fields) {
        let split_param = word.split(" ");
        let where = [];

        var i = 0;
        while (i < split_param.length) {
            let word = split_param[i];
            let temp_where = "(";
            let inner_temp = [];
            var k = 0;
            while (k < fields.length) {
                inner_temp.push(`${fields[k]} like "%${word}%"`);
                k++;
            }
            temp_where += inner_temp.join(" or ");
            temp_where += ")";

            where.push(temp_where);
            i++;
        }

        let final_where = where.join(" and ");

        return final_where;
    }

    /**
     * Runs a sql transaction command based on the list of queries provided
     * @param {Array} queries 
     */
    async runTransaction(queries){
        let sql = "BEGIN TRANSACTION; ";
        queries.map(q => {
            sql += q;
        })
        sql += "COMMIT;"
        console.log(sql)
        await this.connection.exec(sql);
    }



    isEmpty(str){
        if(str == null || str == undefined){
          return true;
        }
        if(typeof(str) == "string"){
          if( str.trim() == "" || str.trim() == "undefined" || str.trim() == "null"){
            return true;
          }
        }
        
        return false;
      }

      


    //insert: data, table


    constructor() {
        //path to save to. the remote.app comes in if we call the api from render
        this.getConnection();


        // this.connection = new sqlite3.Database(dbpath, (err) => {
        //     if (err) {
        //       // Cannot open database
        //       console.error(err.message)
        //       throw err
        //     }else{
        //         log.error('Connected to the SQLite database.')
        //         //run the migrations
        //         let dbversion = filestore.get('dbversion');
        //         for(var i = 0; i < constants.migrations.length; i++){
        //             let curr = constants.migrations[i];
        //             let query = curr.query;
        //             let version = curr.version;
        //             //if its an empty query, just se the version and move on. some 
        //             //of these are intentional
        //             if(version > dbversion){
        //                 if(query.trim().length < 1){
        //                     filestore.set('dbversion', version);
        //                 }
        //             }
        //             else{
        //                 try {
        //                     this.connection.run(query,
        //                         (err) => {
        //                             if (err) {
        //                                 //error occurred. break;
        //                                 log.error(err);
        //                                 break;
        //                             }else{
        //                                //successful
        //                                filestore.set('dbversion', version);
        //                             }
        //                         });
        //                 } catch (error) {
        //                     log.error(error)
        //                     break;
        //                 }
        //             }
        //         }

        //         // this.connection.run(`CREATE TABLE user (
        //         //     id INTEGER PRIMARY KEY AUTOINCREMENT,
        //         //     name text, 
        //         //     email text UNIQUE, 
        //         //     password text, 
        //         //     CONSTRAINT email_unique UNIQUE (email)
        //         //     )`,
        //         // (err) => {
        //         //     if (err) {
        //         //         // Table already created
        //         //     }else{
        //         //         // Table just created, creating some rows
        //         //         var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
        //         //         this.connection.run(insert, ["admin","admin@example.com",md5("admin123456")])
        //         //         this.connection.run(insert, ["user","user@example.com",md5("user123456")])
        //         //     }
        //         // });  
        //     }
        // });
    }


}



module.exports = Db;


// const DBSOURCE = "db.sqlite"

// let db = new sqlite3.Database(DBSOURCE, (err) => {
//     if (err) {
//       // Cannot open database
//       console.error(err.message)
//       throw err
//     }else{
//         log.error('Connected to the SQLite database.')
//         db.run(`CREATE TABLE user (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name text, 
//             email text UNIQUE, 
//             password text, 
//             CONSTRAINT email_unique UNIQUE (email)
//             )`,
//         (err) => {
//             if (err) {
//                 // Table already created
//             }else{
//                 // Table just created, creating some rows
//                 var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
//                 db.run(insert, ["admin","admin@example.com",md5("admin123456")])
//                 db.run(insert, ["user","user@example.com",md5("user123456")])
//             }
//         });  
//     }
// });


// module.exports = db