import 'react-native-gesture-handler';
import {registerRootComponent} from 'rnn-screens';

import {SingleScreenApp, beforeStart} from './App';

registerRootComponent(SingleScreenApp, {beforeStart});
