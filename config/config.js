require('dotenv').config()

var db = {
    staging: {
        DATABASE_HOST: 'ec2-34-202-88-122.compute-1.amazonaws.comm',
        DATABASE_NAME: 'd4nchnch4q69cl',
        DATABASE_USERNAME: 'aqfljgozvjkxmx',
        DATABASE_PASSWORD: 'd7901f294146b9926b5430f4b286a70186ea22ce67dd7b9599d54b49b0e005fb',
        DATABASE_PORT: 5432,
        DATABASE_DIALECT: 'postgres',
        NODE_ENV: process.env.NODE_ENV || 'staging',
        SCHEMA: "public",
    },
    prod: {
        DATABASE_HOST: process.env.DATABASE_HOST || 'ec2-34-202-88-122.compute-1.amazonaws.com',
        DATABASE_NAME: process.env.DATABASE_NAME || 'd4nchnch4q69cl',
        DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'aqfljgozvjkxmx',
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'd7901f294146b9926b5430f4b286a70186ea22ce67dd7b9599d54b49b0e005fb',
        DATABASE_PORT: process.env.DATABASE_PORT || 5432,
        DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
        NODE_ENV: process.env.NODE_ENV || 'production',
        SCHEMA: "public",
    },

    rg: {
        DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
        DATABASE_NAME: process.env.DATABASE_NAME || 'college-mate-api',
        DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'postgres',
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'omsingh',
        DATABASE_PORT: process.env.DATABASE_PORT || 5433,
        DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
        NODE_ENV: process.env.NODE_ENV || 'development',
        SCHEMA: "public",
    },
};

var cache = {
    rg: {
        host: 'localhost',
        port: 6379
    }
};

var config = {
    dialect: "postgres",
    app: {
        jwtKey: process.env.SECRET_KEY || 'BadBitches',
        sessionKey: "SecretSessionKey",
        port: process.env.PORT || '4193',
        name: "generic Services API Platform",
        local_domain: "http://localhost:" + (process.env.PORT || '4193') + "/api",
    },

    db: {
        env: db.rg, // This is where we set the environment of the db
        cache: cache.staging
    },

    apiKeys: {
        sendGrid: ""
    },
    cloud: {
        gcp: {
            service_account_path: "./config/creds/firebase-admin-sdk-service-account.json",
            project_id: "generic-services",
            storage: {
                bucket_name: "generic-services.appspot.com"
            },
            firebase: {
                server_key: process.env.Secret_Key || "AAAAb8sEwwI:APA91bHdIKNJX9RrBuVoDxWIzXHibXkeW1LWX6nwoneJVtiLUDL9AeMQiOp7u7yCQg3s44PkB4bITibP3ySOJe_uGe6RHcY0tvFzKF9zyPYBNrYKYgKmd8Abpfp26pPPJpKguhKr-RAp"
            }
        }
    },
    google: {
        CLIENT_ID: process.env.CLIENT_ID || '480147456770-btcj5q928eoai1qn2ftsfsv9q7tmo3oo.apps.googleusercontent.com',
        CLIENT_SECRET: process.env.CLIENT_SECRET
    },
    exam: {
        csv: '/path/to/csv'
    },
    cloudinary:{
        cloud_name: "dfatemtbe",
        api_key: "932511163645779",
        api_secret: "NROusmFVS-C08Qz8XZNgUCgWelU",
    }
};

module.exports = config;

// To convert js config to json
if (require.main == module) {
    var fs = require('fs');
    var path = require('path');

    console.log("The current config is \n\n\n");

    var config_string = JSON.stringify(config, null, 4);
    console.log(config_string);
    console.log("\n\n\n");

    // Write the config string to a file here, most preferably app_config.json    
    var file_path = path.join(__dirname, 'app_config.json');
    console.log("Saving the config file at:  " + file_path);
    console.log("\n\n\n");

    // fs.writeFile(file_path, config_string, function (err) {
    //     if (err) {
    //         console.log("There is an error in writing the data to the file");
    //         console.log(err);
    //     } else {
    //         console.log('config file saved');
    //     }
    // });
}