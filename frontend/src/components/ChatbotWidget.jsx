import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Bot, User } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/chat", {
        query: input,
      });

      const botReply = { role: "assistant", content: response.data.answer };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorReply = {
        role: "assistant",
        content: "Sorry, I couldn't process your request right now.",
      };
      setMessages((prev) => [...prev, errorReply]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 z-50"
      >
        💬
      </button>

      {/* Chatbox */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-xl shadow-lg border flex flex-col overflow-hidden z-50">
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
            Legal Assistant
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`flex items-start gap-2 max-w-[75%] p-3 rounded-lg text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.role === "assistant" ? <Bot size={18} /> : <User size={18} />}
                  <span>{msg.content}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 bg-gray-100 text-gray-800 p-3 rounded-lg text-sm max-w-[75%]">
                  <Bot size={18} />
                  <Typewriter words={["Typing..."]} loop={1} cursor />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="p-2 border-t">
            <textarea
              rows={1}
              className="w-full p-2 border rounded text-sm resize-none focus:outline-none"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
