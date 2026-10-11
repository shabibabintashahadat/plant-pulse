import React, { useState } from "react";

const PlantMoodMatcher = () => {
  const [mood, setMood] = useState(null);

  const plants = {
    happy: {
      name: "Sunflower",
      description: "Sunflowers are bright, cheerful, and symbolize happiness. Their vibrant yellow color will help lift your spirits!",
      image: "https://via.placeholder.com/200?text=Sunflower"
    },
    stressed: {
      name: "Lavender",
      description: "Lavender is known for its calming and stress-relieving properties. It can help soothe anxiety and promote relaxation.",
      image: "https://via.placeholder.com/200?text=Lavender"
    },
    tired: {
      name: "Snake Plant",
      description: "Snake plants are easy to care for and thrive in low light. They help purify the air, making your environment fresh and invigorating.",
      image: "https://via.placeholder.com/200?text=Snake+Plant"
    },
    creative: {
      name: "Aloe Vera",
      description: "Aloe Vera is not only great for your skin but also known to encourage creativity and mental clarity.",
      image: "https://via.placeholder.com/200?text=Aloe+Vera"
    },
  };

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Plant Based on Your Mood!</h1>
      <p className="mb-4">Select your current mood:</p>
      
      <select 
        className="p-2 border-2 border-gray-300 rounded-md"
        onChange={handleMoodChange}
        value={mood}
      >
        <option value="">-- Choose Mood --</option>
        <option value="happy">Happy</option>
        <option value="stressed">Stressed</option>
        <option value="tired">Tired</option>
        <option value="creative">Creative</option>
      </select>

      {mood && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">{plants[mood].name}</h2>
          <img src={plants[mood].image} alt={plants[mood].name} className="w-64 h-64 object-cover my-4" />
          <p>{plants[mood].description}</p>
        </div>
      )}
    </div>
  );
};

export default PlantMoodMatcher;
