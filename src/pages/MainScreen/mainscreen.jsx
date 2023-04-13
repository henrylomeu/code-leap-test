import React, { useState } from "react";
import "./index.css";
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

function MainScreen({ username }) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [cards, setCards] = useState([
    {
      title: "My First Post at CodeLeap Network!",
      content: "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.",
      username: "Victor",
      time: Date.now() - 25 * 60 * 1000,
    },
    {
      title: "My Second Post at CodeLeap Network!",
      content: "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.",
      username: "Vini",
      time: Date.now() - 40 * 60 * 1000,
    },
  ]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleOpenDeleteModal = (index) => {
    setSelectedCardIndex(index);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleOpenEditModal = (index) => {
    setSelectedCardIndex(index);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  const handleCreateCard = () => {
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");
  
    if (titleInput.value === "" || contentInput.value === "") {
      alert("Please fill in both the title and content fields.");
      return;
    }
  
    const currentTime = Date.now();
  
    const newCard = {
      title: titleInput.value,
      content: contentInput.value,
      username: username,
      time: currentTime,
    };
  
    setCards([newCard, ...cards]);
    titleInput.value = "";
    contentInput.value = "";
  };

  const handleDeleteCard = () => {
    setCards(cards.filter((_, index) => index !== selectedCardIndex));
    setSelectedCardIndex(null);
    setOpenDeleteModal(false);
  };

  const handleSaveCard = () => {
    const titleInput = document.getElementById("edit-title");
    const contentInput = document.getElementById("edit-content");

    const updatedCard = {
      ...cards[selectedCardIndex],
      title: titleInput.value,
      content: contentInput.value,
    };
    
    const updatedCards = [...cards];
    updatedCards[selectedCardIndex] = updatedCard;
    setCards(updatedCards);

    setSelectedCardIndex(null);
    setOpenEditModal(false);
  };

  return (
    <div className="main-screen-container">
       <div class="header">
         CodeLeap Network
      </div>
      <div className="main-screen-card">
        <h2 className="title" style={{ backgroundColor: "white", color:'black',fontStyle: 'normal',fontWeight: '700',fontSize: '22px',lineHeight: '26px'}}>What's on your mind?</h2>
        <label htmlFor="title" style={{  fontWeight: '400',  fontSize: '16px',  lineHeight: '19px'}}>Title:</label>
        <input type="text" id="title" name="title" placeholder="Hello world"/>
        <label htmlFor="content" style={{  fontWeight: '400',  fontSize: '16px', lineHeight: '19px'}}>Content:</label>
        <textarea id="content" name="content" rows="8" style={{height: '74px'}} placeholder="Content here"/>
        <button onClick={handleCreateCard} className="create-button">Create</button>
      </div>

      {cards.map((card, index) => (
  <div className="main-screen-card" key={index}>
    <h2 style={{ margin: '-16px -16px 16px'}}>{card.title}</h2>
    <div className="card-footer">
      <p>@{card.username}</p>
      <p>{moment(card.time).fromNow()}</p>
    </div>
    <p style={{ fontWeight: 'bold',fontStyle: 'normal',fontWeight:' 400',fontSize: '18px',lineHeight: '21px' }}>{card.content}</p>
    <span className="icon-trash" onClick={() => handleOpenDeleteModal(index)}>🗑️</span>
    <span className="icon-pencil" onClick={() => handleOpenEditModal(index)}>✏️</span>
  </div>
))}

      {openDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <p className="modal-text">Are you sure you want to delete this card?</p>
            <button onClick={handleDeleteCard} className="delete-button">Delete</button>
            <button onClick={handleCloseDeleteModal} className="cancel-button">Cancel</button>
          </div>
        </div>
      )}

      {openEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 style={{ backgroundColor: "white", color:'black',fontStyle: 'normal',fontWeight: '700',fontSize: '22px',lineHeight: '26px'}}>Edit Item</h2>
            <label htmlFor="edit-title"style={{  fontWeight: '400',  fontSize: '16px',  lineHeight: '19px', marginBottom:'10px',}}>Title:</label>
            <input type="text" id="edit-title" name="edit-title" placeholder="Hello world"/>
            <label htmlFor="edit-content"style={{  fontWeight: '400',  fontSize: '16px', lineHeight: '19px',marginBottom:'10px',}}>Content:</label>
            <textarea id="edit-content" name="edit-content" rows="8" style={{height: '74px'}} placeholder="Content here"/>
            <button onClick={handleSaveCard} className="save-button">Save</button>
            <button onClick={handleCloseEditModal} className="cancel-button">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainScreen;