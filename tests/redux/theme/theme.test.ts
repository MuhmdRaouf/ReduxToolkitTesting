import { toggleTheme } from '../../../src/redux/theme/actions';
import { themeReducer, initialState } from '../../../src/redux/theme/reducer';

describe('Theme', () => {
  it('should return the initial state', () => {
    expect.hasAssertions();
    expect(initialState).toStrictEqual(themeReducer(undefined, {}));
  });

  it('should toggle theme state', () => {
    expect.hasAssertions();

    const EXPECTED_STATE = { ...initialState, isDark: !initialState.isDark };

    expect(EXPECTED_STATE).toStrictEqual(themeReducer(initialState, toggleTheme()));
  });
});
