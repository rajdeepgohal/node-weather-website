const path = require('path');
const express = require('express');
const hbs = require('hbs');




const app = express();

const port = process.env.PORT || 3000;

app.set('view engine' ,'hbs');
const publicDir = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');
app.use(express.static(publicDir));
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);


app.get('', (req, res) => {
    res.render('index' , {
        title: 'Weather App',
        name : 'Rajdeep'
    });
});

app.get('/about', (req, res) => {
    res.render('about' , {
        title: 'about',
        name : 'Rajdeep'
    });
});

app.get('/help', (req, res) => {
    res.render('help' , {
        msg: 'This will for sure hep you',
        title: 'help',
        name : 'Rajdeep'
        
    });
});

app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        res.send({error : 'please provide address'});
        return;
    }
    res.send({msg : 'nice address'});
    
     });

     app.get('/help/*',(req, res) => {
        res.render('error' , {
            
            title: 'error',
            msg: 'help nahi milegi',
            name : 'Rajdeep'
            
        });
    
    });

    app.get('/products', (req, res) =>{
        console.log(req.query);
        res.send({
            products : []
        });
    });
app.get('*',(req, res) => {
    res.render('error' , {
        
        title: 'error',
        msg : 'haji kithe muh chakeya',
        name : 'Rajdeep'
        
    });

});

app.listen(port, () =>
{
    console.log('server is up on port', port);
});

console.log('hi');

