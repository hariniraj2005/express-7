exports.getContact=(req,res,next)=>{
    res.render('contact', {
        pageTitle: 'Contact Us',
        path: '/contactus',
        formsCSS: true,
        productCSS: true,
        activeContact: true
    })
}

exports.postContact=(req, res, next) => {
    // You can process the form data here if needed
    const { name, email } = req.body;
    console.log(`Name: ${name}, Email: ${email}`);

    // Redirect to the success page
    res.redirect('/success');
}