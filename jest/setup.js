import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: ({ children }) => children,
    Swipeable: jest.fn(),
    DrawerLayout: jest.fn(),
    State: {},
    PanGestureHandler: jest.fn(),
    TapGestureHandler: jest.fn(),
    FlingGestureHandler: jest.fn(),
    ForceTouchGestureHandler: jest.fn(),
    LongPressGestureHandler: jest.fn(),
    NativeViewGestureHandler: jest.fn(),
    PinchGestureHandler: jest.fn(),
    RotationGestureHandler: jest.fn(),
  };
});
