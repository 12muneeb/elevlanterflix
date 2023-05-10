import { generateRNNScreens } from 'rnn-screens';
import { gestureHandlerRootHOC as withGestureHandler } from 'react-native-gesture-handler';

import { withStores } from '../stores';
import { withServices, services } from '../services';
import { Utilities } from '../components'
import { withBottomTab, withLefttButtons, withRightButtons, withTitle } from '../services/navigation/options';

import { Main } from './main';
import { Settings } from './settings';
import { Example } from './screen-sample';


import AuthPages from './auth';
import { DashboardPages } from './flow';

import { theme } from '../utils/constants';
import { OptionsTopBar } from 'react-native-navigation';
import { misc } from '../../assets/images';

const showHeader = (title: string, color: string, leftButton: { id: event_type, name: eventName } | undefined, rightButton: { id: event_type, name: eventName } | undefined) => {

  let conf: OptionsTopBar = {
    visible: true,
    drawBehind: false,
    title: {
      text: title,
      color: color,
      fontFamily: theme.fontRegulars.semibold,
      alignment: "center",
      fontSize: 19
    },
    largeTitle: {
      visible: false
    },
    background: {
      color: theme.colors.formred
    },
    noBorder: true,
  };


  if (leftButton) {
    conf.leftButtons = [
      {
        id: leftButton.id,
        component: {
          name: leftButton.name,
          width: 40,
          height: 40,
          passProps: {
            id: leftButton.id,
          }
        }
      }
    ]
  }

  if (rightButton) {
    conf.rightButtons = [
      {
        id: rightButton.id,
        component: {
          name: rightButton.name,
          width: 40,
          height: 40,
          passProps: {
            id: rightButton.id,
          }
        }
      }
    ]
  }


  return conf as OptionsTopBar;
}

// Describe your screens here
export const screens = generateRNNScreens(
  {
    Login: () => ({
      component: AuthPages.Login,
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
          background: {
            color: theme.colors.backdrop,
          },
          noBorder: true,
          height: 10
        },
        statusBar: {
          backgroundColor: theme.colors.backdrop,
        }
      }
    }),
    PreLogin: () => ({
      component: AuthPages.PreLogin,
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
          background: {
            color: theme.colors.backdrop,
          },
          noBorder: true,
          height: 10
        },
        statusBar: {
          backgroundColor: theme.colors.backdrop,
        }
      }
    }),
    ForgotPassword: () => ({
      component: AuthPages.ForgotPassword,
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
          background: {
            color: theme.colors.backdrop,
          },
          noBorder: true,
          height: 10
        },
        statusBar: {
          backgroundColor: theme.colors.backdrop,
        }
      }
    }),
    ResetPassword: () => ({
      component: AuthPages.ResetPassword,
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
          background: {
            color: theme.colors.backdrop,
          },
          noBorder: true,
          height: 10
        },
        statusBar: {
          backgroundColor: theme.colors.backdrop,
        }
      }
    }),
    Verification: () => ({
      component: AuthPages.Verification,
      options: {
        topBar: {
          visible: false,
          drawBehind: true,
          background: {
            color: theme.colors.backdrop,
          },
          noBorder: true,
          height: 10
        },
        statusBar: {
          backgroundColor: theme.colors.backdrop,
        }
      }
    }),
    Signup: () => ({
      component: AuthPages.Signup,
      options: {
        topBar: {
          visible: true,
          drawBehind: true,
          title: {
            text: "CREATE NEW ACCOUNT",
            fontFamily: theme.fontHeadings.bold,
            fontSize: 25,
            color: theme.colors.white,
          },
          largeTitle: {
            visible: false
          },
          backButton: {
            color: theme.colors.white,
            title: "",
          },
          background: {
            color: theme.colors.backdrop,
          },
          noBorder: true,
        },
        statusBar: {
          backgroundColor: theme.colors.backdrop,
        }
      }
    }),
    Home: () => ({
      id: "HomeComponent",
      component: DashboardPages.Home,
      options: {
        topBar: showHeader("WHO'S HERE", theme.colors.white, {
          id: "filters",
          name: "Talk"
        }, {
          id: "messages",
          name: "Talk"
        }),
        statusBar: {
          backgroundColor: theme.colors.formred,
        }
      }
    }),
    Messages: () => ({
      component: DashboardPages.Messages,
      options: {
        topBar: showHeader("MESSAGES", theme.colors.white, undefined, undefined),
        statusBar: {
          backgroundColor: theme.colors.formred,
        }
      }
    }),
    MessageThread: () => ({
      component: DashboardPages.MessageThread,
      options: {
        topBar: {
          ...showHeader("Melissa", theme.colors.white, undefined, undefined),
          title: {
            height: 80,
            component: {
              name: 'MessageCustomTitle',
              alignment: "fill",

            },
          },
          height: 85,
          backButton: {
            color: theme.colors.borderorange
          }
        },
        statusBar: {
          backgroundColor: theme.colors.formred,
        }
      }
    }),
    Events: () => ({
      component: DashboardPages.Events,
      options: {
        topBar: showHeader("EVENTS", theme.colors.white, undefined, {
          id: "calender",
          name: "Talk"
        }),
        statusBar: {
          backgroundColor: theme.colors.formred,
        }
      }
    }),
    Search: () => ({
      component: DashboardPages.Search,
      options: {
        topBar: showHeader("SEARCH", theme.colors.white, undefined, undefined),
        statusBar: {
          backgroundColor: theme.colors.formred,
        }
      }
    }),
    Profile: () => ({
      component: DashboardPages.Profile,
      options: {
        topBar: showHeader("PROFILE", theme.colors.white, undefined, {
          id: "settings",
          name: "Talk"
        }),
        statusBar: {
          backgroundColor: theme.colors.formred,
        }
      }
    }),
    Knocks: () => ({
      component: DashboardPages.Knocks,
      options: {
        topBar: {
          backButton: {
            color: theme.colors.white
          },
          title: {
            text: "KNOCKS",
            color: theme.colors.white,
            fontFamily: theme.fontRegulars.semibold,
            alignment: "center",
            fontSize: 19

          }
        },
        statusBar: {
          backgroundColor: theme.colors.backdrop,
        }
      }
    }),
    EditProfile: () => ({
      component: DashboardPages.EditProfile,
      options: {
        topBar: {
          backButton: {
            color: theme.colors.white
          },
          title: {
            text: "EDIT PROFILE",
            color: theme.colors.white,
            fontFamily: theme.fontRegulars.semibold,
            alignment: "center",
            fontSize: 19

          }
        },
        statusBar: {
          backgroundColor: theme.colors.backdrop,
        }
      }
    }),
    // Main: () => ({
    //   component: Main,
    //   options: {
    // topBar: {
    //   ...withTitle(services.t.do('home.title')),
    //   ...withRightButtons('inc', 'dec'),
    // },
    // ...withBottomTab('Main', 'newspaper'),
    //   },
    // }),
    // Settings: {
    //   component: Settings,
    //   options: {
    // topBar: {
    //   ...withTitle('Settings'),
    // },
    //     ...withBottomTab('Settings', 'settings'),
    //   },
    // },

    // Example: () => ({
    //   component: Example,
    //   options: {
    //     topBar: {
    //       ...withTitle(services.t.do('example.title')),
    //     },
    //     ...withBottomTab('Example', 'construct'),
    //   },
    // }),
  },
  [withGestureHandler, withStores, withServices],
);
