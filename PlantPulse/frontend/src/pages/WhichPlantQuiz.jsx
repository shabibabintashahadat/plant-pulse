import React, { useState } from 'react';

const WhichPlantQuiz = () => {
  const [answers, setAnswers] = useState({
    sunlight: '',
    water: '',
    space: '',
  });
  const [suggestion, setSuggestion] = useState('');
  const [image, setImage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let plantSuggestion = '';
    let plantImage = '';

    if (answers.sunlight === 'full' && answers.water === 'frequent' && answers.space === 'large') {
      plantSuggestion = '🌻 You should get a Sunflower! It thrives in full sunlight and needs lots of water and space.';
      plantImage = 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg';
    } else if (answers.sunlight === 'partial' && answers.water === 'moderate' && answers.space === 'medium') {
      plantSuggestion = '🌸 A Peace Lily would be perfect for you! It loves moderate sunlight and moderate watering.';
      plantImage = 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Spathiphyllum_cochlearispathum_RTBG.jpg';
    } else if (answers.sunlight === 'low' && answers.water === 'rare' && answers.space === 'small') {
      plantSuggestion = '🌵 Try a Snake Plant! It’s perfect for low light, infrequent watering, and small spaces.';
      plantImage = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Sansevieria_trifasciata1.jpg';
    } else {
      plantSuggestion = '🌿 Your plant needs are unique! Try exploring other plants that suit your conditions!';
      plantImage = 'https://upload.wikimedia.org/wikipedia/commons/4/49/Assorted_houseplants.jpg';
    }

    setSuggestion(plantSuggestion);
    setImage(plantImage);
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">🌿 Which Plant is Right for You?</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sunlight */}
          <div>
            <label className="block text-green-800 font-semibold mb-2">
              How much sunlight does your space get?
            </label>
            <select
              name="sunlight"
              value={answers.sunlight}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select an option</option>
              <option value="full">Full Sun</option>
              <option value="partial">Partial Sun</option>
              <option value="low">Low Light</option>
            </select>
          </div>

          {/* Water */}
          <div>
            <label className="block text-green-800 font-semibold mb-2">
              How often can you water your plants?
            </label>
            <select
              name="water"
              value={answers.water}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select an option</option>
              <option value="frequent">Frequent</option>
              <option value="moderate">Moderate</option>
              <option value="rare">Rare</option>
            </select>
          </div>

          {/* Space */}
          <div>
            <label className="block text-green-800 font-semibold mb-2">
              How much space do you have?
            </label>
            <select
              name="space"
              value={answers.space}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select an option</option>
              <option value="small">Small Space</option>
              <option value="medium">Medium Space</option>
              <option value="large">Large Space</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 px-10 rounded-full transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Suggestion */}
        {suggestion && (
          <div className="mt-10 text-center">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Your Plant Match!</h2>
            <p className="text-green-800 text-lg mb-6">{suggestion}</p>
            <img
              src={image}
              alt="Plant suggestion"
              className="mx-auto w-72 h-60 object-cover rounded-xl shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default WhichPlantQuiz;
