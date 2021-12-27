import faker from 'faker';
import { StatusCodes } from 'http-status-codes';

import { fetchPicture, deletePicture } from '../../../src/redux/gallery/actions';
import { galleryReducer, initialState } from '../../../src/redux/gallery/reducer';
import { axiosMock } from '../../mockedAxios';

describe('Gallery', () => {
  beforeEach(() => {
    axiosMock.reset();
  });

  it('should return the initial state', () => {
    expect.hasAssertions();
    expect(initialState).toStrictEqual(galleryReducer(undefined, {}));
  });

  it('should set new picture url', () => {
    expect.hasAssertions();

    const pictureRepo = 'https://picsum.photos/v2/list';
    const picture = faker.datatype.uuid();
    const EXPECTED_STATE = { ...initialState, picture };

    axiosMock.onGet(pictureRepo).reply(StatusCodes.OK, picture);

    expect(EXPECTED_STATE).toStrictEqual(galleryReducer(initialState, fetchPicture({ pictureRepo })));
  });

  it('should set api error on picture fetch failure', () => {
    expect.hasAssertions();

    const pictureRepo = 'https://picsum.photos/v2/broke-link';
    const fetchErrorMessage = 'Picture fetch error';
    const EXPECTED_STATE = { ...initialState, fetchErrorMessage };

    axiosMock.onGet(pictureRepo).reply(StatusCodes.UNAUTHORIZED, { fetchErrorMessage });

    expect(EXPECTED_STATE).toStrictEqual(galleryReducer(initialState, fetchPicture({ pictureRepo })));
  });

  it('should set picture URL to placeholder url', () => {
    expect.hasAssertions();

    const picture = 'Placeholder Picture';
    const STATE = { ...initialState, picture: faker.datatype.uuid() };
    const EXPECTED_STATE = { ...initialState, picture };

    expect(EXPECTED_STATE).toStrictEqual(galleryReducer(STATE, deletePicture(picture)));
  });
});
