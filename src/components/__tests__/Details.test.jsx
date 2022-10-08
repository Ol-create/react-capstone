import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../../redux/configureStore';
import Details from '../Details';
import { coinDetail } from '../../redux/CoinState/detailReducer';

describe('Details component', () => {
  test('component match with the snapshot', () => {
   store.dispatch(coinDetail('bitcoin'));
    const tree = renderer.create(
      <BrowserRouter>
        <Provider store={store}>
          <Details />
        </Provider>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
