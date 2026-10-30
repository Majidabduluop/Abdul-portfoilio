
function ChatWindow() {
  return (
    <div className="flex h-full flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between border-b border-white/10 p-4">
        <div>
          <h2 className="font-semibold text-white">AI Assistant</h2>
          <p className="text-xs text-gray-400">
            Ask me anything about Abdul
          </p>
        </div>

        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
      </div>

      {/* Welcome Message */}
      <div className="flex-1 p-4">
        <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-white/10 p-3 text-sm text-gray-200">
          Hi! I'm Abdul's AI assistant. I can answer questions
          about his skills, experience, and projects.
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
