let express = require("express"),
	bodyParser = require("body-parser"),
	nodemailer = require("nodemailer"),
	db = require("./storage.json"),
	valSchemas = require("./validation"),
	router = express.Router();


//routes
router.get("/",(req,res)=>{
	res.render("index.html",{
		items:db
	});
});

router.post("/contact",(req,res)=>{
	let transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: "am.websites.96@gmail.com", // generated ethereal user
		pass: "fakegame"  // generated ethereal password
	}
	});
	var content = {
		fullname:req.body.name,
		email:req.body.email,
		msg:req.body.message
	};
	// setup email data with unicode symbols
	let mailOptions = {
		from: `${req.body.email}`, // sender address
		to: 'mmogamer2.am@gmail.com', // list of receivers
		subject: 'AM-Porotofolio', // Subject line
		html: `<h3>Name:</h3> ${req.body.name}
		<br>
		<h3>Email:</h3> ${req.body.email}
		<br>
		<h3>Message:</h3> ${req.body.message}` // html body
	};
	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			
		}
	});
	res.redirect("/success");
});

router.get("/success",(req,res)=>{
	res.render('success.html');
});

router.get("*",(req,res)=>{
	res.render('404.html');
});
module.exports = router;