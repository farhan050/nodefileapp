const path=require('path');
const express=require('express');
const ejs=require('ejs')
const errorcontroller=require('./Controller/Error/errorController')
const publicproductroutes=require('./Routes/customer')
const adminroutes=require('./Routes/admin')
const app=express();
const port=7890;
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:false}));
app.set("views",path.join(__dirname, 'views'));
app.set("view engine","ejs");
app.use((req, res, next) => {
    res.locals.views = __dirname+"/Views/"; // Set the base directory as the project directory
    next();
  });
app.use('/admin',adminroutes);
app.use(publicproductroutes);
app.use(errorcontroller.get404page)

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
})