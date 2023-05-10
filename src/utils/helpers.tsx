import * as yup from 'yup';

export const getInitialValues = (fields: Field[], values: string[]) => {

    let initialVals: any = {};
    for (let i = 0; i < fields.length; i++) {
        initialVals[fields[i].key] = values && values[i] ? values[i] : "";
    }


    return initialVals;
};


export const getValidationScheema = (fields: Field[]) => {
    let initialVals: any = {};
    for (let i = 0; i < fields.length; i++) {
        switch (fields[i].type) {
            case "email":
                initialVals[fields[i].key] = yup.string().email();
                break;
            case "password":
                initialVals[fields[i].key] = yup.string().min(8);
                break;
            default:

                break;
        }
    }

    return yup.object(initialVals);
}


export const renderImage = () => {
    const Images = [
        { image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80' },
        { image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
        { image: 'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80' },
        { image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { image: 'https://images.unsplash.com/photo-1627483297929-37f416fec7cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
        { image: 'https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' },
        { image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },





    ];
    const randomImageIndex = Math.floor(Math.random() * Math.floor(Images.length));
    return Images[randomImageIndex].image;
};



export const renderName = () => {
    const Images = [
        { name: 'Oliver Charlotte' },
        { name: 'Elijah Amelia' },
        { name: 'James Ava' },
        { name: 'William Sophia' },
        { name: 'Benjamin Isabella' },
        { name: 'Lucas Mia' },
        { name: 'Henry Evelyn' },
        { name: 'Theodore Harper' },
        { name: 'Abigail Adeline' },





    ];
    const randomImageIndex = Math.floor(Math.random() * Math.floor(Images.length));
    return Images[randomImageIndex].name;
};



export const renderTimeNames = () => {
    const Images = [
        { name: 'Monday' },
        { name: 'Tuesday' },
        { name: 'Wednesday' },
        { name: 'Yesterday' },
        { name: 'Friday' },
        { name: 'Saturday' },
        { name: 'Sunday' },
        { name: '2 weeks ago' },
        { name: '1 year ago' },





    ];
    const randomImageIndex = Math.floor(Math.random() * Math.floor(Images.length));
    return Images[randomImageIndex].name;
};


export const renderParagraphs = () => {
    const Images = [
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute.' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing. A lacus vestibulum sed arcu.' },
        { name: 'Pellentesque id nibh tortor. Leo a diam sollicitudin tempor. Nibh ipsum consequat nisl vel pretium. Eu turpis egestas pretium aenean pharetra.' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do consectetur adipiscing elit, sed do' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst vestibulum.' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio tempor orci dapibus ultrices in iaculis. Neque volutpat.' },
        { name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { name: 'Ut etiam sit amet nisl purus in mollis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique.' },

    ];
    const randomImageIndex = Math.floor(Math.random() * Math.floor(Images.length));
    return Images[randomImageIndex].name;
};

export const renderEventName = () => {
    const Images = [
        { name: 'GET TOGETHER' },
        { name: 'NIGHT LIFE' },
        { name: 'EID CELEBRATION' },
        { name: 'INDEPENDANCE DAY' },
        { name: 'TRUTH AND DARE' },
        { name: 'MEET UP' },
        { name: 'GUITAR NIGHT' },
        { name: 'SWIMMING SESSIONS' },
        { name: 'BOOK READING' },

    ];
    const randomImageIndex = Math.floor(Math.random() * Math.floor(Images.length));
    return Images[randomImageIndex].name;
}; 