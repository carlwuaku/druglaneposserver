
const PORT = process.env.PORT || 5000;
//exports.base_url = "http://localhost:"+PORT+"/";
exports.base_url = "https://revolfoods.herokuapp.com/";
exports.server_url = "http://localhost/stock/";
exports.customer_image_url = "assets/customer_images/";
exports.customer_image_thumbnail_url = "assets/customer_images/thumbnails/";

exports.product_image_url = "assets/product_images/";
exports.product_image_thumbnail_url = "assets/product_images/thumbnails/";
exports.port = PORT;
const electron = require('electron');
exports.settings_location = (electron.app || electron.remote.app).getPath('userData');
const path = require('path')
exports.settings_path =path.join( this.settings_location,'system-settings.json');
exports.db_path =path.join( this.settings_location,'druglane.db');
exports.backup_folder = path.join((electron.app || electron.remote.app).getPath('documents'), "druglaneBackups");
exports.settings_filename = 'system-settings.json';
exports.db_filename = 'druglane.db';
 
exports.default_config = {
  port: PORT,
  host: "localhost",
  dbversion: 0,
  admin_set: 'no',
  company_set: 'no'
}
 
//database migrations
const migrations = [
  {
    query: `CREATE TABLE IF NOT EXISTS  activities (
            activity_id integer  primary key autoincrement,
            user_id integer NOT NULL DEFAULT 0,
            activity text NOT NULL,
            module text NOT NULL,
            created_on text  DEFAULT CURRENT_TIMESTAMP,
            deleted integer NOT NULL DEFAULT 0
          );`,
    version: 1
  },
  {
    query: `CREATE TABLE IF NOT EXISTS  customers (
            id integer primary key autoincrement,
            first_name text NOT NULL,
            last_name text NOT NULL,
            sex text DEFAULT NULL,
            nationality text DEFAULT NULL,
            phone text NOT NULL,
            email text DEFAULT NULL,
            place_of_work text DEFAULT NULL,
            created_on text  DEFAULT CURRENT_TIMESTAMP,
            picture text DEFAULT NULL
          );`,
    version: 2
  },
  //
  {
    query: `CREATE TABLE IF NOT EXISTS  permissions (
            permission_id integer primary key autoincrement,
            name text NOT NULL,
            description text NOT NULL
          );`,
    version: 3
  },
  {
    query: `
        INSERT INTO permissions (permission_id, name, description) VALUES
(59, 'View Sales History', 'view sales invoices'),
(60, 'Return Sold Items', 'received items returned. This will alter stock levels'),
(61, 'Delete Sales Records', 'delete sales receipts. this erases the receipt from the database. it will affect stock levels and sales'),
(62, 'View Sales Reports', 'View the monthly/daily sales reports page '),
(63, 'View End Of Day Report', 'view the end of day sales summary'),
(64, 'Transfer Items', 'transfer products to another branch. this will affect stock levels'),
(65, 'Receive Transfers', 'receive items transferred from another branch. this will affect stock levels'),
(67, 'View Inventory', 'view the products list, expiries, and stock-out'),
(68, 'Manage Inventory', 'add a new product to the inventory/edit products, delete products'),
(72, 'Adjust Stock', 'adjust the stock of products or initiate stock-taking'),
(73, 'Receive Purchases', 'receive new purchases'),
(74, 'View Purchase History', 'view purchase history '),
(75, 'Create Sales', 'make sales'),
(76, 'Delete Purchases', 'delete purchases invoices. This will affect stock levels'),
(77, 'Manage Vendors', 'add/delete vendors'),
(78, 'View Transfer History', 'view outgoing/incoming transfer history'),
(79, 'Delete Transfers', 'delete transfer records. this will affect stock levels'),
(80, 'View User Activities', 'view all activities by user and time');`,
    version: 4
  },
  {
    query: `CREATE TABLE IF NOT EXISTS  products (
            id integer primary key autoincrement,
            name text NOT NULL,
            price real NOT NULL,
            category text NOT NULL DEFAULT 'Uncategorised',
            notes text DEFAULT NULL,
            unit text DEFAULT NULL,
            picture text DEFAULT NULL,
            created_on text  DEFAULT CURRENT_TIMESTAMP,
            max_stock real DEFAULT NULL,
            min_stock real NOT NULL DEFAULT 1,
            expiry text DEFAULT NULL,
            barcode text DEFAULT NULL,
            current_stock real DEFAULT NULL,
            last_modified text DEFAULT NULL,
            cost_price real default null,
            status integer NOT NULL DEFAULT 1
          );`,
    version: 5
  },
  {
    query: `CREATE UNIQUE INDEX product_name_unique 
      ON products(name);
      CREATE UNIQUE INDEX  product_barcode_unique ON products(barcode);
      CREATE  INDEX product_index  ON products(price, category, max_stock, min_stock, expiry,
         current_stock, last_modified, status);
      `,
    version: 6
  },

  {
    query: `CREATE TABLE IF NOT EXISTS  insurance_providers (
            id integer primary key autoincrement,
            name text NOT NULL);`,
    version: 7
  },
  {
    query: `CREATE UNIQUE INDEX insurance_providers_name_unique 
      ON insurance_providers(name);
      `,
    version: 8
  },

  {
    query: `CREATE TABLE IF NOT EXISTS vendors (
            id integer primary key autoincrement,
            name text NOT NULL,
            location text DEFAULT NULL,
            phone text NOT NULL,
            code text DEFAULT NULL,
            email text DEFAULT NULL,
            notes text DEFAULT NULL,
            created_on text default CURRENT_TIMESTAMP,
            legacy_id integer DEFAULT NULL
          );`,
    version: 9
  },
  {
    query: `CREATE UNIQUE INDEX vendors_unique_name
      ON vendors(name);
      `,
    version: 10
  },

  {
    query: `CREATE TABLE IF NOT EXISTS branches (
            id integer primary key autoincrement,
            name text NOT NULL,
            location text DEFAULT NULL,
            phone text NOT NULL,
            address text DEFAULT NULL,
            email text DEFAULT NULL,
            created_on text  DEFAULT CURRENT_TIMESTAMP
          );`,
    version: 11
  },
  {
    query: `CREATE UNIQUE INDEX branches_unique_name
      ON branches(name);
      `,
    version: 12
  },


  {
    query: `CREATE TABLE IF NOT EXISTS purchases (
            id INTEGER NOT NULL primary key autoincrement,
            vendor integer NOT NULL,
            date text NOT NULL,
            site text DEFAULT NULL,
            code text NOT NULL,
            status text DEFAULT NULL,
            created_on text default CURRENT_TIMESTAMP,
            created_by integer DEFAULT NULL,
            invoice text default NULL,
            payment_method text default null,
            amount_paid real default null,
            last_payment_date text default null,
            FOREIGN KEY (vendor) REFERENCES vendors (id) ON DELETE RESTRICT ON UPDATE CASCADE
          );`,
    version: 13
  },
  {
    query: `
      CREATE  INDEX purchases_index_1 ON purchases(vendor, date, created_on, invoice,
        
         payment_method, last_payment_date, status);
         CREATE UNIQUE INDEX purchases_index_2 ON purchases(code);
      `,
    version: 14
  },
  {
    query: `CREATE TABLE if not exists purchase_details (
            id integer primary key autoincrement,
            product integer NOT NULL,
            quantity real NOT NULL,
            price real NOT NULL,
            unit text NOT NULL,
            created_on text DEFAULT CURRENT_TIMESTAMP ,
            created_by integer NOT NULL,
            markup real NOT NULL,
            code varchar(50) NOT NULL,
            date text DEFAULT NULL,
            selling_price real not null,
            FOREIGN KEY (product) REFERENCES products (id) ON DELETE RESTRICT ON UPDATE CASCADE,
            foreign key (code) references purchases (code) ON DELETE CASCADE ON UPDATE CASCADE
          );`,
    version: 15
  },
  {
    query: `
      CREATE  INDEX purchase_details_index_1 ON purchase_details(created_on, 
        date);
         CREATE  INDEX purchase_details_index_2 ON purchase_details(code);
      `,
    version: 16
  },
  {
    query: `CREATE TABLE IF NOT EXISTS received_transfers (
            id INTEGER NOT NULL primary key autoincrement,
            
  date text NOT NULL,
  code text NOT NULL,
  invoice text not null,
  created_on text default CURRENT_TIMESTAMP ,
  created_by integer DEFAULT NULL,
  sender integer DEFAULT NULL,
  FOREIGN KEY (sender) REFERENCES branches (id) ON DELETE RESTRICT ON UPDATE CASCADE
          );`,
    version: 17
  },
  {
    query: `
      CREATE  INDEX received_transfers_index_1 ON received_transfers(created_on, 
        date);
         CREATE UNIQUE INDEX received_transfers_index_2 ON received_transfers(code);
      `,
    version: 18
  },
  {
    query: `CREATE TABLE received_transfer_details (
            id integer primary key autoincrement,
            product integer NOT NULL,
            quantity real NOT NULL,
            price real NOT NULL,
            created_on text default CURRENT_TIMESTAMP,
            created_by integer NOT NULL,
            code text NOT NULL,
            date text DEFAULT NULL,
            expiry text DEFAULT NULL,
            cost_price real NOT NULL,
            foreign key (product) references products (id) ON DELETE RESTRICT ON UPDATE CASCADE,
            foreign key (code) references received_transfers (code) ON DELETE CASCADE ON UPDATE CASCADE
          );`,
    version: 19
  },
  {
    query: `
      CREATE  INDEX received_transfer_details_index_1 ON received_transfer_details(created_on, 
        date);
         CREATE  INDEX received_transfer_details_index_2 ON received_transfer_details(code);
      `,
    version: 20
  },
  {
    query: `CREATE TABLE roles (
            role_id integer primary key autoincrement,
            role_name text NOT NULL,
            description text DEFAULT NULL
          );`,
    version: 21
  },
  {
    query: `CREATE TABLE role_permissions (
            id integer primary key autoincrement,
            role_id integer not null,
            permission_id integer NOT NULL,
            foreign key (role_id) references roles (role_id) ON DELETE CASCADE ON UPDATE CASCADE,
            foreign key (permission_id) references permissions (permission_id) 
            ON DELETE CASCADE ON UPDATE CASCADE

          );`,
    version: 22
  },
  {
    query: `CREATE TABLE sales (
            id integer primary key autoincrement,
            customer integer DEFAULT NULL,
            code text NOT NULL,
            created_by integer NOT NULL,
            created_on text default CURRENT_TIMESTAMP,
            date text NOT NULL,
            amount_paid real NOT NULL DEFAULT 0,
            payment_method text NOT NULL DEFAULT 'Cash',
            momo_reference text DEFAULT NULL,
            insurance_provider text DEFAULT NULL,
            insurance_member_name text DEFAULT NULL,
            insurance_member_id text DEFAULT NULL,
            creditor_name text DEFAULT NULL,
            credit_paid integer NOT NULL DEFAULT 0,
            discount real NOT NULL DEFAULT 0,
            foreign key (insurance_provider) references insurance_providers (name) ON DELETE RESTRICT ON UPDATE CASCADE
          
          );`,
    version: 23
  },
  {
    query: `
      CREATE  INDEX sales_index_1 ON sales(created_on, 
        date, payment_method, insurance_member_id, insurance_member_name);
         CREATE UNIQUE INDEX sales_index_2 ON sales(code);
      `,
    version: 24
  },
  {
    query: `CREATE TABLE sales_details (
            id integer primary key autoincrement,
            date text NOT NULL,
            product integer NOT NULL,
            price real NOT NULL,
            quantity real NOT NULL,
            created_on text default CURRENT_TIMESTAMP,
            code text NOT NULL,
            cost_price real DEFAULT NULL,
            foreign key (code) references sales (code) ON DELETE CASCADE ON UPDATE CASCADE
            foreign key (product) references products (id) ON DELETE RESTRICT ON UPDATE CASCADE

          );`,
    version: 25
  },
  {
    query: `
      CREATE  INDEX sales_details_index_1 ON sales_details(created_on, 
        date, cost_price);
      `,
    version: 26
  },
  {
    query: `CREATE TABLE settings (
            id integer primary key autoincrement,
            name text NOT NULL,
            module text NOT NULL,
            value text NOT NULL
          );`,
    version: 27
  },
  {
    query: `
      CREATE UNIQUE INDEX settings_index_1 ON settings(name);
      `,
    version: 28
  },
  {
    query: `CREATE TABLE stock_adjustment_sessions (
            id integer primary key autoincrement,
            date text NOT NULL,
            code text DEFAULT NULL,
            created_on text default CURRENT_TIMESTAMP,
            created_by integer DEFAULT NULL
          );`,
    version: 29
  },
  {
    query: `
      CREATE UNIQUE INDEX stock_index_1 ON stock_adjustment_sessions(code);
      CREATE  INDEX stock_index_2 ON stock_adjustment_sessions(date);
      `,
    version: 30
  },
  {
    query: `CREATE TABLE stock_adjustment (
            id integer primary key autoincrement,
            date text NOT NULL,
            product integer NOT NULL,
            quantity_counted real NOT NULL,
            quantity_expected real NOT NULL,
            current_price real NOT NULL,
            created_by integer NOT NULL,
            code text DEFAULT NULL,
            created_on text default CURRENT_TIMESTAMP ,
            cost_price real DEFAULT NULL,
            category text DEFAULT NULL,
            size text DEFAULT NULL,
            expiry text DEFAULT NULL,
            comments text DEFAULT NULL,
            quantity_expired real NOT NULL DEFAULT 0,
            quantity_damaged real NOT NULL DEFAULT 0,
            foreign key (code) references stock_adjustment_sessions (code) ON DELETE CASCADE ON UPDATE CASCADE
            foreign key (product) references products (id) ON DELETE RESTRICT ON UPDATE CASCADE

          );`,
    version: 31
  },
  {
    query: `
      
      CREATE  INDEX stock_adj_index_1 ON stock_adjustment(date, quantity_counted,
        quantity_expected, category, expiry);
      `,
    version: 32
  },
 
  {
    query: `CREATE TABLE transfers (
            id integer primary key autoincrement,
            receiver integer NOT NULL,
            date text NOT NULL,
            code text DEFAULT NULL,
            status text DEFAULT 'Pending',
            created_on text default CURRENT_TIMESTAMP ,
            created_by integer DEFAULT NULL,
            foreign key (receiver) references branches (id) ON DELETE RESTRICT ON UPDATE CASCADE

          );`,
    version: 33
  },
  {
    query: `
      
      CREATE  INDEX transfers_index_1 ON transfers(date, created_on);
      CREATE UNIQUE INDEX transfers_index_2 ON transfers(code);

      `,
    version: 34
  },
  {
    query: `CREATE TABLE transfer_details (
            id integer primary key autoincrement,
            product integer NOT NULL,
            quantity real NOT NULL,
            price real NOT NULL,
            created_on text default CURRENT_TIMESTAMP,
            created_by integer NOT NULL,
            code text NOT NULL,
            date text DEFAULT NULL,
            expiry text DEFAULT NULL,
            cost_price real NOT NULL,
            foreign key (product) references products (id) ON DELETE RESTRICT ON UPDATE CASCADE
            foreign key (code) references transfers (code) ON DELETE CASCADE ON UPDATE CASCADE

          );`,  
    version: 35
  },
  {
    query: `
      
      CREATE  INDEX transferdetails_index_1 ON transfer_details(date, created_on, product, quantity, expiry);
      CREATE  INDEX transferDETAILS_index_2 ON transfer_details(code);

      `,
    version: 36
  },
  {
    query: `CREATE TABLE users (
            id integer primary key autoincrement,
            role_id integer NOT NULL ,
            email text NOT NULL,
            username text NOT NULL DEFAULT '',
            password_hash text DEFAULT NULL,
            last_login text NOT NULL DEFAULT '0000-00-00 00:00:00',
            last_ip text NOT NULL DEFAULT '',
            created_on text default CURRENT_TIMESTAMP,
            display_name text DEFAULT '',
            active integer NOT NULL DEFAULT 0,
            last_seen text DEFAULT NULL,
            phone text DEFAULT NULL
            
          ); `,
    version: 37
  },
  {
    query: `
      
      CREATE  INDEX users_index_1 ON users(username, active);
      CREATE UNIQUE INDEX users_index_2 ON users(email);

      `,
    version: 38
  },
  {
    query: `CREATE TABLE user_sessions (
            id integer primary key autoincrement,
            user_id integer NOT NULL,
            token text NOT NULL,
            created_on text default CURRENT_TIMESTAMP,
            expires text NOT NULL
          );`,
    version: 39
  },
  {
    query: `
      
      CREATE  INDEX users_sess_index_1 ON user_sessions(token, user_id, expires);

      `,
    version: 40
  },
  {

    query: `INSERT INTO roles (role_id, role_name, description) values 
    (1, 'Branch Manager', 'manages day-to-day activities. Receives purchases, manages stock. May also make sales'),
    (2, 'Sales Person', 'serves customers and makes sales. Limited permissions by default');`,
    version: 41
  },
  {
    query: `INSERT INTO role_permissions (role_id, permission_id) values 
    (1, 59),(1,60), (1, 61), (1, 62), (1, 63), (1,64), (1,65), (1,67), (1, 68), 
     (1, 72), (1, 73), (1, 74), (1, 75), (1, 76), (1, 77), (1,78), (1, 79), (1, 80);`,
    version: 42
  },
  {
    query: `INSERT INTO role_permissions (role_id, permission_id) values 
    (2, 59),  (2, 62), (2, 63), (2,67),   
     (2, 74),  (2, 80);`,
    version: 43
  },
  {
    query: `DROP INDEX IF EXISTS purchase_details_index_2;`,
    version: 44
  },
  {
    query: `DROP INDEX IF EXISTS received_transfer_details_index_2;`,
    version: 45
  },
  {
    query: `DROP INDEX IF EXISTS transferDETAILS_index_2;`,
    version: 46
  },
  {
    query: `DROP INDEX IF EXISTS received_transfer_details_index_2;`,
    version: 47
  },
  {
    query: `
      
      CREATE  INDEX transferDetails_index_code ON transfer_details(code);
      CREATE  INDEX purchaseDetails_index_code ON purchase_details(code);
      CREATE  INDEX receivedtransferDetails_index_code ON received_transfer_details(code);

      `,
    version: 48
  } ,
  {

    query: `INSERT INTO permissions (permission_id, name, description) values 
    (81, 'Manage Staff', 'add/edit/delete users. Also can change a user role or permissions');`,
    version: 49
  },
  {
    query: `INSERT INTO role_permissions (role_id, permission_id) values 
    (1, 81);`,
    version: 50
  }, 
  {
    query: `DROP INDEX IF EXISTS product_name_unique;`,
    version: 51
  },
  {
    query: `
      
      CREATE  INDEX product_index_name ON products(name);
     
      `,
    version: 52
  } 

 //
];
exports.migrations = migrations;