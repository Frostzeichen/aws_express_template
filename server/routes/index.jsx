//React.js
import React from 'react'
import ReactDOM from 'react-dom'
import "../../public/routes/src/App.css";

import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
});

export default router;