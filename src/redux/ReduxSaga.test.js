import { put} from 'redux-saga/effects';
import postSagaMiddleware from './postSagaMiddleware';
import { successAction } from './action';

describe('testing sagas - dispatching actions', () => {
    console.log('testing sagas - dispatching actions----> ');
  
      beforeAll(() => {
         postSagaMiddleware();
      });
  
      it('should call the sampleCalledAction', () => {
          const expected = put(successAction('val'));
          const actual = {
            "action": {"data": undefined, "type": "GET_ALL_POST"}, 
            "channel": undefined};
          expect(expected.payload).toEqual(actual);
     });
  });