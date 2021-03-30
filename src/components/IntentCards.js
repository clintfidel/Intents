import React from 'react'

const IntentCard = ({ expressionType, id, name, onChange, checked, expression, response, colorCode }) => {
  return (
    <div className="w-full h-full mb-4 md:mb-0 lg:mb-0 max-h-full rounded-md bg-white border-2 border-primary border-opacity-20 overflow-y-scroll">
      <div className={["w-full", "h-1", "rounded-t-md", `bg-${colorCode}`, 'border-1', `border-${colorCode}`].join(' ')}></div>
      <div className="p-6">
        <div className="flex md:justify-between">
          <p className="font-customBarlow text-2xl border-b-2 border-primary border-opacity-20 text-primary-text my-2">{expressionType}</p>
          <div>
            <div class="round mt-3 ml-4 md:ml-0 lg:ml-0">
              <input onChange={onChange} checked={checked} type="checkbox" id={id} name={name} />
              <label for={id}></label>
            </div>
          </div>
        </div>
        {
          expression.map((value, index) => (
            <div className="w-full rounded-t-md mb-2 border-1" key={value.id}>
              <p className="font-customRoboto text-base text-white py-3 text-opacity-60">{value.text}</p>
            </div>
          ))
        }
      </div>
      <div className="w-full bg-mute rounded-b-sm px-6 py-4">
        <p className="font-customBarlow text-lg text-primary-text">{response}</p>
      </div>
    </div>
  )
};

export default IntentCard;
