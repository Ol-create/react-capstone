import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Coins from '../Coins';

describe('Coins component', () => {
  test('component match with the snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Coins />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
