interface IService {
  init: () => PVoid;
}
type Services = Record<string, IService>;

interface IStore {
  hydrate?: () => PVoid;
}
type Stores = Record<string, IStore>;

type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;

type DesignSystemColors = Record<string, string>;
type AppearanceMode = 'light' | 'dark';
type StatusBarStyle = 'light' | 'dark' | undefined;
type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
};

type Language = 'en' | 'ru';

// SERVICES
type AppType = 'one_screen' | 'three_tabs';

// STORES
type UIAppearance = 'System' | 'Light' | 'Dark';
type UILanguage = 'System' | 'English' | 'Russian';

// SCREENS
// Props
type ExampleScreenProps = {
  value?: number;
};

// Settings
type AppearanceAction = {
  name: UIAppearance;
};

type LanguageAction = {
  name: UILanguage;
};

// API
// Responses
type CounterGetResponse = {
  value: number;
};


type FieldType = "password" | "email" | "string" | "phone" | "button" | "button_gradient" | "otp"
type Field = {
  placeHolder: string;
  icon: () => {};
  key: string;
  type: FieldType;
  secure: boolean | undefined;
  error: string;
  floating?: string;
  masked?: boolean;
  mask?: string;
  gadients?: string[];
  fontColor?: string;
  disabled?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  multiline?: boolean | undefined,
  borderRadius?: number;
};

type ActionKeys = "forgetpass" | "signup"
type Actions = {
  title: string;
  key: ActionKeys;
};

type SecActions = {
  title: string;
  key: ActionKeys;
  action: string;
};

type PageConfigurations = {
  title: string;
  actionText: string;
  fields: Field[];
  secondaryActions?: Actions[];
  bottomActions?: SecActions[];
  key: string;
}

type event_type = "messages" | "filters" | "back" | "calender" | "settings"
type eventName = "Talk";