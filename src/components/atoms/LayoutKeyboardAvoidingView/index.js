import React, {View} from 'react-native';

import {LayoutKeyboardAvoidingView, StyledScrollView} from './style';

const Index = ({children}) => {
  return (
    <LayoutKeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
      keyboardVerticalOffset={-230}
      behavior={'padding'}>
      <StyledScrollView style={{padding: 10}}>{children}</StyledScrollView>
    </LayoutKeyboardAvoidingView>
  );
};

export default Index;
