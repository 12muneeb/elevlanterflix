
export class NavEvents implements IService {
    private buttons: any = {}
    private inited = false;


    constructor() {

    }

    triggerButtonClick = (buttonId: event_type): void => {
        if (this.buttons[buttonId]) {
            this.buttons[buttonId]();
        }
    }

    registerButtonDelegate = (buttonId: event_type, delegate: any): void => {
        this.buttons[buttonId] = delegate;
    }

    init = async (): PVoid => {
        if (!this.inited) {
            // your code ...

            this.inited = true;
        }
    };
}
