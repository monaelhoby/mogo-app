import 'bootstrap/dist/css/bootstrap.css';
import { configure } from '@storybook/react';
import  '@fortawesome/fontawesome-free/css/all.min.css';
import '../App.css';
const req = require.context('./components/', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
