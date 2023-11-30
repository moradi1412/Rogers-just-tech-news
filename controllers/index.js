const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const aboutRoutes = require('./about-routes.js'); 
const calRoutes = require('./cal-routes.js'); 


router.use('/api', apiRoutes);

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/about', aboutRoutes);
router.use('/cal', calRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
