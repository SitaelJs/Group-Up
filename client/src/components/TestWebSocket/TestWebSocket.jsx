import React, {useEffect, useRef} from 'react';
import {useState} from "react";
import useWebSocketLite from "../../webSocketHook";

const TestWebSocket = () => {


    const [messagesList, setMessagesList] = useState([
        <span>Messages will be displayed here</span>
    ]);
    const sendTag = (message) => <span>&#11014;: {message}</span>;
    const receiveTag = (message) => <span>&#11015;: {message}</span>;
    const txtRef = useRef();

    // use our hook
    const ws = useWebSocketLite({
        socketUrl: 'ws://localhost:3001'
    });

    // receive messages
    useEffect(() => {
        if (ws.data) {
            const { message } = ws.data;
            setMessagesList((messagesList) =>
                [].concat(receiveTag(message), messagesList)
            );
        }
    }, [ws.data]);

    // send messages
    const sendData = () => {
        const message = txtRef.current.value || '';
        if (message) {
            setMessagesList((messagesList) =>
                [].concat(sendTag(message), messagesList)
            );
            ws.send(message);
        }
    };
    console.log(txtRef?.current?.value)

    // a simple form
    return (
        <div>
            <div>Connection State: {ws.readyState ? 'Open' : 'Closed'}</div>

            <div>
                <form>
                    <label>Message (string or json)</label>
                    <textarea name='message' rows={4} ref={txtRef} />
                    <input type='button' onClick={sendData} value='Send' />
                </form>
            </div>

            <div style={{ maxHeight: 300, overflowY: 'scroll' }}>
                {messagesList.map((Tag, i) => (
                    <div key={i}>{Tag}</div>
                ))}
            </div>

        </div>
    );





};

export default TestWebSocket;
