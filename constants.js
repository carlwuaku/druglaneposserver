
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
exports.sequelize_db = path.join( this.settings_location,'sequelize_druglane.db');
exports.backup_folder = path.join((electron.app || electron.remote.app).getPath('documents'), "druglaneBackups");
exports.settings_filename = 'system-settings.json';
exports.db_filename = 'druglane.db';
exports.internal_backups_path =path.join( this.settings_location,'backups');

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
  },
  {
    query: `
      
    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;
    
    ALTER TABLE customers RENAME TO _customers_old;

    
    
    CREATE TABLE customers (
    
      id integer primary key autoincrement,
      name text NOT NULL,
      sex text DEFAULT NULL,
      phone text DEFAULT NULL,
      email text DEFAULT NULL,
      location text DEFAULT NULL,
      created_on text  DEFAULT CURRENT_TIMESTAMP
    );
    
    INSERT INTO customers (id,name, sex,phone, email, location)
      SELECT id, first_name || ' ' || last_name,sex,phone, email, place_of_work
      FROM _customers_old;
    
    COMMIT;
    
    PRAGMA foreign_keys=on;
     
      `,
    version: 53
  } ,
  {

    query: `INSERT INTO permissions (permission_id, name, description) values 
    (82, 'Manage Customers', 'add/edit/delete customers data.');`,
    version: 54
  },
  {
    query: `INSERT INTO role_permissions (role_id, permission_id) values 
    (1, 82);`,
    version: 55
  },
  {
    query: `
      
    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;
    
    ALTER TABLE sales RENAME TO _sales_old;

    
    
    CREATE TABLE sales (
    
      id integer primary key autoincrement,
            customer text DEFAULT NULL,
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
          
    );
    
    INSERT INTO sales 
      SELECT *
      FROM _sales_old;

      DROP TABLE IF EXISTS _sales_old;
    
    COMMIT;
    
    PRAGMA foreign_keys=on;
     
      `,
    version: 56
  },
  {
    query: `
    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE sales_details_new (
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

          );

          INSERT INTO sales_details_new 
      SELECT *
      FROM sales_details;

      DROP TABLE IF EXISTS sales_details;
      ALTER TABLE sales_details_new RENAME TO sales_details;
          
          COMMIT;
    
          PRAGMA foreign_keys=on;
          `,
    version: 57
  },
  {
    query: `
      CREATE  INDEX sales_details_index_1 ON sales_details(created_on, 
        date, cost_price);
      `,
    version: 58
  },
  {
    query: `
      CREATE  INDEX sales_index_1 ON sales(created_on, 
        date, payment_method, insurance_member_id, insurance_member_name);
         CREATE UNIQUE INDEX sales_index_2 ON sales(code);
      `,
    version: 59
  },
  {
    query: `

    BEGIN TRANSACTION;

    CREATE TABLE customer_diagnostics (
            id integer primary key autoincrement,
            customer integer NOT NULL,
            test text NOT NULL,
            data text NOT NULL,
            comments text default NULL,
            created_on text default CURRENT_TIMESTAMP,
            
            foreign key (customer) references customers (id) ON DELETE CASCADE ON UPDATE CASCADE

          );

          
          COMMIT;
    
          `,
    version: 60
  },
  {
    query: `
      CREATE  INDEX customer_diagnostics_test ON customer_diagnostics(test);
      `,
    version: 61
  },
  {
    query: `

    BEGIN TRANSACTION;

    CREATE TABLE diagnostic_tests (
            id integer primary key autoincrement,
            test_name text NOT NULL,
            parameters text NOT NULL,
            comments text default NULL,
            created_on text default CURRENT_TIMESTAMP
            );
            
      insert into diagnostic_tests  (test_name, parameters, comments) values 
      ('Blood Glucose Test', 'value (mmol/L)', 
      'Normal ranges for non-diabetic: Before meals - 4.0 to 5.9 mmol/L; After meals - under 7.8 mmol/L; 
      For diabetics: Before meals - 4 to 7 mmol/L; After meals - 5 to 9 mmol/L'),

      ('Blood Pressure', 'systolic, diastolic', 
      '90/60mmHg  to 120/80mmHg - ideal,
      140/90mmHg or higher - high,
      90/60mmHg or lower - low'),

      ('Total Blood Cholesterol', 'value (mmol/L)', 
      'Below 5.2 mmol/L - normal, 5.2 to 6.2 mmol/L - Borderline High, Above 6.2 mmol/L - High ');
          
          COMMIT;
    
          `,
    version: 62
  },
  {
    query: `
    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE stock_adjustment_new (
      id integer primary key autoincrement,
      date text NOT NULL,
      product integer NOT NULL,
      quantity_counted real NOT NULL,
      quantity_expected real NOT NULL,
      current_price real default NULL,
      created_by integer default NULL,
      code text DEFAULT NULL,
      created_on text default CURRENT_TIMESTAMP ,
      cost_price real DEFAULT NULL,
      category text DEFAULT NULL,
      size text DEFAULT NULL,
      expiry text DEFAULT NULL,
      comments text DEFAULT NULL,
      quantity_expired real NOT NULL DEFAULT 0,
      quantity_damaged real NOT NULL DEFAULT 0,
      foreign key (product) references products (id) ON DELETE RESTRICT ON UPDATE CASCADE

          );

          INSERT INTO stock_adjustment_new 
      SELECT *
      FROM stock_adjustment;

      DROP TABLE IF EXISTS stock_adjustment;
      DROP INDEX IF EXISTS stock_adj_index_1;
      ALTER TABLE stock_adjustment_new RENAME TO stock_adjustment;
          
          COMMIT;
    
          PRAGMA foreign_keys=on;
          `,
    version: 63
  },
  
  {
    query: `
      
      CREATE  INDEX stock_adj_index_1 ON stock_adjustment(date, quantity_counted,
        quantity_expected, category, expiry);
      `,
    version: 64
  },
  {

    query: `INSERT INTO permissions (permission_id, name, description) values 
    (83, 'Manage Settings', 'edit company name, phone, address, etc');`,
    version: 65
  },
  {
    query: `INSERT INTO role_permissions (role_id, permission_id) values 
    (1, 83);`,
    version: 66
  },
  {
    query: `
    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE products_new (
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
            size text default null,
            description text default null,
            status integer  DEFAULT null
          );

          INSERT INTO products_new (id, name, price, category, notes, unit, picture, created_on, 
            max_stock, min_stock, expiry, barcode, current_stock, last_modified, cost_price, status)
      SELECT *
      FROM products;


      DROP INDEX IF EXISTS product_name_unique;
      DROP INDEX IF EXISTS product_index;
      DROP INDEX IF EXISTS product_barcode_unique;

      DROP TABLE IF EXISTS products;

      ALTER TABLE products_new RENAME TO products;
          
          COMMIT;
    
          PRAGMA foreign_keys=on;
          `,
    version: 67
  },
  {
    query: `CREATE  INDEX product_name
      ON products(name);
      CREATE  INDEX product_index  ON products(price, category, max_stock, min_stock, expiry,
         current_stock, last_modified, status);
      `,
    version: 68
  },
  {
    query: ` 

 
    CREATE TABLE if not exists stock_adjustment_pending (
      id integer primary key autoincrement,
      date text NOT NULL,
      product integer NOT NULL,
      quantity_counted real NOT NULL,
      quantity_expected real NOT NULL,
      current_price real default NULL,
      created_by integer default NULL,
      code text DEFAULT NULL,
      created_on text default CURRENT_TIMESTAMP ,
      cost_price real DEFAULT NULL,
      category text DEFAULT NULL,
      size text DEFAULT NULL,
      expiry text DEFAULT NULL,
      comments text DEFAULT NULL,
      quantity_expired real NOT NULL DEFAULT 0,
      quantity_damaged real NOT NULL DEFAULT 0,
      foreign key (product) references products (id) ON DELETE RESTRICT ON UPDATE CASCADE

          );

      
          
    
          `,
    version: 69
  },
  
  {
    query: `
      
      CREATE  INDEX stock_adj_pending_index_1 ON stock_adjustment_pending(date, quantity_counted,
        quantity_expected, category, expiry);
      `,
    version: 70
  },
  {
    query: `
    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE stock_adjustment_sessions_new (
      id integer primary key autoincrement,
            date text NOT NULL,
            code text DEFAULT NULL,
            created_on text default CURRENT_TIMESTAMP,
            created_by integer DEFAULT NULL,
            status text default 'in_progress'


          );

          INSERT INTO stock_adjustment_sessions_new (id, date, code, created_on, created_by) 
      SELECT id, date, code, created_on, created_by 
      FROM stock_adjustment_sessions;

      DROP TABLE IF EXISTS stock_adjustment_sessions;
      ALTER TABLE stock_adjustment_sessions_new RENAME TO stock_adjustment_sessions;

      DROP INDEX IF EXISTS stock_index_1 ;
      DROP INDEX IF EXISTS stock_index_2;


          COMMIT;
    
          PRAGMA foreign_keys=on;
          `,
    version: 71
  },
  {
    query: `
      CREATE UNIQUE INDEX stock_index_1 ON stock_adjustment_sessions(code);
      CREATE  INDEX stock_index_2 ON stock_adjustment_sessions(date);
      `,
    version: 72
  },
  {
    query: `
    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE products_new (
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
            size text default null,
            description text default null,
            status integer  DEFAULT null,
            shelf text default null
          );

          INSERT INTO products_new (id, name, price, category, notes, unit, picture, created_on, 
            max_stock, min_stock, expiry, barcode, current_stock, last_modified, cost_price, size,
            description, status)
      SELECT *
      FROM products;


      DROP INDEX IF EXISTS product_name_unique;
      DROP INDEX IF EXISTS product_index;
      DROP INDEX IF EXISTS product_barcode_unique;

      DROP TABLE IF EXISTS products;

      ALTER TABLE products_new RENAME TO products;
          
          COMMIT;
    
          PRAGMA foreign_keys=on;
          `,
    version: 73
  },
  {
    query: `CREATE  INDEX product_name
      ON products(name);
      CREATE  INDEX product_index  ON products(price, category, max_stock, min_stock, expiry,
         current_stock, last_modified, status);
      `,
    version: 74
  },
  {
    query: `
    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE dbbackups (
      id integer primary key autoincrement,
            file_name text NOT NULL,
            created_on text  DEFAULT CURRENT_TIMESTAMP,
            created_by text DEFAULT NULL,
            description text DEFUALT NULL,
            uploaded text default null,
            db_version text default null
          );

          
          
          COMMIT;
    
          PRAGMA foreign_keys=on;
          `,
    version: 75
  },
  {
    query: `CREATE  INDEX dbbackups_name
      ON dbbackups(file_name,created_on,description,uploaded,db_version);
      `,
    version: 76
  },
  {
    query: ` 

    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE if not exists _stock_adjustment_pending (
      id integer primary key autoincrement,
      date text NOT NULL,
      product integer NOT NULL,
      quantity_counted real NOT NULL,
      quantity_expected real NOT NULL,
      current_price real default NULL,
      created_by integer default NULL,
      code text DEFAULT NULL,
      created_on text default CURRENT_TIMESTAMP ,
      cost_price real DEFAULT NULL,
      category text DEFAULT NULL,
      size text DEFAULT NULL,
      expiry text DEFAULT NULL,
      comments text DEFAULT NULL,
      quantity_expired real NOT NULL DEFAULT 0,
      quantity_damaged real NOT NULL DEFAULT 0,
      shelf text DEFAULT NULL,
      unit text DEFAULT NULL,
      foreign key (product) references products (id) ON DELETE RESTRICT ON UPDATE CASCADE

          );

      INSERT INTO _stock_adjustment_pending (id, date, product, quantity_counted, quantity_expected,
         current_price, created_by, created_on, 
            code, cost_price, category, size, expiry, comments, quantity_expired, quantity_damaged)
      SELECT *
      FROM stock_adjustment_pending;


      DROP INDEX IF EXISTS stock_adj_pending_index_1;
      

      DROP TABLE IF EXISTS stock_adjustment_pending;

      ALTER TABLE _stock_adjustment_pending RENAME TO stock_adjustment_pending;
          
          COMMIT;
    
          PRAGMA foreign_keys=on;
          
    
          `,
    version: 77
  },
  
  {
    query: `
      
      CREATE  INDEX stock_adj_pending_index_1 ON stock_adjustment_pending(date, quantity_counted,
        quantity_expected, category, expiry);
      `,
    version: 78
  },
  {
    query: ` 

    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE if not exists refills (
      id integer primary key autoincrement,
      product text NOT NULL,
      product_id integer default NULL,
      quantity real NOT NULL,
      start_date date NOT NULL,
      end_date date default NULL,
      created_by integer default NULL,
      status text DEFAULT NULL,
      
      foreign key (product_id) references products (id) ON DELETE SET NULL ON UPDATE CASCADE

          );

      
          
          COMMIT;
    
          PRAGMA foreign_keys=on;
          
    
          `,
    version: 79
  },
  {
    query: ` 

    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE if not exists _refills (
      id integer primary key autoincrement,
      product text NOT NULL,
      product_id integer default NULL,
      quantity real NOT NULL,
      start_date date NOT NULL,
      end_date date default NULL,
      created_by integer default NULL,
      status text DEFAULT NULL,
      customer_id integer not null,
      created_on date default current_timestamp,
      
      foreign key (product_id) references products (id) ON DELETE SET NULL ON UPDATE CASCADE

          );

      INSERT INTO _refills (id, product, product_id, start_date, end_date,
         status, created_by, 
             quantity)
      SELECT *
      FROM refills;


      DROP TABLE IF EXISTS refills;

      ALTER TABLE _refills RENAME TO refills;
          
          COMMIT;
    
          PRAGMA foreign_keys=on;
          
    
          `,
    version: 80
  },
  {
    query: ` 

    PRAGMA foreign_keys=off;

    BEGIN TRANSACTION;

    CREATE TABLE if not exists _refills (
      id integer primary key autoincrement,
      product text NOT NULL,
      product_id integer default NULL,
      quantity text NOT NULL,
      start_date date NOT NULL,
      end_date date default NULL,
      created_by integer default NULL,
      status text DEFAULT NULL,
      customer_id integer default null,
      customer_name text default null,
      created_on date default current_timestamp,
      
      foreign key (product_id) references products (id) ON DELETE SET NULL ON UPDATE CASCADE

          );

      INSERT INTO _refills (id, product, product_id, start_date, end_date,
         status, created_by, 
             quantity,customer_id, created_on)
      SELECT *
      FROM refills;


      DROP TABLE IF EXISTS refills;

      ALTER TABLE _refills RENAME TO refills;
          
          COMMIT;
    
          PRAGMA foreign_keys=on;
          
    
          `,
    version: 81
  }

 //
];
exports.migrations = migrations;

