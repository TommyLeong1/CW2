import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MessageList.css';

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/api/messages')
      .then(res => setMessages(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="MessageList">
      <h1>Messages</h1>
      <ul>
        {messages.map(message => (
          <li key={message._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{message.name}</h5>
                <p className="card-text">{message.email}</p>
                <p className="card-text">{message.subject}</p>
                <Link to={`/messages/${message._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/messages/add" className="btn btn-primary">Add a Message</Link>
    </div>
  );
}

export default MessageList;