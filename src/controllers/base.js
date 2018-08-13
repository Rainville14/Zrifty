import Homepage from 'components/Homepage/Homepage';
import About from 'components/About/About';
import Contact from 'components/Contact/Contact';
import Portfolio from 'components/Portfolio/Portfolio';

export default [
	{
		path: '/',
		component: Homepage,
		exact: true
	},
	{
		path: '/About',
		component: About,
		exact: true
	},
	{
		path: '/Contact',
		component: Contact,
		exact: true
	},
	{
		path: '/Portfolio',
		component: Portfolio,
		exact: true
	}
];
