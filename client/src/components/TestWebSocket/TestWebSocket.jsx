import React, {useEffect} from 'react';

const TestWebSocket = () => {




    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3001/')
        console.log(socket)
        socket.onopen = function (e) {
            socket.send(
                JSON.stringify({
                    type: 'CHAT_CONNECT',
                    payload: 'Privet'
                })
            );
        }
    }, [])
    return (
        <div>

        </div>
    );
};

export default TestWebSocket;
