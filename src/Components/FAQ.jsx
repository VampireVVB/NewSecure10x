import React, { useState } from 'react';

const data = [
    {
      id  : '1',
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id  : '2',
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id  : '3',
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id  : '4',
      question: "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
  ];

const FAQ = () => {
    const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  const getSymbol = (id) => (selected === id || multi.includes(id)) ? '-' : '+';

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div
        className="rounded-lg border-4 border-emerald-600 bg-transparent px-8 py-4 lg:w-[800px] md:w-[650px] max-md:w-fullx`"
      >
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="mb-4">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="flex items-center justify-between text-white px-4 py-2 hover:bg-emerald-900 cursor-pointer"
              >
                <h3>{dataItem.question}</h3>
                <span>{getSymbol(dataItem.id)}</span>
              </div>
              {enableMulti ? (
                multi.includes(dataItem.id) && (
                  <div className="text-white px-4 py-4 border-2 rounded-xl">{dataItem.answer}</div>
                )
              ) : (
                selected === dataItem.id && (
                  <div className="text-white px-4 py-4 border-2 rounded-xl">{dataItem.answer}</div>
                )
              )}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
