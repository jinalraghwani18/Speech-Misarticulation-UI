'use client'

import { useState } from 'react'
import Carousel from './components/Carousel'
import ResultScreen from './components/ResultScreen'
import ProgressBar from './components/ProgressBar'
import WelcomeScreen from './components/WelcomeScreen'
import { words } from './data/words'

export default function SpeechMisarticulationDetection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [isComplete, setIsComplete] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)

  const handleNext = (word: string, isCorrect: boolean) => {
    setResults(prev => ({ ...prev, [word]: isCorrect }))
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setResults({})
    setIsComplete(false)
    setShowWelcome(true)
  }

  if (showWelcome) {
    return <WelcomeScreen onStart={() => setShowWelcome(false)} />
  }

  if (isComplete) {
    return <ResultScreen results={results} words={words} onRestart={handleRestart} />
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Speech Misarticulation Detection</h1>
      
      <ProgressBar current={currentIndex + 1} total={words.length} />
      <div className="mb-4 text-center">
        <span className="font-semibold">Word {currentIndex + 1} of {words.length}</span>
      </div>
      <Carousel
        word={words[currentIndex]}
        onNext={handleNext}
      />
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Click "Start Recording" to begin, then "Next Word" when you're ready to continue.</p>
      </div>
    </div>
  )
}

