import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

import { Button, Image } from '~/components/ui';
import { nextIcon } from '~/resources';

export { Text, Box, Button, IconButton } from '~/components/ui';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const LeftButton = styled(Button).attrs({
  variant: 'text',
  textProps: { color: 'white', fontStyle: 'regular', fontSize: 17 },
  pl: 15,
})`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { backgroundColor: 'white' },
})`
  flex: 1;
`;

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const RightArrow = styled(Image).attrs({
  source: nextIcon,
  tintColor: 'veryDarkGray',
})`
  width: 10px;
  aspect-ratio: ${7 / 12};
  opacity: 0.2;
`;
