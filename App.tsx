import { LogBox } from 'react-native';
import { BottomTabs, Screen, Root } from 'rnn-screens';
import { MessageComponents, Utilities } from './src/components';
import TalkButton from './src/components/header_buttons/Talk';

import { screens } from './src/screens';
import { initServices } from './src/services';
import { hydrateStores } from './src/stores';
import { theme } from './src/utils/constants';
import { configureDesignSystem } from './src/utils/designSystem';

LogBox.ignoreLogs([
  'EventEmitter.removeListener',
  '`new NativeEventEmitter()`',
  '[react-native-gesture-handler] Seems like', // https://github.com/software-mansion/react-native-gesture-handler/issues/1831
]);

export const beforeStart = async (): PVoid => {
  // 1. hydrate stores
  await hydrateStores();

  // 2. configure design system
  await configureDesignSystem();

  // 3. init services
  await initServices();
};

export const App = () => Root(Screen(screens.get('Home'))); // or Root(Stack(Component(screens.get('Main'))))
export const TabsApp = () => {
  screens.N.registerComponent("BottomTabComponent", () => Utilities.BottomTab);
  screens.N.registerComponent("Talk", () => TalkButton);
  screens.N.registerComponent("MessageCustomTitle", () => MessageComponents.MessageCustomTitle);

  screens.N.setRoot(
    Root(BottomTabs([Screen(screens.get('Search')), Screen(screens.get('Events')), Screen(screens.get('Home')), Screen(screens.get("Messages")), Screen(screens.get("Profile"))], {
      bottomTabs: { tabsAttachMode: "together", drawBehind: true, currentTabIndex: 2 }
    }))
  );

  screens.N.showOverlay({
    component: {
      name: "BottomTabComponent",
      options: {
        layout: {
          componentBackgroundColor: "transparent"
        },
        overlay: {
          interceptTouchOutside: false,
          handleKeyboardEvents: true
        },
      }
    },
  })
};


export const SingleScreenApp = () => Root(Screen(screens.get("PreLogin")));
