import * as React from 'react'
import LogoAndFist from "./auth/LogoFist";
import FormBuilder from "./form/FormBuilder";
import * as Icons from './icons'
import Field from "./form/Field";

import ButtonGradient from "./buttons/ButtonGradient";


import BottomTab from "./bottomtab";
import HomeHeader from "./home_header";

import Location from "./home/Location";


// import BigCard from "./cards/BigCard";

// import OnGoingCarousel from "./event/OnGoingCarousel";
// import PastEventsVertical from "./event/PastEventsVertical";

import MessageCard from "./message/Card";
import ThreadCard from "./message/ThreadCard";
import MessageCustomTitle from "./message/MessageCustomTitle";



import KnockCard from "./cards/KnockCard";


import CountDownTimer from "./auth/CountDownTimer";



import Avatar from "./avatar";

import Attachments from "./profile/Attachments";





// const OtherComponent = React.lazy(() => import('../../../components/cards/BigCard'));
export const Utilities = {
    Icons: Icons,
    ButtonGradient: ButtonGradient,
    BottomTab: BottomTab,
    HomeHeader: HomeHeader,
    BigCard: React.lazy(() => import('./cards/BigCard')),
    CountDownTimer: CountDownTimer,
    KnockCard: KnockCard,
    Avatar: Avatar
}
export const AuthComponents = {
    LogoAndFist: LogoAndFist
}
export const FormComponents = {
    FormBuilder: FormBuilder,
    Field: Field
}

export const HomeComponents = {
    Location: Location
}


export const EventComponents = {
    OnGoingCarousel: React.lazy(() => import('./event/OnGoingCarousel')), //OnGoingCarousel,
    PastEventsVertical: React.lazy(() => import('./event/PastEventsVertical')), //PastEventsVertical
}

export const MessageComponents = {
    MessageCard: MessageCard,
    ThreadCard: ThreadCard,
    MessageCustomTitle: MessageCustomTitle
}

export const ProfileComponents = {
    Attachments: Attachments
}