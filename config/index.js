const dev = process.env.NODE_ENV !== 'production'

export const server = {
	frontend: {
		url: (
			(dev)
			? 'http://localhost:3000/'
			: 'https://coloneli-simpsoni.vercel.app/'
		)
	},
	backend: {
		url: (
			(dev)
			? 'http://localhost:80/coloneli-simpsoni/'
			: 'colsonecommerce.000webhostapp.com/'
		)
	}
}

export const API_ROUTE = {
	product_images: `${server.backend.url}/products/images/`,
	register: `${server.backend.url}/php/processes/customer/register.php`,
	signin: `${server.backend.url}/php/processes/customer/signin.php`,
	home: `${server.backend.url}/php/processes/pages/home.php`,
	product_data: `${server.backend.url}/php/processes/pages/product_data.php`,
	newsletter: `${server.backend.url}/php/processes/data/newsletter.php`,
	get_user_data: `${server.backend.url}/php/processes/data/GetUserData.php`,
}
