export class PopupMessage {
    constructor(message) {
        this.message = message;
    }

    initialization() {
        this.$nodeMessage = this._createMessage(this.message);
        this._addMessageWrapper(this.$nodeMessage);
        this._deleteMessage(this.$nodeMessage);
    }
    _createMessage(textMessage, styleClass = 'popup-message_style-class') {
        const message = document.createElement('div');
        message.classList.add('popup-message', styleClass);
        message.innerHTML = textMessage;
        return message;
    }
    _addMessageWrapper(nodeMessage) {
        let messageWrap = document.querySelector('.message-wrapper');
        // Если нет контейнера для сообщений, то мы его создаём
        if (!messageWrap) {
            messageWrap = document.createElement('div');
            messageWrap.classList.add('message-wrapper');
            document.body.append(messageWrap);
        }
        // Добавили в контейнер сообщение, контейнер либо был, либо мы его создали
        messageWrap.append(nodeMessage);
    }
    _deleteMessage(nodeMessage, delayRemove = 3000) {
        // The promise will be in the state resolve through the 3 seconds 
        // During this time we are adding a class which will be fluently to hide our message
        // When the promise will be in the state resolve, will complete another setTimeout, it will remove the node of message off the page
        new Promise((resolve) => {
            setTimeout(() => {
                nodeMessage.classList.add('popup-message_hide');
                resolve(nodeMessage);
            }, delayRemove);
        }).then(nodeMessage => {
            setTimeout(() => {
                nodeMessage.remove();
                const allMessage = document.querySelectorAll('.popup-message');
                // Если сообщений больше нет, удаляем контейнер для них
                if (allMessage.length == 0) {
                    document.querySelector('.message-wrapper').remove();
                }
            }, 500);
        });
    }
}




