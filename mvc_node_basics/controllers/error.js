exports.get404 = (req, res, next) => {
  // console.log('Error Page Middleware');
  // Rendering the 404 EJS/PUG template file
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};
