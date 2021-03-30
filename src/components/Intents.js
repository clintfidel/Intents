import React, { useState } from "react";
import IntentCard from "./IntentCards";
import { intentsData } from "../utils";

const Intents = () => {
  const [checkedItems , setCheckedItems] = useState([])
  const onCheckItems = (id) => {
    setCheckedItems([...checkedItems, id])
  }

  const removeCheckedItems = (id) => {
    const indexId = checkedItems.indexOf(id);
    if(indexId > -1) {
      checkedItems.splice(indexId, 1)
      setCheckedItems([...checkedItems])
    }
  }

  const toggleChecked = (id) => {
    if(checkedItems.includes(id)) {
      removeCheckedItems(id)
    }
    else {
      onCheckItems(id)
    }
  }

  const checkAll = () => {
    if(checkedItems.length === intentsData.length) {
      setCheckedItems([])
    }
    else {
      setCheckedItems(intentsData.map(value => value.id))
    }
  }
  return (
    <div>
      <div>
        <nav className="bg-mute shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                  <h1 className="text-3xl font-bold text-gray-900">Intents</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div class="">
                <div className="flex w-full my-label-cont">
                  <input onChange={checkAll} className="mt-1 my-input" checked={checkedItems.length === intentsData.length} type="checkbox" />
                  <label className="font-customBarlow text-bold my-label ml-4 w-24"> Check All</label>
                </div>
              </div>
              <div className="block h-50 gap-2 md:grid lg:grid md:grid-cols-3 lg:grid-cols-3 md:gap-4 lg:gap-4 mt-6">
                {intentsData.map((intent, index) => (
                  <div key={intent.id}>
                    {console.log(intent.isChecked, 'value')}
                    <IntentCard
                      onChange={() => toggleChecked(intent.id)}
                      checked={checkedItems.includes(intent.id)}
                      name={intent.name}
                      id={intent.id}
                      colorCode={intent.colorCode}
                      expression={intent.trainingData.expressions && intent.trainingData.expressions}
                      expressionType={intent.name}
                      response={intent.reply.text}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Intents;
