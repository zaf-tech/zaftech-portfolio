"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const WELCOME_MESSAGE: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I am Zaftech's AI assistant. I can help with our services, implementation approach, and next steps. How can I help?",
};

function getSessionId(): string {
  if (typeof window === "undefined") {
    return "server";
  }

  const existing = window.localStorage.getItem("zaftech_chat_session");
  if (existing) return existing;

  const value = `session_${crypto.randomUUID()}`;
  window.localStorage.setItem("zaftech_chat_session", value);
  return value;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [isSending, setIsSending] = useState(false);
  const [sessionId, setSessionId] = useState("client");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setSessionId(getSessionId());
  }, []);

  const disableSend = useMemo(() => {
    return isSending || !input.trim();
  }, [input, isSending]);

  async function sendMessage(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || isSending) {
      return;
    }

    const userMessage: ChatMessage = { role: "user", content: text };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setErrorMessage(null);
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          sessionId,
          history: nextMessages.slice(-8),
        }),
      });

      const payload = (await response.json()) as { reply?: string; error?: string };

      if (!response.ok) {
        const errorReply = payload.error ?? "The assistant is unavailable right now.";
        setErrorMessage(errorReply);
        return;
      }

      const assistantReply = payload.reply?.trim() || "I can help with Zaftech services and consultation booking.";
      setMessages((prev) => [...prev, { role: "assistant", content: assistantReply }]);
    } catch {
      setErrorMessage("Unable to reach the chat service. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-[22rem] sm:w-[24rem] rounded-2xl border border-blue-400/30 bg-slate-900/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-blue-400/20 px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-blue-200">Zaftech Assistant</p>
              <p className="text-xs text-blue-300/70">Answers about services and implementation</p>
            </div>
            <button
              type="button"
              className="rounded-md px-2 py-1 text-blue-200 hover:bg-blue-500/20"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              x
            </button>
          </div>

          <div className="h-80 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, idx) => (
              <div
                key={`${message.role}-${idx}`}
                className={message.role === "assistant" ? "mr-8" : "ml-8"}
              >
                <div
                  className={
                    message.role === "assistant"
                      ? "rounded-xl border border-blue-400/30 bg-blue-500/10 px-3 py-2 text-sm text-blue-100"
                      : "rounded-xl bg-blue-500 px-3 py-2 text-sm text-white"
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          {errorMessage ? (
            <div className="px-4 pb-2 text-xs text-rose-300">{errorMessage}</div>
          ) : null}

          <form className="border-t border-blue-400/20 px-4 py-3" onSubmit={sendMessage}>
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about pricing, process, or services"
                className="flex-1 rounded-lg border border-blue-400/30 bg-slate-800 px-3 py-2 text-sm text-blue-100 placeholder:text-blue-300/50 focus:border-blue-300 focus:outline-none"
              />
              <button
                type="submit"
                disabled={disableSend}
                className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "..." : "Send"}
              </button>
            </div>
            <p className="mt-2 text-[11px] text-blue-300/60">
              By using chat, you agree that limited conversation data may be logged for service quality.
            </p>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        className="ml-auto mt-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/40 transition hover:scale-105"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open chat"
      >
        Chat
      </button>
    </div>
  );
}
