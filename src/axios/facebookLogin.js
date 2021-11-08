import axios from 'axios';
import { useHistory } from 'react-router-dom';

const facebookLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('http://127.0.0.1:8000/auth/convert-token', {
			token: accesstoken,
			backend: 'facebook',
			grant_type: 'convert_token',
			client_id: 'lNp0lKygNnKb64c1LBJOsztuMbsV6UTNvUe4p0mF',
			client_secret:
				'hAnwOftRqlFu0qzQP52mwG3OBm3ksZihH5PzoYevLnHQu9uU8IU7CoUyRh2uLZlvQlRlqEZuTXasyp5R42mgtxeonhs6WFb0PaAJEKUkHcpPMcFbygFExIkiQVjo1rE3',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default facebookLogin;
