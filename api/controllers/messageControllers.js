const express = require("express");
const mongoose = require("mongoose");
const Message = require("../../models/Message");
const User = require("../../models/User");

// create a new message

const postMessage = async (req, res) => {
  try {
    if (req.body.username === undefined)
      return res.json({
        msg: "you are not signed in to post a message, please sign in/sign up"
      });
    const user = await User.find({ userName: req.body.username }); // check to see if i'm signed in before posting a message
    if (user.length === 0) {
      return res.json({ msg: "username does not exist" });
    }
    const newMessage = await Message.create(req.body);
    return res.json({ msg: "Message posted successfully!!", data: newMessage });
  } catch (error) {
    console.error(error);
  }
};

// edit message
const editMessage = async (req, res) => {
  try {
    message = await Message.findById(req.params.id);
    if (!message) return res.json({ msg: "this message does not exist" });
    else {
      if (req.body.username === undefined)
        return res.json({
          msg: "you are not signed in to edit a message, please sign in/sign up"
        });
      const user = req.body.username; // get username of signed in user to access editing of message
      if (message.username !== user)
        return res.json({ msg: "you can only edit your own message" });
      else {
        const updatedMessage = await Message.findByIdAndUpdate(
          req.params.id,
          req.body
        );
        return res.json({
          msg: "Message updated successfully",
          data: updatedMessage
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
};

// get all messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find(); // will be used to show all messages on the website
    if (messages.length === 0)
      return res.json({ msg: "no messages posted yet" });
    else return res.json({ data: messages });
  } catch (error) {
    console.error(error);
  }
};

// delete a message
const deleteMessage = async (req, res) => {
  try {
    if (req.body.username === undefined)
      return res.json({ msg: "you are not signed in to delete a message" });
    const user = req.body.username;
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.json({ msg: "this message does not exist" });
    }

    if (message.username !== user)
      return res.json({ msg: "you can only delete your own message" });
    const deletedMessage = await Message.findByIdAndRemove(req.params.id);
    return res.json({
      msg: "Message deleted successfully",
      data: deletedMessage
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  postMessage,
  editMessage,
  getAllMessages,
  deleteMessage
};
