import React, {useState, useEffect} from 'react';

import Form from '../Form';
import Icon from '../Icon';

const Item = ({
    item = {
      author: 'noname',
      text: 'lorem ipsum'
    },
    removeFromList,
    updateFromList,
  }) => {
  const [isShowForm, handleShowForm] = useState(false);

  useEffect(() => {
    console.log('или маунт компоненты или кто-то нажал редактировать');
  }, [isShowForm]);

  useEffect(() => {
    handleShowForm(false);
  }, [item]);

  return (
    <li className="item">
      {
        isShowForm ? (
          <Form
            type="edit"
            item={item}
            addFromProps={updateFromList}
          />
        ) : (
          <>
            <header className="item__head">
              <h3 className="item__title">{item.author}</h3>
              <div className="item__action">
                <button
                  className="button button--small"
                  onClick={() => handleShowForm(!isShowForm)}
                >
                  <Icon name="edit"/>
                </button>
                <button
                  className="button button--small"
                  onClick={() => removeFromList(item.id)}
                >
                  <Icon name="delete"/>
                </button>
              </div>
            </header>
            <p>{item.text}</p>
          </>
        )
      }
    </li>
  );
}

export default Item;
