import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

export default function CodeBlock({ code, language = 'javascript', title }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-lang">{title || language}</span>
        <button className="code-block-copy" onClick={handleCopy}>
          {copied ? <><FiCheck size={12} /> 복사됨</> : <><FiCopy size={12} /> 복사</>}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}
