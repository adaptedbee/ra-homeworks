'use strict';

function MessageHistory(props) {
  const { list } = props;

  if (list.length === 0) {
    return null;
  }

  return (
    <ul>
      {list.map((message) => {
        let Component;
        if (message.type === 'message') {
          Component = Message;
        } else if (message.type === 'response') {
          Component = Response;
        } else if (message.type === 'typing') {
          Component = Typing;
        }

        return <Component from={message.from} message={message} />
      })}
    </ul>
  );
}
