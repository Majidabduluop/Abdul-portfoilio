
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-900/30 transition hover:scale-105 hover:bg-violet-500"
      >
        {isOpen ? (
          <X size={25} />
        ) : (
          <MessageCircle size={25} />
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 h-[500px] w-[360px] overflow-hidden rounded-2xl border border-white/10 bg-[#11111b] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 p-4">
            <div>
              <h2 className="font-semibold text-white">
                AI Assistant
              </h2>
              <p className="text-xs text-gray-400">
                Ask me anything about Abdul
              </p>
            </div>

            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>

          <div className="p-4 text-sm text-gray-300">
            Hi! I'm Abdul's AI assistant. How can I help you??
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
