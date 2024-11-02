import { useState } from 'react';

function CreateQA() {
  const [faqs, setFaqs] = useState([
    { question: "What is React?", answer: "React is a JavaScript Library." },
    { question: "Why is React useful?", answer: "React is very flexible and it makes building apps very easy." },
    { question: "What is useState()?", answer: "It's a hook that allows us to track state in a function component." }
  ]);

  const [newQuestion, setNewQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setNewQuestion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedFaqs = [...faqs, { question: newQuestion, answer: "Answer pending..." }];
    setFaqs(updatedFaqs);
    setNewQuestion(''); // Clear the input field after submission
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={handleQuestionChange}
          value={newQuestion}
          className="AddQ"
          placeholder="Add your question..."
        />
        <button type='submit' className="AddButton">
          Add
        </button>
      </form>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <strong>Q:</strong> {faq.question} <br />
            <strong>A:</strong> {faq.answer}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CreateQA;
