import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { chatbotDataset, cannedMessages, getContextualResponse } from '../data/chatbotDataset';

type Message = { role: 'user' | 'assistant'; text: string };

function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: cannedMessages[0] },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
  const listEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/• /g, '• ')
      .replace(/^- /gm, '• ')
      .replace(/\n/g, '<br/>');
  };

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg: Message = { role: 'user', text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput('');

    // Show typing indicator
    setIsTyping(true);
    setLoading(true);

    // Try contextual response first
    const contextualResponse = getContextualResponse(userMsg.text);
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    if (!apiKey) {
      setMessages((m) => [...m, { role: 'assistant', text: 'I can provide basic information about Sushil, but for AI-powered responses, please set VITE_GEMINI_API_KEY. ' + contextualResponse }]);
      setIsTyping(false);
      setLoading(false);
      return;
    }

    try {
      // Create enhanced prompt with dataset context
      const enhancedPrompt = `You are Sushil's AI assistant. Here's information about Sushil:

${JSON.stringify(chatbotDataset, null, 2)}

User question: ${userMsg.text}

Provide a helpful response based on Sushil's background, projects, and services. Be conversational and professional. Use markdown formatting with **bold** for headers, • for bullet points, and proper line breaks for readability.`;

      const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            { parts: [{ text: enhancedPrompt }] }
          ]
        })
      });
      const data = await res.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || contextualResponse;
      setMessages((m) => [...m, { role: 'assistant', text }]);
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', text: contextualResponse }]);
    } finally {
      setIsTyping(false);
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-black text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-40"
        aria-label="Open AI Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white border rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold text-lg">AI Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`max-w-[80%] p-3 rounded text-sm ${m.role === 'user' ? 'bg-black text-white ml-auto' : 'bg-gray-100'}`}>
                {m.role === 'assistant' ? (
                  <div 
                    className="whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: formatMessage(m.text) }}
                  />
                ) : (
                  <div className="whitespace-pre-line">{m.text}</div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="max-w-[80%] p-3 rounded text-sm bg-gray-100">
                <div className="flex items-center space-x-1">
                  <span>AI is thinking</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={listEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills, pricing..."
                className="flex-1 border rounded px-3 py-2 text-sm"
                disabled={loading}
              />
              <button 
                disabled={loading || !input.trim()} 
                className="px-3 py-2 bg-black text-white rounded disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default FloatingChatbot;


