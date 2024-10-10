// GestureHandlerWithRef.js
import React, { forwardRef } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';

const GestureHandlerWithRef = forwardRef((props, ref) => (
  <PanGestureHandler ref={ref} {...props} />
));

export default GestureHandlerWithRef;
