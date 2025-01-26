import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFeedback, deleteFeedback } from '../../redux/slices/feedbackSlice';
import './FeedbackList.css';

function FeedbackList() {
  const feedbacks = useSelector((state) => state.feedback);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [editHotelName, setEditHotelName] = useState('');
  const [editCity, setEditCity] = useState('');

  const handleEdit = (feedback) => {
    setEditId(feedback.id);
    setEditContent(feedback.content);
    setEditHotelName(feedback.hotelName);
    setEditCity(feedback.city);
  };

  const handleUpdate = (id) => {
    dispatch(updateFeedback({ id, content: editContent, hotelName: editHotelName, city: editCity }));
    setEditId(null);
    setEditContent('');
    setEditHotelName('');
    setEditCity('');
  };

  const handleDelete = (id) => {
    dispatch(deleteFeedback({ id }));
  };

  return (
    <div id="feedback-list">
      <h2>Feedback List</h2>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            {editId === feedback.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editHotelName}
                  onChange={(e) => setEditHotelName(e.target.value)}
                  placeholder="Hotel Name"
                />
                <input
                  type="text"
                  value={editCity}
                  onChange={(e) => setEditCity(e.target.value)}
                  placeholder="City"
                />
                <input
                  type="text"
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  placeholder="Feedback"
                />
                <button className="update-button" onClick={() => handleUpdate(feedback.id)}>Update</button>
              </div>
            ) : (
              <div className="feedback-item">
                <p><strong>Hotel:</strong> {feedback.hotelName}</p>
                <p><strong>City:</strong> {feedback.city}</p>
                <p><strong>Feedback:</strong> {feedback.content}</p>
              </div>
            )}
            <div className="buttons">
              {editId === feedback.id ? null : (
                <>
                  <button className="edit-button" onClick={() => handleEdit(feedback)}>Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(feedback.id)}>Delete</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FeedbackList;