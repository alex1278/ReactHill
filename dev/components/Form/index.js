import React, { useState } from 'react';

const Form = ({ item = {}, type = '', addFromProps }) => {
    const [name, setName] = useState(item.author || '');
    const [text, setText] = useState(item.text || '');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'name') {
            setName(value);
        } else {
            setText(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            id: item.id || Date.now(),
            author: name,
            text,
        };

        addFromProps(data);
        setName('');
        setText('');
    }

    return (
        <form
          className={`form ${type}`}
          onSubmit={handleSubmit}
        >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
            />

            <label htmlFor="text">Comment</label>
            <textarea
              name="text"
              id="text"
              value={text}
              onChange={handleChange}
            />

            <button className="button">post</button>
        </form>
    );
};

export default Form;