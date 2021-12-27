/* eslint-disable camelcase */
import { render } from '@testing-library/react-native';
import { StatusCodes } from 'http-status-codes';
import React from 'react';

import { store } from '../../src/redux/store';
import { Home } from '../../src/screens/Home';
import { axiosMock } from '../mockedAxios';
import { TestingProvider } from '../TestingProvider';

describe('<Home />', () => {
  beforeEach(() => {
    axiosMock.reset();
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should match <Home /> snapshot', () => {
    expect.hasAssertions();

    const { toJSON } = render(
      <TestingProvider>
        <Home />
      </TestingProvider>,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should fire fetchPicture action on mount', () => {
    expect.hasAssertions();

    const fetchPicture = jest.spyOn(store, 'dispatch');
    const pictureRepo = 'https://picsum.photos/v2/list';
    axiosMock.onGet(pictureRepo).reply(StatusCodes.OK, [{ download_url: pictureRepo }]);

    render(
      <TestingProvider>
        <Home />
      </TestingProvider>,
    );

    expect(fetchPicture).toHaveBeenCalledWith({ type: 'FETCH_PICTURE/fulfilled', payload: { picture: pictureRepo } });
  });
});
