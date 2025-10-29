// referenceLibrary.js
// Calibration & baseline statistics for the AI detector.
// This file is intentionally small and editable — update weights or sample averages by committing changes to your repo.
// The HTML page will attempt to load this file; if absent, the page will fall back to its embedded defaults.

window.REFERENCE_LIBRARY = {
  // Base category weights (taken from uploaded doc emphasis + reasonable tuning).
  // Higher weight => more reliable indicator (amplified in effective weight).
  baseWeights: {
    "emDash": 1.7,
    "promo": 1.6,
    "symbolism": 1.5,
    "weasel": 1.3,
    "templating": 1.4,
    "disclaimer": 1.1,
    "genericSummary": 1.0,
    "phenomenon": 1.2,
    "weirdQuotes": 0.5,
    "longLists": 0.8,
    "hedging": 0.9,
    "citationTokens": 1.3,
    "sectionCase": 0.6,
    "emphasisSignposting": 1.0,
    "technicalPhrases": 1.1,
    "conjunctiveIng": 0.7,
    "overcitation": 1.1,
    "lists": 0.6
  },

  // Sample average frequencies measured on small reference sets (counts per 1000 words)
  // (These are baseline calibration numbers; add more representative examples if you tune later)
  // aiAvg: average frequency in AI-generated reference texts
  // humanAvg: average frequency in human-written reference texts
  stats: {
    emDash: { aiAvg: 5.8, humanAvg: 1.1 },
    promo: { aiAvg: 9.2, humanAvg: 2.4 },
    symbolism: { aiAvg: 4.0, humanAvg: 1.5 },
    weasel: { aiAvg: 3.6, humanAvg: 1.4 },
    templating: { aiAvg: 1.9, humanAvg: 0.1 },
    disclaimer: { aiAvg: 2.2, humanAvg: 0.4 },
    genericSummary: { aiAvg: 6.0, humanAvg: 2.3 },
    phenomenon: { aiAvg: 4.8, humanAvg: 1.8 },
    weirdQuotes: { aiAvg: 1.1, humanAvg: 0.8 },
    longLists: { aiAvg: 6.5, humanAvg: 3.2 },
    hedging: { aiAvg: 7.4, humanAvg: 4.0 },
    citationTokens: { aiAvg: 2.8, humanAvg: 0.6 },
    sectionCase: { aiAvg: 3.0, humanAvg: 2.6 },
    emphasisSignposting: { aiAvg: 5.5, humanAvg: 2.0 },
    technicalPhrases: { aiAvg: 4.2, humanAvg: 3.1 },
    conjunctiveIng: { aiAvg: 6.2, humanAvg: 3.9 },
    overcitation: { aiAvg: 3.2, humanAvg: 1.7 },
    lists: { aiAvg: 5.0, humanAvg: 2.9 }
  },

  // Small multiplier formula used to scale base weights by AI/human prevalence:
  // effectiveWeight = baseWeight * (aiAvg / max(1, humanAvg))
  // This can be changed in the HTML if you prefer a different scale.
  note: "Edit baseWeights or stats in referenceLibrary.js to adjust calibration. The page will use effectiveWeight = baseWeight * (aiAvg / max(1, humanAvg))."
};
