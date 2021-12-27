/* eslint-disable camelcase */
import { StatusCodes } from 'http-status-codes';
import React from 'react';

import { Home } from '../../src/screens/Home';
import { axiosMock } from '../mockedAxios';
import { render, cleanup } from '../testUtils';

describe('<Home />', () => {
  beforeEach(() => {
    axiosMock.reset();
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  it('should match <Home /> snapshot', () => {
    expect.hasAssertions();

    const { toJSON } = render(<Home />);

    expect(toJSON()).toMatchSnapshot();
  });

  it('should fire fetchPicture action on mount', () => {
    expect.hasAssertions();

    const pictureRepo = 'https://picsum.photos/v2/list';
    axiosMock.onGet(pictureRepo).reply(StatusCodes.OK, [{ download_url: pictureRepo }]);

    const { store } = render(<Home />);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: 'FETCH_PICTURE/fulfilled',
      payload: { picture: pictureRepo },
    });
  });
});
