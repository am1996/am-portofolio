let express = require("express"),
	nunjucks= require("nunjucks"),
	bodyParser = require("body-parser"),
	index = require("./apps/main.js"),
	app = express();
//middleware
var port = process.env.PORT || 8000;
nunjucks.configure('views', { //views file
    autoescape: true,
    express: app
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("static"));
app.use((res,req,next)=> {
	app.locals.req = res; 
	next();
});

//routes
app.use("/",index);

app.listen(port,
	() => console.log("running at port 3000...")
);