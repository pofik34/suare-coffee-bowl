import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { MessageCircle, X, Send, Info, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AiBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Merhaba! Suare Coffee hakkında merak ettiklerinizi, menümüzü veya kahve çekirdeklerimizi bana sorabilirsiniz.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Pass the last few messages for context
      const responseText = await sendMessageToGemini(
        userMsg.text, 
        messages.slice(-5) // Keep context somewhat short for this demo
      );
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Üzgünüm, bir hata oluştu." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-coffee-200 flex flex-col h-[500px] transition-all duration-300 ease-in-out origin-bottom-right">
          {/* Header */}
          <div className="bg-coffee-800 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-full">
                <Info size={18} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Suare Asistan</h3>
                <p className="text-xs text-coffee-100">Bilgi Hattı</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-coffee-50 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-coffee-600 text-white rounded-br-none'
                      : 'bg-white text-coffee-900 border border-coffee-100 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-coffee-100 shadow-sm flex items-center gap-2">
                  <Loader2 className="animate-spin text-coffee-500" size={16} />
                  <span className="text-xs text-coffee-400">Yanıtlanıyor...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-coffee-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Örn: Kahveleriniz taze mi?"
              className="flex-1 bg-coffee-50 border border-coffee-200 text-coffee-900 text-sm rounded-full px-4 py-2 focus:outline-none focus:border-coffee-500 focus:ring-1 focus:ring-coffee-500"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="bg-coffee-600 hover:bg-coffee-700 disabled:opacity-50 text-white p-2 rounded-full transition-colors flex-shrink-0"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        } transition-all duration-300 bg-coffee-800 hover:bg-coffee-700 text-white p-4 rounded-full shadow-xl flex items-center gap-2 group`}
      >
        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
        <span className="font-serif font-medium pr-2">Sorularınız?</span>
      </button>
    </div>
  );
};

export default AiBarista;