/*
DROP COLUMN
PRAGMA foreign_keys=off;
PRAGMA legacy_alter_table=ON
BEGIN TRANSACTION;

ALTER TABLE table1 RENAME TO _table1_old;

CREATE TABLE table1 (
( column1 datatype [ NULL | NOT NULL ],
  column2 datatype [ NULL | NOT NULL ],
  ...
);

INSERT INTO table1 (column1, column2, ... column_n)
  SELECT column1, column2, ... column_n
  FROM _table1_old;

COMMIT;

PRAGMA foreign_keys=on;

ALTER COLUMN

PRAGMA foreign_keys=off;
PRAGMA legacy_alter_table=ON
BEGIN TRANSACTION;

ALTER TABLE table1 RENAME TO _table1_old;

CREATE TABLE table1 (
( column1 datatype [ NULL | NOT NULL ],
  column2 datatype [ NULL | NOT NULL ],
  ...
);

INSERT INTO table1 (column1, column2, ... column_n)
  SELECT column1, column2, ... column_n
  FROM _table1_old;

COMMIT;

PRAGMA foreign_keys=on;


Create a new (e.g. MY_TABLE_NEW) with all the new properties you need.

Migrate the existing data from MY_TABLE to MY_TABLE_NEW (adding default/missing values as appropriate).

Delete the original table MY_TABLE. At this point, any FK constraints and triggers that refer to MY_TABLE would fail, but that doesn't matter.

Use ALTER TABLE MY_TABLE_NEW RENAME TO MY_TABLE to change the name of the new, correctly formatted table back to that of the original table. Any FK constraints/triggers references will now be satisfied again (assuming they are not to columns that were removed!)

The above will work both before and after the change. Before the change, no heed is paid to FK constraints/triggers; after the change, there will be no references to MY_TABLE_NEW so nothing will be propagated.
*/