import axios from 'axios';

describe('testing api - call api via axios', () => {

    console.log('testing sagas - dispatching actions----> ');
      it('Get Posts', async () => {
        const response = await axios.get('http://localhost:3001');
        expect(response.status).toEqual(200);
     });
  });