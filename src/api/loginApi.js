import axios from 'axios';

export const loginApi = async request => {
  const LOGIN_API = 'https://test1234.free.beeceptor.com/login';
  const resp = await axios
    .post(
      LOGIN_API,
      {
        user: JSON.stringify(request.data),
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(response => response.data)
    .then(data => {
      if (data.status === 'Success') {
        return data;
      } else {
        console.log('Error');
      }
    });
  return resp;
};
