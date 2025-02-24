# DuoLens

**DuoLens** is your ultimate language-learning companion, helping you tackle foreign-language webpages by grading their readability based on your Duolingo progress. With DuoLens, you can easily assess if a webpage is at the right level for you, making real-world practice more fun and rewarding!

---

## 🚀 **How It Works**

1. **Fetch User Data from Duolingo API**  
   DuoLens pulls in your vocabulary, grammar level, and lesson progress directly from Duolingo.

2. **Scan the Webpage**  
   The extension scans a webpage, identifying words and grammar structures that may be challenging based on your current knowledge.

3. **Calculate a Difficulty Score**  
   Your difficulty score is calculated by comparing known vs. unknown words, factoring in sentence complexity (like verb conjugations, tenses, and more).

4. **Display the Score**  
   The score is displayed as Easy, Medium, or Hard, and any unknown words are highlighted with quick translations.

---

## 🎉 **Bonus Features**

- **Adjustable Difficulty Weights**  
  Tailor the difficulty by adjusting how much grammar or vocabulary affects the score.

- **Word Lookup on Hover**  
  Hover over unknown words to get translations and definitions instantly!

- **Personalized Study List**  
  Export unknown words to Anki or Duolingo’s practice section to enhance your learning.

---

## 🌟 **Why It’s Useful**

- **Find the Right Content**  
  Discover articles, blogs, and other materials that are just the right level of difficulty for you.

- **Real-World Language Practice**  
  Perfect for integrating your Duolingo lessons into real-world reading. Use your knowledge to tackle new content!

- **Seamless Duolingo Integration**  
  DuoLens syncs with your Duolingo learning, making progress easier to track across both platforms.

---

## 🧠 **Customizable Difficulty Score**

DuoLens calculates a score using several factors that you can tweak:

- **Vocabulary Matching:** Known words make reading easier, while unknown ones increase difficulty.
- **Grammar Complexity:** Things like verb conjugations, passive voice, and complex sentence structures add to the challenge.
- **Sentence Length & Complexity:** Long sentences with multiple clauses are rated harder.
- **Word Types:** You can set the weight of verbs, nouns, and adjectives based on their importance in a sentence.

---

## ⚙️ **Features Breakdown**

1. **Content Script**  
   Extracts text from the webpage and sends it to the background script for analysis.

2. **Background Script**  
   Fetches your Duolingo data, processes the webpage text, and calculates the difficulty score.

3. **Popup UI**  
   Displays the difficulty score, highlights unknown words, and allows you to adjust settings.

4. **Settings Page**  
   Customize your difficulty score with an easy-to-use options page where you can tweak verb, noun, and adjective weights.

---

## 🗂️ **Project Structure**


```DuoLens/
│── manifest.json      # Defines extension settings & permissions
│── LICENSE            # Open-source license info
│── README.md          # Project documentation
│── .gitattributes     # Handles Git settings (e.g., line endings)
│── config.json        # Default settings for difficulty weights
│
├── scripts/           # JavaScript logic for the extension
│   ├── background.js  # Handles API calls & storage
│   ├── content.js     # Extracts & processes webpage text
│   ├── popup.js       # Controls the popup behavior
│
├── ui/                # Frontend UI for the extension
│   ├── popup.html     # HTML for the extension popup
│
├── styles/            # CSS styles for the popup and UI
│
├── options/           # Settings page for user customization
│   ├── options.html   # HTML for the settings page
│   ├── options.js     # JavaScript for options page logic
│   ├── options.css    # CSS for the options page
└── assets/            # Icons, images, and other static files
```

---

## 💻 **Workflow**

1. Open any webpage in your browser.
2. DuoLens automatically scans the text of the page.
3. The background script fetches your Duolingo data and computes the difficulty score.
4. The popup UI displays the difficulty score and highlights words that might be challenging for you to understand.

---

## ⚙️ **Installation**

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/DuoLens.git