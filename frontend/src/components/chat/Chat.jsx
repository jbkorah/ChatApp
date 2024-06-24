import React, { useRef, useState, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
const Chat = () => {
  const [open, SetOpen] = useState(false);
  const [text, setText] = useState("");
  const [chat, setChat] = useState();

  const { chatId } = useChatStore()
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "chats", chatId),
      (res) => {
        setChat(res.data());
      }
    );

    return () => {
      unSub();
    };
  }, [chatId]);

  console.log(chat);

  console.log(text);
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    SetOpen(false);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe </span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              neque doloribus ex quasi temporibus reprehenderit, recusandae
              minima, a voluptatem deleniti omnis doloremque rerum consequatur
              eius enim quibusdam voluptatum officia provident!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              neque doloribus ex quasi temporibus reprehenderit, recusandae
              minima, a voluptatem deleniti omnis doloremque rerum consequatur
              eius enim quibusdam voluptatum officia provident!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              neque doloribus ex quasi temporibus reprehenderit, recusandae
              minima, a voluptatem deleniti omnis doloremque rerum consequatur
              eius enim quibusdam voluptatum officia provident!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              neque doloribus ex quasi temporibus reprehenderit, recusandae
              minima, a voluptatem deleniti omnis doloremque rerum consequatur
              eius enim quibusdam voluptatum officia provident!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => SetOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
