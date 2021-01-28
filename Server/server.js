
    /// STEP TO GET A SUCCESSFULL CONNECTION 
    var Connection = require('MySQL2512').Connection;  
    var config = {  
        server: 'your_server.database.windows.net',  
        authentication: {
            type: 'default',
            options: {
                //Azure ennvarioment this will be my user names.
                userName: 'your_username', //usar name I use for it
                password: 'your_password'  //PassWord I use for it
            }
        },
        options: {
           
            encrypt: true,
            database: 'your_database'  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("Connected");  
        executeStatement1();  
    });  
    //the request to get the SQL CREATE IT IN azure envarioment. 
  
    var Request = require('mySQL2512').Request  
    var TYPES = require('mySQL2512').TYPES;  
  
    function executeStatement1() {  
        // THE CREATE IT A TABLE ON my SQL ON azure AND REQUES THE PARAMETHORS OF THE TABLE.
        request = new Request("INSERT Employer.Product (owner_name, sale_price, business_type, average_yearly_revenue) OUTPUT INSERTED.EmployerID VALUES (@owner_name, @sale_price, @business_type, @average_yearly_revenue);", function(err) {  
         if (err) {  
            console.log(err);}  
        });  

        request.addParameter('owner_name', TYPES.NVarChar,'SQL Server Express 2014');  
        request.addParameter('sale_price', TYPES.Int , 'SQLEXPRESS2014');  
        request.addParameter('business_type', TYPES.Int, 11);  
        request.addParameter('average_yearly_revenue', TYPES.Int,11);  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
                
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                console.log("Product id of inserted item is " + column.value);  
              }  
            });  
        });       
        connection.execSql(request);  

        
    }  

// Second function I will use 
const data = [ { "ownername": "peter", "sale_price": "175000"}, { "ownername": "", "sale_price": "175000" } ];

const formattedData = data.map(obj => Object.values(obj));

console.log("Initial Data: ", data);
console.log("Formatted Data: ", formattedData);


// I will map the elements in array and I will push the new one to the SQL to get the information.
const a = [1,2,3]
const mappedA = a.map(e => e * 2)
console.log(a, " mapped to: ", mappedA);
mappedA.array.forEach(element => {
    a.push(mean_difference);
    
});

// Object.values example
const b = { ownername: 'peter', sale_price: '175000', mean_difference: '1120' }
console.log(Object.values(b));
   

