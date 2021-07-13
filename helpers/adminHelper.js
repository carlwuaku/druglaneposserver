/**
 * public $table_name = "users";
    public $fields = array("id", "role_id", "email", "type", "picture","phone",
        "position", "qualification", "display_name","username","active","company_id");
 */
const dbClass = require('./database');
const bcrypt = require('bcryptjs');
const log = require('electron-log');
class AdminHelper extends dbClass {

    constructor() {
        super();
    }
    fields = ["id", "role_id", "email",  "phone",
          "display_name", "username",
        "active",  "password_hash", "created_on"]
    table_name = "users";
    roles_table = "roles";
    permissions_table = "permissions";
    role_permissions_table = "role_permissions";
    sessions_table = "user_sessions";
    not_string_fields = ["id", "role_id"];//the fields which are not strings. used in prep_data
    branches_table_name = "branches";
    insurers_table_name = "insurance_providers";
    prep_data(data) {
        return super.prep_data(data, this.fields, this.not_string_fields)
    }



    /**
     * attempt to log a registered user in
     * @param {string} username 
     * @param {string} password 
     */
    async login(username, password) {
        let found = false;
        try {
            await this.getConnection();
            //use placeholders for the variables
            let sql_getusername = `select * from ${this.table_name} where lower(email) = lower($username) or lower(username) =lower($username)`;
            let query_getuser = await this.connection.get(sql_getusername, { $username: username });
            if (query_getuser !== undefined) {
                //someone was found. check the password
                found = bcrypt.compareSync(password, query_getuser.password_hash);// true/false

                
            }
            else {
                found = false;
            }

            //close connection
            // this.connection.close().then(success => { console.log('db closed') }, error => { })

            if (found) {
                
                return query_getuser;
            }
            else {
                return false;
            }

        } catch (error) {
            log.error(error)
            console.log(error)
            // this.connection.close().then(val => {
            //     console.log('db closed')
            // })
            throw new Error(error)
        }

    }


    /**
     * return all users in the users table with role name
     * @param {string} conditions 
     * 
     * @returns array. Empty if error, array of objects otherwise
     */
    async getUsers(conditions = ""){
        let sql = `select ${this.table_name}.*, roles.role_name from ${this.table_name} `;

        
         
         sql += ` join ${this.roles_table} on ${this.table_name}.role_id  = ${this.roles_table}.role_id `
         if(conditions != ''){
            sql += ` where ${conditions} `;
        }  
        try {
            await this.getConnection();
            let query = await this.connection.all(sql);
        
        return query;//an array of objects
        } catch (error) {
            log.error(error);
            return [];
        }
    }

    /**
     * get a single user by id
     * @param {string} userid
     * @returns Object|false 
     */
    async getUser(userid){
        let sql = `select ${this.table_name}.*, ${this.roles_table}.role_name from ${this.table_name} `;

      
         
         sql += ` join ${this.roles_table} on ${this.table_name}.role_id  = ${this.roles_table}.role_id where id = ${userid}`
        try {
            await this.getConnection();
            let query = await this.connection.get(sql);
            
        return query;//an object
        } catch (error) {
            log.error(error);
            return false;
        }
    }

    /**
     * get a single user name by id
     * @param {string} userid
     * @returns {String}
     */
    async getUserName(userid){
        let sql = `select ${this.table_name}.*, ${this.roles_table}.role_name from ${this.table_name} `;

      
         
         sql += ` join ${this.roles_table} on ${this.table_name}.role_id  = ${this.roles_table}.role_id where id = ${userid}`
        try {
            await this.getConnection();
            let query = await this.connection.get(sql);
            
        return query == undefined ? 'n/a': query.display_name;//
        } catch (error) {
            log.error(error);
            return 'n/a';
        }
    }


    /**
     * return all user roles
     * 
     * 
     * @returns array. Empty if error, array of objects otherwise
     */
    async getRoles(){
        let sql = `select *  from ${this.roles_table} `;

         try {
            await this.getConnection();
            let query = await this.connection.all(sql);
        
        return query;//an array of objects
        } catch (error) {
            log.error(error);
            return [];
        }
    }

    /**
     * return all user roles
     * @param {string} id
     * 
     * @returns false||object
     */
    async getRole(id){
        let sql = `select *  from ${this.roles_table} where role_id = ${id}`;

         try {
            await this.getConnection();
            let query = await this.connection.get(sql);
        
        return query;//an  objects
        } catch (error) {
            log.error(error);
            return false;
        }
    }

    /**
     * return all the permissions given to user roles
     * @param {string} id
     * 
     * @returns array
     */
    async getRolePermissions(id, return_type=''){
        let sql = `select ${this.role_permissions_table}.*, ${this.permissions_table}.name 
          from ${this.role_permissions_table} join ${this.permissions_table} on 
          ${this.role_permissions_table}.permission_id = ${this.permissions_table}.permission_id where role_id = ${id}`;
         try {
            await this.getConnection();
            let query = await this.connection.all(sql);
            
        if(return_type == 'strings'){
            let res = []
            query.forEach(element => {
                res.push(element.name)
            });
            // console.log('query',res)
            return res;
        }
                    return query;//an array objects
        } catch (error) {
            log.error(error);
            throw new Error(error)
        }
    }

    /**
     * return all permissions
     * 
     * 
     * @returns array. Empty if error, array of objects otherwise
     */
    async getPermissions(){
        let sql = `select *  from ${this.permissions_table} `;

         try {
            await this.getConnection();
            let query = await this.connection.all(sql);
        
        return query;//an array of objects
        } catch (error) {
            log.error(error);
            return [];
        }
    }

//     /**
//      * return all the permissions given to user roles
//      * @param {string} id
//      * 
//      * @returns false||object
//      */
//     async getRolePermissions(id){
//         let sql = `select ${this.role_permissions_table}.*, ${this.permissions_table}.name 
//           from ${this.role_permissions_table} join ${this.permissions_table} on 
//           ${this.role_permissions_table}.permission_id = ${this.permissions_table}.permission_id where role_id = ${id}`;
//             console.log(sql)
//          try {
//             await this.getConnection();
//             let query = await this.connection.all(sql);
        
//         return query;//an  objects
//         } catch (error) {
//             log.error(error);
//             return [];
//         }
//     }
    

 }

module.exports = AdminHelper
